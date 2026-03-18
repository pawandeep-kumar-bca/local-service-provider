const chatModel = require("../models/chat.model");
const bookingModel = require("../models/booking.model");

async function getChatMessages(req, res) {
  try {
    const bookingId = req.params.bookingId;
    const userId = req.user.id;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;

    const skip = (page - 1) * limit;

    const booking = await bookingModel.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    if (
      userId !== booking.userId.toString() &&
      userId !== booking.providerId.toString()
    ) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    const chats = await chatModel
      .find({ bookingId })
      .sort({ createdAt: 1 }) // chronological
      .skip(skip)
      .limit(limit)
      .lean();

    return res.status(200).json({
      message: "Chats fetched successfully",
      chats,
    });
  } catch (err) {
    console.error("chat messages error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function markMessagesAsRead(req, res) {
  try {
    const bookingId = req.params.bookingId;
    const userId = req.user.id;

    const result = await chatModel.updateMany(
      {
        bookingId,
        receiverId: userId,
        isRead: false,
      },
      {
        $set: { isRead: true, status: "read" },
      },
    );

    return res.status(200).json({
      message: "Messages marked as read",
      updatedMessages: result.modifiedCount,
    });
  } catch (err) {
    console.error("read messages error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

module.exports = {
  getChatMessages,
  markMessagesAsRead,
};
