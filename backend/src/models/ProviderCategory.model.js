const mongoose = require('mongoose')

const providerCategorySchema = new mongoose.Schema({
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Provider',
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    description: String,

  isAvailable: {
    type: Boolean,
    default: true,
  },

  approvalStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  }
},{timestamps:true})

const providerCategoryModel = mongoose.model('ProviderCategory',providerCategorySchema)

module.exports = providerCategoryModel