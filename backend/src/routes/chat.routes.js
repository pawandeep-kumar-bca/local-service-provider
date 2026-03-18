const express = require("express");
const chatController = require("../controllers/chat.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const ObjectIdMiddleware = require("../middlewares/validateObjectId.middleware");

const router = express.Router();

// GET messages
router.get(
  "/:bookingId/messages",
  authMiddleware.tokenVerify,
  ObjectIdMiddleware('bookingId'),
  chatController.getChatMessages
);

// mark as read
router.post(
  "/:bookingId/read",
  authMiddleware.tokenVerify,
  ObjectIdMiddleware('bookingId'),
  chatController.markMessagesAsRead
);

module.exports = router;