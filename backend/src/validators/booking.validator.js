const { body, validationResult } = require("express-validator");

function ResponseWithBookingValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
}

const BookingValidation = [
  body("providerId").notEmpty().withMessage("providerId is required"),

  body("categoryId").notEmpty().withMessage("categoryId is required"),

  body("bookingDate")
    .notEmpty()
    .withMessage("bookingDate is required")
    .isDate()
    .withMessage("Please enter a valid date"),

  body("bookingSlot.startTime")
    .notEmpty()
    .withMessage("Start time is required"),

  body("bookingSlot.endTime").notEmpty().withMessage("End time is required"),
 body("notes")
  .optional({ checkFalsy: true })
  .isLength({ min: 10, max: 100 })
  .withMessage("Notes must be between 10 and 100 characters."),

  body("lat")
    .notEmpty()
    .withMessage("Latitude is required")
    .isFloat({ min: -90, max: 90 })
    .withMessage("Latitude must be a valid number between -90 and 90"),

  body("lng")
    .notEmpty()
    .withMessage("Longitude is required")
    .isFloat({ min: -180, max: 180 })
    .withMessage("Longitude must be a valid number between -180 and 180"),

  body("state").notEmpty().withMessage("state is required"),

  body("district").notEmpty().withMessage("district is required"),

  body("city").notEmpty().withMessage("city is required"),

  body("village").notEmpty().withMessage("village is required").trim(),

  body("fullAddress").notEmpty().withMessage("fullAddress is required").trim(),

  body("landmark").optional().trim(),

  ResponseWithBookingValidation,
];

module.exports = BookingValidation;
