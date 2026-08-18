const { body } = require("express-validator");
const passwordValidation = require("./password.validator");
const respondWithValidationErrors = require("../middlewares/validation.middleware");

// Register
const registerUserValidation = [
  body("fullname")
    .notEmpty()
    .withMessage("Fullname is required")
    .isLength({ min: 3 })
    .withMessage("Fullname must be at least 3 characters"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),

  passwordValidation("password"),

  respondWithValidationErrors,
];

// Login
const loginUserValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),

  body("password").notEmpty().withMessage("Password is required"),

  respondWithValidationErrors,
];

// Forgot Password
const forgotPasswordValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email"),

  respondWithValidationErrors,
];

// Reset Password
const resetPasswordValidation = [
  passwordValidation("password"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      return true;
    }),

  respondWithValidationErrors,
];

// Change Password
const changePasswordValidation = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),

  passwordValidation("newPassword"),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error("Passwords do not match");
      }

      return true;
    }),

  respondWithValidationErrors,
];

module.exports = {
  registerUserValidation,
  loginUserValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  changePasswordValidation,
};
