const { body } = require("express-validator");
const respondWithValidationErrors = require("../middlewares/validation.middleware");

const categoryValidator = [
  body("name").trim().notEmpty().withMessage("Category name is required"),
  body("description").optional().trim(),

  body("backgroundColor")
    .optional()
    .matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .withMessage("Invalid background color"),

  body("status")
    .optional()
    .isIn(["active", "inactive"])
    .withMessage("Invalid status"),
  respondWithValidationErrors,
];

const providerCategoryCreateValidator = [
  body("categoryId")
    .trim()
    .notEmpty()
    .withMessage("Category is required")
    .isMongoId()
    .withMessage("Invalid category ID"),

  body("experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isFloat({ min: 0 })
    .withMessage("Experience must be a valid number"),

  body("priceType")
    .notEmpty()
    .withMessage("Price type is required")
    .isIn(["fixed", "hourly"])
    .withMessage("Price type must be fixed or hourly"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid number"),

  body("description").optional().trim(),

  respondWithValidationErrors,
];

const providerCategoryUpdateValidator = [
  body("experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isFloat({ min: 0 })
    .withMessage("Experience must be a valid number"),

  body("priceType")
    .notEmpty()
    .withMessage("Price type is required")
    .isIn(["fixed", "hourly"])
    .withMessage("Price type must be fixed or hourly"),

  body("price")
    .notEmpty()
    .withMessage("Price is required")
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid number"),

  body("description")
    .optional()
    .trim(),

  respondWithValidationErrors,
];
module.exports = { categoryValidator, providerCategoryCreateValidator,providerCategoryUpdateValidator };
