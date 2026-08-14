const express = require("express");
const paymentController = require("../controllers/payment.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");

const router = express.Router();

router.post("/create-order", authMiddleware.tokenVerify, paymentController.createOrder);
router.post("/verify", authMiddleware.tokenVerify, paymentController.verifyPayment);
router.post("/payment-failed",authMiddleware.tokenVerify,  paymentController.markPaymentFailed);
router.post("/webhook", express.raw({ type: "*/*" }), paymentController.razorpayWebhook);
router.get(
  "/history",
  authMiddleware.tokenVerify,
  paymentController.paymentHistory,
);
router.get(
  "/user/payment-history",
  authMiddleware.tokenVerify,
  paymentController.userPaymentHistory,
);
router.get('/user/payment-details/:paymentId',authMiddleware.tokenVerify,validateObjectId('paymentId'),paymentController.userPaymentDetails)
module.exports = router;
