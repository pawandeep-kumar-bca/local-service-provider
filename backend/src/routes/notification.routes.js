const express = require('express')
const notificationController = require('../controllers/notification.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const validateObjectId = require('../middlewares/validateObjectId.middleware')
const router = express.Router()

// POST /api/v1/notifications
 
router.post('/',authMiddleware.tokenVerify,notificationController.createNotification)

// GET /api/v1/notifications
router.get('/',authMiddleware.tokenVerify,notificationController.getAllNotification)
// IMPORTANT: specific routes first
router.get('/unread-count', authMiddleware.tokenVerify, notificationController.unreadNotification)

// then dynamic routes
router.patch('/:id', authMiddleware.tokenVerify, validateObjectId('id'), notificationController.readNotification)
router.delete('/:id', authMiddleware.tokenVerify, validateObjectId('id'), notificationController.deleteNotification)
module.exports = router