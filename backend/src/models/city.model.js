const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    districtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'District',
        required:true
    }
})

const cityModel = mongoose.model('City',citySchema)

module.exports = cityModel