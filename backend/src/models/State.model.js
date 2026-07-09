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


const stateModal = mongoose.model('State',stateSchema)

module.exports = stateModal