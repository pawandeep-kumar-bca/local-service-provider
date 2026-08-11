const paymentModel = require("../models/payment.model");
const bookingModel = require("../models/booking.model");
const razorpay = require("../config/razorpay");
const crypto = require("crypto");
const mongoose = require("mongoose");
const UserModel = require("../models/User.model");
const { generateId } = require("../utils/generateId");

// ✅ CREATE ORDER (handles both COD and UPI)

async function createOrder(req, res) {
  try {
    const { bookingId, paymentMethod } = req.body;
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

    if (booking.userSnapshot.userObjectId.toString() !== userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Check existing payment
    let payment = await paymentModel.findOne({ bookingId });

    if (payment && payment.paymentStatus === "success") {
      return res.status(400).json({ message: "Already paid" });
    }

    // Create payment only once
    if (!payment) {
      const paymentId = await generateId("LSP-PAY-", "payment");

      payment = await paymentModel.create({
        paymentId,
        userId,
        providerId: booking.providerSnapshot.providerObjectId,
        bookingId,
        amount: booking.pricing.totalAmount,
        currency: "INR",
        paymentStatus: "pending",
      });
    }

    // ---------------- COD ----------------
    if (paymentMethod === "cod") {
      payment.paymentMethod = "cod";
      payment.amount = booking.pricing.totalAmount;
      payment.currency = "INR";
      payment.paymentStatus = "pending";

      await payment.save();

      booking.paymentMethod = "cod";
      booking.paymentStatus = "pending";

      await booking.save();

      return res.status(201).json({
        message: "Booking confirmed with Cash on Delivery",
        payment,
        booking,
      });
    }

    // ---------------- UPI ----------------
    const amount = Math.round(booking.pricing.totalAmount * 100);

    const razorpayOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: booking.bookingId, // use custom bookingId
    });

    payment.paymentMethod = "upi";
    payment.amount = amount;
    payment.currency = "INR";
    payment.razorpayOrderId = razorpayOrder.id;
    payment.receipt = razorpayOrder.receipt;
    payment.paymentStatus = "pending";

    await payment.save();

    booking.paymentMethod = "upi";
    booking.paymentStatus = "pending";
    booking.payment.orderId = razorpayOrder.id;

    await booking.save();

    return res.status(201).json({
      message: "Order created successfully",
      payment,
      razorpayOrder,
    });
  } catch (err) {
    console.error("createOrder error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
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

async function userPaymentHistory(req, res) {
  try {
    const { search, status } = req.query;
    const userId = req.user.id;

    const userExists = await UserModel.findById(userId);

    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const filters = {
      userId: new mongoose.Types.ObjectId(userId),
    };

    if (status && status !== "all") {
      filters.paymentStatus = status;
    }
    const pipeline = [
      {
        $match: filters,
      },

      {
        $lookup: {
          from: "bookings",
          localField: "bookingId",
          foreignField: "_id",
          as: "booking",
        },
      },

      {
        $unwind: "$booking",
      },
    ];
    if (search?.trim()) {
      pipeline.push({
        $match: {
          $or: [
            {
              "booking.providerSnapshot.name": {
                $regex: search?.trim(),
                $options: "i",
              },
            },
            {
              "booking.serviceSnapshot.categoryName": {
                $regex: search?.trim(),
                $options: "i",
              },
            },
          ],
        },
      });
    }
    pipeline.push({
      $project: {
        _id: 1,
        bookingId: 1,
        createdAt: 1,
        amount: 1,
        paymentStatus: 1,
        paymentMethod: 1,

        categoryName: "$booking.serviceSnapshot.categoryName",

        providerName: "$booking.providerSnapshot.name",

        providerImage: "$booking.providerSnapshot.profileImage",
      },
    });
    const paymentHistory = await paymentModel.aggregate(pipeline);

    if (paymentHistory.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No payment history found",
        paymentHistory: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "User payment history fetched successfully",
      paymentHistory,
    });
  } catch (err) {
    console.error("User payment history error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
module.exports = {
  createOrder,
  verifyPayment,
  markPaymentFailed,
  razorpayWebhook,
  paymentHistory,
  userPaymentHistory,
};
