const { validationResult } = require("express-validator");

const respondWithValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    success:false
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

module.exports = respondWithValidationErrors;