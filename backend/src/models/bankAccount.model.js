import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema(
  {
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
      index: true,
    },

    accountHolderName: {
      type: String,
      required: true,
      trim: true,
    },

    accountNumber: {
      type: String,
      required: true,
    },

    ifscCode: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    bankName: {
      type: String,
      trim: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isPrimary: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BankAccount", bankAccountSchema);