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

//====================
// PROVIDER DASHBOARD APIS
//====================

// GET /api/v1/provider/dashboard/overview

// GET /api/v1/provider/dashboard/today-bookings

// GET /api/v1/provider/dashboard/booking-analytics?period=week


// PUT /api/v1/providers/availability


router.put(
  "/availability",
  authMiddleware.tokenVerify,
  providerMiddleware,
  providerControllers.availabilityProvider,
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
