const mongoose = require('mongoose'
)

const stateSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
 code: String,
})


const stateModal = new mongoose.model('state',stateSchema)

module.exports = stateModal