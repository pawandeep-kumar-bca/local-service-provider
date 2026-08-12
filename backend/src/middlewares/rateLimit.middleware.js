const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: process.env.NODE_ENV === "development" ? 100 : 5,
  message: "Too many login attempts. Try later.",
});

module.exports = loginLimiter