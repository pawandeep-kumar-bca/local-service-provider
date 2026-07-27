const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
      unique: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      maxlength: 200,
      minlength: 10,
    },
    images: [
      {
        url: {
          type: String,
          default: "",
        },
        fileId: {
          type: String,
          default: "",
        },
      },
    ],
  },
  { timestamps: true },
);

const reviewModel = new mongoose.model("Review", reviewSchema);

module.exports = reviewModel;
