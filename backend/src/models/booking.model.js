const mongoose = require("mongoose");

const bookingsSchema = new mongoose.Schema(
  {
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    bookingSlot: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      enum: ["Scheduled", "Instant"],
      default: "Scheduled",
    },
    notes: {
      type: String,
      trim: true,
    },
    bookingStatus: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "In Progress",
        "Completed",
        "Cancelled",
        "Rejected",
      ],
      default: "Pending",
    },
    serviceLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },

      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
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
      },

      landmark: {
        type: String,
      },

      fullAddress: {
        type: String,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed", "refunded"],
      default: "pending",
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
  { timestamps: true },
);
bookingsSchema.index(
  {
    providerId: 1,
    bookingDate: 1,
    bookingSlot: 1,
  },
  {
    unique: true,
  },
);

bookingsSchema.index({
  serviceLocation: "2dsphere",
});

const bookingsModel = new mongoose.model("Booking", bookingsSchema);

module.exports = bookingsModel;
