const { body, validationResult } = require("express-validator");

const respondWithValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const registerUserValidation = [
  body("fullname")
    .notEmpty().withMessage("Fullname is required")
    .isLength({ min: 3 }),

  body("email")
    .notEmpty().isEmail(), 

  body("password")
    .notEmpty()
    .isLength({ min: 8 })
    .matches(/[A-Z]/).withMessage("Must contain uppercase")
    .matches(/[a-z]/).withMessage("Must contain lowercase")
    .matches(/[0-9]/).withMessage("Must contain number")
    .matches(/[^A-Za-z0-9]/).withMessage("Must contain special char"),
  
  respondWithValidationErrors,
];

const loginUserValidation = [
  body("email").notEmpty().isEmail(),
  body("password").notEmpty().isLength({ min: 6 }),
  respondWithValidationErrors
];

const forgotPasswordValidation = [
  body("email").notEmpty().isEmail(),
  respondWithValidationErrors
];

const resetPasswordValidation = [
  body("password").notEmpty().isLength({ min: 6 }),
  respondWithValidationErrors
];

module.exports = {
  registerUserValidation,
  loginUserValidation,
  forgotPasswordValidation,
  resetPasswordValidation
};