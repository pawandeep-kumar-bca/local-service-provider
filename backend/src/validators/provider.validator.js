const { body} = require("express-validator");
const respondWithValidationErrors = require("../middlewares/validation.middleware");


const providerValidator = [
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isMobilePhone("en-IN")
    .withMessage("Invalid phone number"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isNumeric()
    .withMessage("Experience must be a number"),
  body("categories").notEmpty().withMessage("categories is required"),

  body("state").notEmpty().withMessage("State is required"),
  ,
  body("district").notEmpty().withMessage("District is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("locality")
    .notEmpty()
    .withMessage("Village is required")
    .isLength({ min: 3 })
    .withMessage("Village name must be valid")
    .trim(),

  respondWithValidationErrors,
];

const providerUpdateValidator = [
  body("phoneNumber")
    .optional()
    .isMobilePhone("en-IN")
    .withMessage("Invalid phone number"),

  body("price").optional().isNumeric().withMessage("Price must be a number"),

  body("experience")
    .optional() 
    .isNumeric()
    .withMessage("Experience must be a number"),

  body("city")
    .optional()
    .isLength({ min: 2 })
    .withMessage("City name must be valid")
    .trim(),

  respondWithValidationErrors,
];
module.exports = {
  providerUpdateValidator,
  providerValidator,
};
