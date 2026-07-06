const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    providerName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

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

    city: {
      type: String,
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

    profileImage: {
      url: String,
      fileId: String,
    },

    verificationStatus: {
      type: String,
      enum: ["verified", "not verified"],
      default: "not verified",
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
      },
      coordinates: {
        type: [Number],
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
  { timestamps: true }
);

providerSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Provider", providerSchema);