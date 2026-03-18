const chatModel = require("../models/chat.model");
const bookingModel = require("../models/booking.model");
const notificationModel = require("../models/notification.model");
const mongoose = require("mongoose");

const {
  addUser,
  removeUser,
  getUserSocket,
} = require("../utils/socketUsers");

function chatSocket(io) {

  // 🔐 SOCKET AUTH MIDDLEWARE
  io.use((socket, next) => {
    try {
      const token = socket.handshake.auth?.token;
      if (!token) return next(new Error("Unauthorized"));

      const decoded = require("jsonwebtoken").verify(
        token,
        process.env.JWT_SECRET
      );

      socket.userId = decoded.id;
      next();
    } catch (err) {
      next(new Error("Unauthorized"));
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    const userId = socket.userId;

    // register user
    addUser(userId, socket.id);

    // join booking room
    socket.on("joinChat", (bookingId) => {
      if (!mongoose.Types.ObjectId.isValid(bookingId)) return;
      socket.join(bookingId);
    });

    // 📩 SEND MESSAGE
    socket.on("sendMessage", async (data) => {
      try {
        const { bookingId, receiverId, messageText } = data;

        if (!messageText?.trim()) return;
        if (!mongoose.Types.ObjectId.isValid(bookingId)) return;

        const booking = await bookingModel.findById(bookingId);
        if (!booking) return;

        // 🔐 VALIDATE USER
        if (
          userId !== booking.userId.toString() &&
          userId !== booking.providerId.toString()
        ) {
          return;
        }

        const message = await chatModel.create({
          bookingId,
          senderId: userId,
          receiverId,
          messageText,
          status: "sent",
        });

        // emit message
        io.to(bookingId).emit("newMessage", message);

        // update last message
        await bookingModel.findByIdAndUpdate(bookingId, {
          lastMessage: messageText,
          lastMessageAt: new Date(),
        });

        const receiverSocket = getUserSocket(receiverId);

        // send real-time notification
        if (receiverSocket) {
          io.to(receiverSocket).emit("newNotification", {
            type: "new_message",
            message: "You received a new message",
            bookingId,
          });

          // update status
          await chatModel.findByIdAndUpdate(message._id, {
            status: "delivered",
          });
        } else {
          // save notification only if offline
          await notificationModel.create({
            receiverId,
            senderId: userId,
            type: "new_message",
            title: "New Message",
            message: "You received a new message",
            relatedId: bookingId,
            relatedModel: "Chat",
          });
        }

      } catch (err) {
        console.error("sendMessage socket error:", err);
      }
    });

    // typing
    socket.on("typing", (bookingId) => {
      socket.to(bookingId).emit("typing", { userId });
    });

    socket.on("stopTyping", (bookingId) => {
      socket.to(bookingId).emit("stopTyping", { userId });
    });

    // ✅ READ MESSAGES
    socket.on("readMessages", async ({ bookingId }) => {
      try {
        await chatModel.updateMany(
          {
            bookingId,
            receiverId: userId,
            isRead: false,
          },
          {
            $set: { isRead: true, status: "read" },
          }
        );

        io.to(bookingId).emit("messagesRead", {
          bookingId,
          userId,
        });

      } catch (err) {
        console.error("readMessages error:", err);
      }
    });

    socket.on("disconnect", () => {
      removeUser(socket.id);
      console.log("User disconnected:", socket.id);
    });
  });
}

module.exports = chatSocket;