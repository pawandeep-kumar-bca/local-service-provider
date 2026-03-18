const paymentModel = require("../models/payment.model");
const bookingModel = require("../models/booking.model");
const razorpay = require("../config/razorpay");
const crypto = require("crypto");
const mongoose = require("mongoose");

// ✅ CREATE ORDER
async function createOrder(req, res) {
  try {
    const { bookingId } = req.body;
    const userId = req.user.id;

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

    const amount = booking.price * 100;

    const razorpayOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: bookingId,
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
        paymentStatus: "pending",
      },
      { upsert: true, new: true },
    );

    booking.paymentStatus = "pending";
    await booking.save();

    return res.status(201).json({
      message: "Order created",
      payment,
    });
  } catch (err) {
    console.error("createOrder error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ VERIFY PAYMENT
async function verifyPayment(req, res) {
  try {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    const payment = await paymentModel.findOne({ razorpayOrderId });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    // ✅ Authorization check
    if (payment.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
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
      return res.status(400).json({ message: "Invalid signature" });
    }

    // ✅ Transaction
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      payment.paymentStatus = "success";
      payment.razorpayPaymentId = razorpayPaymentId;
      payment.razorpaySignature = razorpaySignature;

      await payment.save({ session });

      booking.paymentStatus = "success";
      booking.bookingStatus = "confirmed";

      await booking.save({ session });

      await session.commitTransaction();
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }

    return res.status(200).json({
      message: "Payment verified successfully",
      payment,
    });
  } catch (err) {
    console.error("verifyPayment error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ✅ WEBHOOK (FIXED RAW BODY ISSUE)
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
      payment.paymentMethod = entity.method;

      await payment.save();

      booking.paymentStatus = "success";
      booking.bookingStatus = "confirmed";

      await booking.save();
    }

    return res.status(200).json({ message: "Webhook processed" });
  } catch (err) {
    console.error("webhook error:", err.message);
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
  razorpayWebhook,
  paymentHistory,
};
