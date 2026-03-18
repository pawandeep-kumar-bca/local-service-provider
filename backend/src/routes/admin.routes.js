const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const roleBased = require('../middlewares/role.middleware')
const validateObjectId = require('../middlewares/validateObjectId.middleware')
const adminController = require('../controllers/admin.controller')
const router = express.Router()



// GET  /api/v1/admin/providers/pending

router.get('/providers/pending',authMiddleware.tokenVerify,roleBased('admin'),adminController.pendingProviders)
 


// GET /api/v1/admin/users 
router.get('/users',authMiddleware.tokenVerify,roleBased('admin'),adminController.userLists)
// GET /api/v1/admin/bookings
router.get('/bookings',authMiddleware.tokenVerify,roleBased('admin'),adminController.bookingLists)
// PUT  /api/v1/admin/providers/:id/approve 
router.put('/providers/:id/approve',authMiddleware.tokenVerify,roleBased('admin'),validateObjectId('id'),adminController.pendingProvidersApproved)

// PUT  /api/v1/admin/providers/:id/reject
router.put('/providers/:id/reject',authMiddleware.tokenVerify,roleBased('admin'),validateObjectId('id'),adminController.pendingProvidersReject)


module.exports = router