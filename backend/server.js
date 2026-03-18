require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");

const app = require("./src/app");
const connectDB = require("./src/config/db");

const chatSocket = require("./src/sockets/chat.socket");
const notificationSocket = require("./src/sockets/notification.socket");

// ================= DB CONNECT =================
connectDB();

// ================= CREATE SERVER =================
const server = http.createServer(app);

// ================= SOCKET.IO =================
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// ================= SOCKET INIT =================
chatSocket(io);
notificationSocket(io);

// ================= GLOBAL IO =================
app.set("io", io);

// ================= START SERVER =================
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});