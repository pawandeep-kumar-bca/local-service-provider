const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    city:{
        type:String,
        required:true
    },
    district:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'District',
        required:true
    }
})

const cityModel = mongoose.model('City',citySchema)

module.exports = cityModel