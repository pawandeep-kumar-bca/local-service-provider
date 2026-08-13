
const {body}= require('express-validator');
const respondWithValidationErrors = require('../middlewares/validation.middleware');
const updateUserProfileValidation = [
  body("fullname")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Fullname must be at least 3 characters"),

  body("phoneNumber")
    .optional()
    .isMobilePhone("en-IN")
    .withMessage("Invalid phone number"),

  respondWithValidationErrors,
];
module.exports ={updateUserProfileValidation}