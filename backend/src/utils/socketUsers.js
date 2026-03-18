// chat users (real-time messaging)
const chatUsers = new Map();        // userId -> socketId

// notification users (alerts, push updates)
const notificationUsers = new Map(); // userId -> socketId


// ================= ADD USER =================
function addUser(userId, socketId, type = "chat") {
  if (type === "chat") {
    chatUsers.set(userId, socketId);
  } else if (type === "notification") {
    notificationUsers.set(userId, socketId);
  }
}


// ================= REMOVE USER =================
function removeUser(socketId) {
  // remove from chatUsers
  for (let [userId, sId] of chatUsers.entries()) {
    if (sId === socketId) {
      chatUsers.delete(userId);
      break;
    }
  }

  // remove from notificationUsers
  for (let [userId, sId] of notificationUsers.entries()) {
    if (sId === socketId) {
      notificationUsers.delete(userId);
      break;
    }
  }
}


// ================= GET SOCKET =================
function getUserSocket(userId, type = "chat") {
  if (type === "chat") {
    return chatUsers.get(userId);
  } else if (type === "notification") {
    return notificationUsers.get(userId);
  }
}


// ================= GET ONLINE USERS =================
function getOnlineUsers(type = "chat") {
  return type === "chat" ? chatUsers : notificationUsers;
}


module.exports = {
  addUser,
  removeUser,
  getUserSocket,
  getOnlineUsers,
};