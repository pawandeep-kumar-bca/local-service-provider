const express = require("express");
const providerControllers = require("../controllers/provider.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const providerValidator = require("../validators/provider.validator");
const { documentUpload } = require("../middlewares/upload.middleware");
const validateObjectIdMiddleware = require("../middlewares/validateObjectId.middleware");
const roleBased = require("../middlewares/role.middleware");
const providerMiddleware = require("../middlewares/provider.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const router = express.Router();

router.post(
  "/",
  authMiddleware.tokenVerify,
  documentUpload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "aadharCard", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
  ]),
  providerValidator.providerValidator,
  providerControllers.providerProfileCreate,
);

// GET    /api/v1/providers/me
router.get(
  "/me",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.getProvider,
);

router.put(
  "/me",
  authMiddleware.tokenVerify,
  providerMiddleware,
  documentUpload.fields([{ name: "profileImage", maxCount: 1 }]),
  providerValidator.providerUpdateValidator,
  providerControllers.updateProvider,
);
// GET /api/v1/providers
router.get("/", providerControllers.getProviders);

router.get("/nearby", providerControllers.nearbySearchLocation);

router.get("/recommended", providerControllers.recommendedProviders);

//==========================
// PROVIDER DASHBOARD APIS
//==========================

// GET /api/v1/providers/dashboard/overview
router.get(
  "/dashboard/overview",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.providerDashboardOverview,
);

// GET /api/v1/provider/dashboard/today-bookings
router.get(
  "/dashboard/today-bookings",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.todayBookings,
);
// GET /api/v1/provider/dashboard/booking-analytics?period=week

router.get(
  "/dashboard/booking-analytics",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.bookingAnalytics,
);

//  `GET /schedule/summary`

router.get(
  "/schedule/summary",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.scheduleSummary,
);

router.get(
  "/schedule",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.scheduleBookings,
);
//  `GET /schedule/upcoming-bookings`

router.get(
  "/schedule/upcoming-bookings",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.providerUpcomingBooking,
);

//  `GET /schedule/slots`

router.get(
  "/schedule/slots",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.providerSlots,
);

//  `PATCH/schedule /availability`

router.patch(
  "/schedule/availability",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.setProviderAvailability,
);

//  `GET/schedule /availability`

router.get(
  "/schedule/availability",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.getProviderAvailability,
);

//================================
// PROVIDER EARNING DASHBOARD APIS
//================================

// GET /provider/earnings/summary

router.get(
  "/earnings/summary",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.earningsSummary,
);
// GET /api/provider/earnings/overview
router.get(
  "/earnings/overview",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.earningsOverview,
);

// GET /api/provider/earnings/transactions
router.get(
  "/earnings/transactions",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.recentTransactions,
);
router.get(
  "/earnings/payment-methods",
   authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.paymentMethodStats
);
router.put(
  "/upload-documents",
  authMiddleware.tokenVerify,
  providerMiddleware,
  documentUpload.fields([
    { name: "aadharCard", maxCount: 1 },
    { name: "certificate", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  providerControllers.uploadProviderDocuments,
);

router.get(
  "/:id",
  validateObjectIdMiddleware("id"),
  providerControllers.getOneProviderDetails,
);

module.exports = router;
