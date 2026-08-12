const { body } = require("express-validator");
const passwordValidation = (field = "password") => {
  return body(field)
    .notEmpty()
    .withMessage(`${field} is required`)
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[A-Z]/)
    .withMessage("Must contain uppercase")
    .matches(/[a-z]/)
    .withMessage("Must contain lowercase")
    .matches(/[0-9]/)
    .withMessage("Must contain number")
    .matches(/[^A-Za-z0-9]/)
    .withMessage("Must contain special char");
};
module.exports = passwordValidation