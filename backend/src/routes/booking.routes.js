const express = require("express");

const bookingController = require("../controllers/booking.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const BookingValidation = require("../validators/booking.validator");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware.tokenVerify,
  BookingValidation,
  bookingController.userBookingCreate,
);
// GET    /api/v1/bookings

router.get(
  "/",
  authMiddleware.tokenVerify,
  bookingController.getUserAllBooking,
);
// GET    /api/v1/bookings/:id
router.get(
  "/:id",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.getUserOneBooking,
);
// PUT    /api/v1/bookings/:id/accept
router.put(
  "/:id/accept",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerAcceptBooking,
);
// PUT    /api/v1/bookings/:id/reject
router.put(
  "/:id/reject",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerRejectBooking,
);
// PUT    /api/v1/bookings/:id/start
router.put(
  "/:id/start",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerStartBooking,
);
// PUT    /api/v1/bookings/:id/complete
router.put(
  "/:id/complete",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerCompletedBooking,
);
// PUT    /api/v1/bookings/:id/cancel
router.put(
  "/:id/cancel",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.userBookingCancel,
);
module.exports = router;
