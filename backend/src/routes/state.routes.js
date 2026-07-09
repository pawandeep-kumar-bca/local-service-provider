const express = require('express')
const { getAllStates, getAllDistrictByStates, getAllCityByDistrict } = require('../controllers/state.controller')
const validateObjectId = require('../middlewares/validateObjectId.middleware')



const router = express.Router()


router.get('/states',getAllStates)
router.get('/states/:stateId/districts',validateObjectId("stateId"),getAllDistrictByStates)
router.get('/districts/:districtId/cities',validateObjectId('districtId'),getAllCityByDistrict)

module.exports = router


