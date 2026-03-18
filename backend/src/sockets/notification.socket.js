const { addUser, removeUser } = require("../utils/socketUsers");

function notificationSocket(io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // user joins with ID
    socket.on("join", (userId) => {
      addUser(userId, socket.id);
      console.log(`User ${userId} joined`);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      removeUser(socket.id);
    });
  });
}

module.exports = notificationSocket;