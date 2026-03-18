const express = require('express')
const reviewController = require('../controllers/review.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const validateObjectId = require('../middlewares/validateObjectId.middleware')
const router = express.Router()


router.post('/:bookingId',
  authMiddleware.tokenVerify,
  validateObjectId('bookingId'),
  reviewController.reviewCreate
)
 
router.get('/provider/:providerId',
  authMiddleware.tokenVerify,
  validateObjectId('providerId'),
  reviewController.providerReview
)

router.delete('/:id',
  authMiddleware.tokenVerify,
  validateObjectId('id'),
  reviewController.deleteReview
)


module.exports = router