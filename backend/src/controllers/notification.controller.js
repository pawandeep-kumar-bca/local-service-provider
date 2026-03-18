const notificationModel = require("../models/notification.model");
const userModel = require("../models/User.model");
const { getUserSocket } = require("../utils/socketUsers");
async function createNotification(req, res) {
  try {
    const { receiverId, type, title, message, relatedId, relatedModel } =
      req.body;
    const senderId = req.user.id;

    if (!receiverId || !message || !type || !title) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const notification = await notificationModel.create({
      receiverId,
      senderId,
      type,
      title,
      message,
      relatedId,
      relatedModel,
    });

    // 🔥 REAL-TIME PART
    const io = req.app.get("io");
    const receiverSocket = getUserSocket(receiverId);

    if (receiverSocket) {
      io.to(receiverSocket).emit("new_notification", notification);
    }

    return res.status(201).json({
      message: "Notification created successfully",
      notification,
    });
  } catch (err) {
    console.error("create notification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function getAllNotification(req, res) {
  try {
    const userId = req.user.id;
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;

    const skip = (page - 1) * limit;

    const [notifications, total] = await Promise.all([
      notificationModel
        .find({ receiverId: userId, isDeleted: false })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),

      notificationModel.countDocuments({
        receiverId: userId,
        isDeleted: false,
      }),
    ]);

    return res.status(200).json({
      message: notifications.length
        ? "Notifications fetched successfully"
        : "No notifications found",
      notifications,
      totalNotifications: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (err) {
    console.error("get all notification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function readNotification(req, res) {
  try {
    const userId = req.user.id;
    const notificationId = req.params.id;

    const notification = await notificationModel.findOneAndUpdate(
      { _id: notificationId, receiverId: userId },
      { isRead: true },
      { new: true },
    );

    if (!notification) {
      return res
        .status(404)
        .json({ message: "Notification not found or forbidden" });
    }

    return res.status(200).json({
      message: "Notification marked as read",
      notification,
    });
  } catch (err) {
    console.error("read notification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteNotification(req, res) {
  try {
    const userId = req.user.id;
    const notificationId = req.params.id;

    const notification = await notificationModel.findOneAndUpdate(
      { _id: notificationId, receiverId: userId, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!notification) {
      return res
        .status(404)
        .json({ message: "Notification not found or already deleted" });
    }

    return res.status(200).json({
      message: "Notification deleted successfully",
    });
  } catch (err) {
    console.error("delete notification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function unreadNotification(req, res) {
  try {
    const userId = req.user.id;
    const unreadCount = await notificationModel.countDocuments({
      receiverId: userId,
      isRead: false,
      isDeleted: false,
    });
    return res.status(200).json({
      message: "unread notifications count fetched successfully",
      unreadCount: unreadCount,
    });
  } catch (err) {
    console.error("unread notification error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = {
  createNotification,
  getAllNotification,
  readNotification,
  deleteNotification,
  unreadNotification,
};
