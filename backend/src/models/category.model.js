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
      type: String,
      required:true
    },
    backgroundColor: {
      type: String,
      default: "#EEF2FF",
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true },
);

const categoryModel = new mongoose.model("Category", categorySchema);

module.exports = categoryModel;
