const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema(
  {
    providerId: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    verifiedByAdmin: {
      type: Boolean,
      default: false,
    },

   
    documents: {
      aadharCard: {
        url: String,
        fileId: String,
      },

      addressProof: {
        url: String,
        fileId: String,
      },
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
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

    workingHours: {
      startTime: String,
      endTime: String,
    },

    responseTime: {
      type: Number,
      default: 30,
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
        required: true,
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

      locality: {
        type: String,
        required: true,
        trim: true,
      },
    },

  
    categories: [
      {
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          required: true,
        },

        experience: {
          type: Number,
          required: true,
          min: 0,
        },

        pricing: {
          priceType: {
            type: String,
            enum: ["fixed", "hourly"],
            default: "hourly",
          },

          price: {
            type: Number,
            required: true,
            min: 0,
          },
        },

        description: {
          type: String,
          trim: true,
        },

        duration: {
          type: String,
          trim: true,
        },

        
        certificate: {
          url: String,
          fileId: String,
        },

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
    ],
  },
  { timestamps: true },
);

providerSchema.index({
  location: "2dsphere",
});

module.exports = mongoose.model("Provider", providerSchema);