const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },

    icon: {
      url: {
        type: String,
        required: true,
      },
      fileId: {
        type: String,
        required: true,
      },
    },
    backgroundColor: {
      type: String,
      default: "#EEF2FF",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
   
    discount: {
      isActive: {
        type: Boolean,
        default: false,
      },
      discountType: {
        type: String,
        enum: ["percentage", "flat"],
        default: "percentage",
      },
      value: {
        type: Number,
        default: 0,
      },

      validTill: {
        type: Date,
      },
    },
    average_rating: {
      type: Number,
      default: 0,
    },
    total_reviews: {
      type: Number,
      default: 0,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const categoryModel = new mongoose.model("Category", categorySchema);

module.exports = categoryModel;
