const express = require("express");
const dashboardController = require("../controllers/dashboard.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const roleBased = require("../middlewares/role.middleware");
const providerMiddleware = require("../middlewares/provider.middleware");

const router = express.Router();

// USER
router.get(
  "/user",
  authMiddleware.tokenVerify,
  roleBased("user"),
  dashboardController.userDetails
);

// PROVIDER
router.get(
  "/provider",
  authMiddleware.tokenVerify,
providerMiddleware,
  dashboardController.providerDetails
);

// ADMIN
router.get(
  "/admin",
  authMiddleware.tokenVerify,
  roleBased("admin"),
  dashboardController.adminDetails
);

module.exports = router;