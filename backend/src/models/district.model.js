const mongoose = require('mongoose')

const districtSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"State",
        required:true
    }
})


const districtModel = mongoose.model('district',districtSchema)

module.exports = districtModel