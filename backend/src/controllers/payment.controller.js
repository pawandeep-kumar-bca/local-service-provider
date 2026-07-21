const paymentModel = require("../models/payment.model");
const bookingModel = require("../models/booking.model");
const razorpay = require("../config/razorpay");
const crypto = require("crypto");
const mongoose = require("mongoose");

// ✅ CREATE ORDER (handles both COD and UPI)
async function createOrder(req, res) {
  try {
    const { bookingId, paymentMethod } = req.body; // paymentMethod: "cod" | "upi"
    const userId = req.user.id;

    if (!bookingId || !paymentMethod) {
      return res
        .status(400)
        .json({ message: "bookingId and paymentMethod are required" });
    }

    if (!["cod", "upi"].includes(paymentMethod)) {
      return res.status(400).json({ message: "Invalid paymentMethod" });
    }

    const booking = await bookingModel.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.userId.toString() !== userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // ✅ Prevent duplicate payment
    const existingPayment = await paymentModel.findOne({ bookingId });
    if (existingPayment && existingPayment.paymentStatus === "success") {
      return res.status(400).json({ message: "Already paid" });
    }

    // ---------------- COD FLOW ----------------
    if (paymentMethod === "cod") {
      const payment = await paymentModel.findOneAndUpdate(
        { bookingId },
        {
          userId,
          providerId: booking.providerId,
          bookingId,
          amount: booking.pricing.totalAmount, // rupees (no gateway involved)
          currency: "INR",
          paymentMethod: "cod",
          paymentStatus: "pending", // stays pending till service is delivered/settled
        },
        { upsert: true, new: true },
      );

      booking.paymentMethod = "cod";
      booking.paymentStatus = "pending";
      booking.bookingStatus = "accepted"; // COD booking is confirmed immediately, no gateway to wait for
      booking.acceptedAt = new Date();
      await booking.save();

      return res.status(201).json({
        message: "Booking confirmed with Cash on Delivery",
        payment,
        booking,
      });
    }

    // ---------------- UPI FLOW ----------------
    const amount = Math.round(booking.pricing.totalAmount * 100); // paise, Razorpay expects smallest unit

    const razorpayOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: bookingId.toString(),
    });

    const payment = await paymentModel.findOneAndUpdate(
      { bookingId },
      {
        userId,
        providerId: booking.providerId,
        bookingId,
        amount,
        currency: "INR",
        razorpayOrderId: razorpayOrder.id,
        receipt: razorpayOrder.receipt,
        paymentMethod: "upi",
        paymentStatus: "pending",
      },
      { upsert: true, new: true },
    );

    booking.paymentMethod = "upi";
    booking.paymentStatus = "pending";
    booking.payment.orderId = razorpayOrder.id;
    await booking.save();

    return res.status(201).json({
      message: "Order created",
      payment,
      razorpayOrder, // frontend needs order.id + amount + currency to open checkout
    });
  } catch (err) {
    console.error("createOrder error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ VERIFY PAYMENT (UPI only)
async function verifyPayment(req, res) {
  try {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    if (!razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return res.status(400).json({ message: "Missing payment details" });
    }

    const payment = await paymentModel.findOne({ razorpayOrderId });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // ✅ Authorization check
    if (payment.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    if (payment.paymentStatus === "success") {
      return res.status(200).json({ message: "Already verified", payment });
    }

    const booking = await bookingModel.findById(payment.bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // ✅ Signature verify
    const body = razorpayOrderId + "|" + razorpayPaymentId;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpaySignature) {
      // mark as failed so it doesn't stay "pending" forever
      payment.paymentStatus = "failed";
      await payment.save();

      booking.paymentStatus = "failed";
      await booking.save();

      return res.status(400).json({ message: "Invalid signature" });
    }

    // ✅ Transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // NOTE: "success" — must match paymentModel.paymentStatus enum exactly
      payment.paymentStatus = "success";
      payment.razorpayPaymentId = razorpayPaymentId;
      payment.razorpaySignature = razorpaySignature;

      await payment.save({ session });

      // NOTE: "success" — must match bookingModel.paymentStatus enum exactly
      booking.paymentStatus = "success";
      booking.bookingStatus = "accepted"; // this is bookingStatus, "accepted" is valid there
      booking.acceptedAt = new Date();

      booking.payment.paymentId = razorpayPaymentId;
      booking.payment.orderId = razorpayOrderId;
      booking.payment.transactionId = razorpaySignature;

      await booking.save({ session });

      await session.commitTransaction();
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }

    return res.status(200).json({
      message: "Payment verified successfully",
      payment,
      booking,
    });
  } catch (err) {
    console.error("verifyPayment error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ MARK PAYMENT FAILED (call this from frontend if user cancels/closes checkout)
async function markPaymentFailed(req, res) {
  try {
    const { razorpayOrderId } = req.body;

    const payment = await paymentModel.findOne({ razorpayOrderId });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    if (payment.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // NOTE: check against "success", not "confirmed" — matches paymentModel enum
    if (payment.paymentStatus !== "success") {
      payment.paymentStatus = "failed";
      await payment.save();

      await bookingModel.findByIdAndUpdate(payment.bookingId, {
        paymentStatus: "failed",
      });
    }

    return res.status(200).json({ message: "Payment marked as failed" });
  } catch (err) {
    console.error("markPaymentFailed error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ WEBHOOK (source of truth, works even if user closes browser mid-payment)
async function razorpayWebhook(req, res) {
  try {
    const signature = req.headers["x-razorpay-signature"];

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(req.body) // raw body
      .digest("hex");

    if (expectedSignature !== signature) {
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    const event = JSON.parse(req.body.toString());

    if (event.event === "payment.captured") {
      const entity = event.payload.payment.entity;

      const payment = await paymentModel.findOne({
        razorpayOrderId: entity.order_id,
      });

      if (!payment)
        return res.status(404).json({ message: "Payment not found" });

      // ✅ Idempotency
      if (payment.paymentStatus === "success") {
        return res.status(200).json({ message: "Already processed" });
      }

      const booking = await bookingModel.findById(payment.bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }

      payment.paymentStatus = "success";
      payment.razorpayPaymentId = entity.id;
      payment.paymentMethod = "upi";

      await payment.save();

      booking.paymentStatus = "success";
      booking.bookingStatus = "accepted";
      booking.acceptedAt = new Date();

      booking.payment.paymentId = entity.id;
      booking.payment.orderId = entity.order_id;

      await booking.save();
    }

    if (event.event === "payment.failed") {
      const entity = event.payload.payment.entity;

      const payment = await paymentModel.findOne({
        razorpayOrderId: entity.order_id,
      });

      if (payment && payment.paymentStatus !== "success") {
        payment.paymentStatus = "failed";
        await payment.save();

        await bookingModel.findByIdAndUpdate(payment.bookingId, {
          paymentStatus: "failed",
        });
      }
    }

    return res.status(200).json({ message: "Webhook processed" });
  } catch (err) {
    console.error("webhook error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ PAYMENT HISTORY
async function paymentHistory(req, res) {
  try {
    const userId = req.user.id;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [payments, total] = await Promise.all([
      paymentModel
        .find({ userId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip),
      paymentModel.countDocuments({ userId }),
    ]);

    return res.status(200).json({
      total,
      page,
      limit,
      data: payments,
    });
  } catch (err) {
    console.error("paymentHistory error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createOrder,
  verifyPayment,
  markPaymentFailed,
  razorpayWebhook,
  paymentHistory,
};