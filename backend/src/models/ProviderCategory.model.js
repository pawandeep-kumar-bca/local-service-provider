const mongoose = require("mongoose");

const providerCategorySchema = new mongoose.Schema(
  {
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    experience: {
      type: Number,
      required: true,
      min: 0,
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
    },
  },
  { timestamps: true },
);
providerCategorySchema.index(
  {
    provider: 1,
    category: 1,
  },
  {
    unique: true,
  },
);

const providerCategoryModel = mongoose.model(
  "ProviderCategory",
  providerCategorySchema,
);

module.exports = providerCategoryModel;
