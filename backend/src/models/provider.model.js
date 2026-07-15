const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    price: {
      type: Number,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },
    documents: {
      aadharCard: {
        url: String,
        fileId: String,
      },
      certificate: {
        url: String,
        fileId: String,
      },
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalReview: {
      type: Number,
      default: 0,
    },

    completedJobs: {
      type: Number,
      default: 0,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    responseTime: {
      type: String,
      default: "30 mins",
    },

    topRated: {
      type: Boolean,
      default: false,
    },

    trusted: {
      type: Boolean,
      default: false,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number],
        required: true, // [longitude, latitude]
      },

      state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        required: true,
      },

      district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "District",
        required: true,
      },

      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true,
      },

      village: {
        type: String,
        required: true,
        trim: true,
      },
    },

    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
  },
  { timestamps: true },
);

providerSchema.index({
  location: "2dsphere",
});

module.exports = mongoose.model("Provider", providerSchema);
