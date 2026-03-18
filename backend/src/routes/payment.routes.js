const express = require('express')
const paymentController = require('../controllers/payment.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.post('/create-order', authMiddleware.tokenVerify, paymentController.createOrder)
router.post('/verify', authMiddleware.tokenVerify, paymentController.verifyPayment)
router.post('/webhook', paymentController.razorpayWebhook)
router.get('/history', authMiddleware.tokenVerify, paymentController.paymentHistory)

module.exports = router