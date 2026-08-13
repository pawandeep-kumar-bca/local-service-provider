const express = require("express");
const reviewController = require("../controllers/review.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
const { imageUpload } = require("../middlewares/upload.middleware");
const router = express.Router();

router.post(
  "/user/create-review",
  authMiddleware.tokenVerify,
  imageUpload.fields([{ name: "ReviewImage", maxCount: 5 }]),
  reviewController.reviewCreate,
);
router.get(
  "/user/review-history",
  authMiddleware.tokenVerify,
  reviewController.getAllReviewOfUser,
);
router.patch('/user/:reviewId/edit-review',authMiddleware.tokenVerify,validateObjectId("reviewId"),
  imageUpload.fields([{name:'ReviewImage',maxCount:5}]),
  reviewController.editReview
)
router.get(
  "/provider/:providerId",
  authMiddleware.tokenVerify,
  validateObjectId("providerId"),
  reviewController.providerReview,
);
router.get(
  "/provider/:providerId/reviews",
  validateObjectId("providerId"),
  reviewController.getProviderReviews,
);

router.delete(
  "/user/:reviewId/delete-review",
  authMiddleware.tokenVerify,
  validateObjectId("reviewId"),
  reviewController.deleteReview,
);

module.exports = router;
