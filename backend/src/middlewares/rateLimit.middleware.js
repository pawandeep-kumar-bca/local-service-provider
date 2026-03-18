const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 5, // 5 attempts
  message: "Too many login attempts. Try later."
});

module.exports = loginLimiter