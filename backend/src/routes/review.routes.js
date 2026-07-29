const express = require('express')
const reviewController = require('../controllers/review.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const validateObjectId = require('../middlewares/validateObjectId.middleware')
const { imageUpload } = require('../middlewares/upload.middleware')
const router = express.Router()


router.post('/user/create-review',
  authMiddleware.tokenVerify,
  imageUpload.fields([{name:'ReviewImage',maxCount:5}]),
  reviewController.reviewCreate
)
 router.get('/user/review-history',authMiddleware.tokenVerify,reviewController.getAllReviewOfUser)
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