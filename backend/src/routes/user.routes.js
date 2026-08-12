const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const { changePasswordValidation } = require("../validators/auth.validator");
const { imageUpload } = require("../middlewares/upload.middleware");
const router = express.Router();

router.get(
  "/profile",
  authMiddleware.tokenVerify,
  userController.getUserProfile,
);
router.post("/reverse-geocode", userController.reverseGeocode);

router.patch(
  "/update-profile",
  authMiddleware.tokenVerify,
  imageUpload.fields([{ name: "profileImage", maxCount: 1 }]),
  userController.updateUserProfile,
);
router.patch(
  "/change-password",
  authMiddleware.tokenVerify,
  changePasswordValidation,
  userController.changePassword
);

module.exports = router;
