const express = require("express");
const authController = require("../controllers/auth.controller");
const authValidator = require("../validators/auth.validator");
const authMiddleware = require("../middlewares/auth.middleware");
const loginLimiter = require("../middlewares/rateLimit.middleware");
const router = express.Router();

router.post(
  "/register",
  authValidator.registerUserValidation,
  authController.registerUser,
);

router.post(
  "/login",
  loginLimiter,
  authValidator.loginUserValidation,
  authController.loginUser,
);

router.post("/refresh-token", authController.refreshToken);

router.post("/logout", authMiddleware.tokenVerify, authController.logoutUser);

router.get("/me", authMiddleware.tokenVerify, authController.me);

router.post(
  "/forgot-password",
  authValidator.forgotPasswordValidation,
  authController.forgotPassword,
);
router.get("/verify-email/:token", authController.verifyEmail);

router.post(
  "/reset-password/:token",
  authValidator.resetPasswordValidation,
  authController.resetPassword,
);

module.exports = router;
