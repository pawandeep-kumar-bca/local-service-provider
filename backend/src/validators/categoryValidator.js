const { body} = require("express-validator");
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

module.exports = { categoryValidator };
