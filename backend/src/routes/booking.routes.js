const express = require("express");

const bookingController = require("../controllers/booking.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { BookingValidation } = require("../validators/booking.validator");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const providerMiddleware = require("../middlewares/provider.middleware");
const router = express.Router();

router.post(
  "/create",
  authMiddleware.tokenVerify,
  BookingValidation,
  bookingController.userBookingCreate,
);
// GET    /api/v1/bookings

router.get(
  "/user",
  authMiddleware.tokenVerify,
  bookingController.getUserAllBooking,
);
router.get(
  "/provider",
  authMiddleware.tokenVerify,
  providerMiddleware,
  bookingController.getAllProviderBooking,
);
// GET    /api/v1/bookings/:id
router.get(
  "/:id",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.getUserOneBooking,
);

// PATCH /api/v1/bookings/:id/accept
router.patch(
  "/:id/accept",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerAcceptBooking,
);

// PATCH /api/v1/bookings/:id/reject
router.patch(
  "/:id/reject",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerRejectBooking,
);

// PATCH /api/v1/bookings/:id/start
router.patch(
  "/:id/start",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerStartBooking,
);

// PATCH /api/v1/bookings/:id/complete
router.patch(
  "/:id/complete",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.providerCompletedBooking,
);

// PATCH /api/v1/bookings/:id/cancel
router.patch(
  "/:id/cancel",
  authMiddleware.tokenVerify,
  validateObjectId("id"),
  bookingController.userBookingCancel,
);
module.exports = router;
