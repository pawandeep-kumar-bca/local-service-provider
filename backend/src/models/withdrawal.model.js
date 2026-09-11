const withdrawalSchema = new mongoose.Schema(
  {
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
      index: true,
    },

    bankAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BankAccount",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "competed",
        "failed",
      ],
      default: "pending",
    },

    requestedAt: {
      type: Date,
      default: Date.now,
    },

    processedAt: Date,

    failureReason: String,
  },
  {
    timestamps: true,
  }
);