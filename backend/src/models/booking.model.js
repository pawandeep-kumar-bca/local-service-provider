const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },

    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
      index: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    bookingDate: {
      type: Date,
      required: true,
    },
    durationHours: {
      type: Number,
    },
    bookingSlot: {
      startTime: {
        type: String,
        required: true,
      },
      endTime: {
        type: String,
        required: true,
      },
    },

    serviceType: {
      type: String,
      enum: ["scheduled", "instant"],
      default: "scheduled",
    },

    bookingStatus: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "in_progress",
        "completed",
        "cancelled",
        "rejected",
      ],
      default: "pending",
      index: true,
    },

    statusHistory: [
      {
        status: {
          type: String,
          enum: [
            "pending",
            "accepted",
            "in_progress",
            "completed",
            "cancelled",
            "rejected",
          ],
        },

        changedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    expiresAt: {
      type: Date,
      default: null,
    },

    serviceLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: function (v) {
            return (
              Array.isArray(v) &&
              v.length === 2 &&
              v[0] >= -180 &&
              v[0] <= 180 &&
              v[1] >= -90 &&
              v[1] <= 90
            );
          },
          message: "Invalid longitude or latitude.",
        },
      },
    },

    serviceAddress: {
      state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "States",
        required: true,
      },

      district: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Districts",
        required: true,
      },

      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cities",
        required: true,
      },

      village: {
        type: String,
        required: true,
        trim: true,
      },

      landmark: {
        type: String,
        trim: true,
      },
      fullAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },
    notes: {
      type: String,
      trim: true,
    },
    pricing: {
      serviceCharge: {
        type: Number,
        required: true,
      },

      platformFee: {
        type: Number,
        default: 0,
      },

      discount: {
        type: Number,
        default: 0,
      },

      totalAmount: {
        type: Number,
        required: true,
      },
    },

    paymentMethod: {
      type: String,
      enum: ["cod", "upi"],
      default: "cod",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed", "refunded"],
      default: "pending",
    },

    payment: {
      paymentId: String,
      orderId: String,
      transactionId: String,
    },
    serviceSnapshot: {
      categoryName: String,
      price: Number,
      serviceImage:String,
      serviceBackground:String
    },
    serviceAddressSnapshot: {
      state: String,
      district: String,
      city: String,
      village: String,
      landmark: String,
      fullAddress: String,
    },
    providerSnapshot: {
      providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider",
      },

      name: String,

      phone: String,
      rating: Number,
      totalReview: Number,
      category: String,
      profileImage: {
        url: {
          type: String,
          default: "",
        },
        fileId: {
          type: String,
          default: "",
        },
      },
    },

    userSnapshot: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      name: String,

      phone: String,
      email: String,
      profileImage: {
        url: {
          type: String,
          default: "",
        },
        fileId: {
          type: String,
          default: "",
        },
      },
    },

    isRescheduled: {
      type: Boolean,
      default: false,
    },

    rescheduledFrom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      default: null,
    },

    rejectReason: {
      type: String,
      trim: true,
    },

    cancelReason: {
      type: String,
      trim: true,
    },

    providerNotes: {
      type: String,
      trim: true,
    },

    isReviewed: {
      type: Boolean,
      default: false,
    },

    acceptedAt: {
      type: Date,
      default: null,
    },

    startedAt: {
      type: Date,
      default: null,
    },

    completedAt: {
      type: Date,
      default: null,
    },

    cancelledAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent same provider getting two bookings for same slot
bookingsSchema.index(
  {
    providerId: 1,
    bookingDate: 1,
    "bookingSlot.startTime": 1,
    "bookingSlot.endTime": 1,
  },
  {
    unique: true,
  },
);
bookingsSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
// Geo Index
bookingsSchema.index({
  serviceLocation: "2dsphere",
});

// Frequently Used Indexes
bookingsSchema.index({
  providerId: 1,
  bookingStatus: 1,
});

const bookingsModel = mongoose.model("Booking", bookingsSchema);

module.exports = bookingsModel;
