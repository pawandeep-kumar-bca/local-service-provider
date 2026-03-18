const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    enum: ['INR', 'USD'],
    default: 'INR'
  },
  receipt: String,

  razorpayOrderId: {
    type: String,
    index: true
  },
  razorpayPaymentId: String,
  razorpaySignature: String,

  paymentStatus: {
    type: String,
    enum: ['pending', 'success', 'failed', 'refunded', 'cancelled'],
    default: 'pending'
  },

  paymentMethod: {
    type: String,
    enum: ['upi', 'card', 'netBanking', 'wallet', 'emi']
  }

}, { timestamps: true })

// Indexes
paymentSchema.index({ userId: 1 })
// paymentSchema.index({ bookingId: 1 })

module.exports = mongoose.model('Payment', paymentSchema)