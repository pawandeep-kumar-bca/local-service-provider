const providerModel = require("../models/provider.model");
const userModel = require("../models/User.model");
const bookingModel = require("../models/booking.model");
async function pendingProviders(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;
    const providers = await providerModel
      .find({ status: "Pending" })
      .populate("userId", "fullname email")
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });
    const totalPendingProviders = await providerModel.countDocuments({
      status: "Pending",
    });
    if (providers.length === 0) {
      return res.status(200).json({
        message: "pending providers not available",
        providers: [],
      });
    }
    return res.status(200).json({
      message: "pending providers fetch successfully",
      totalPendingProviders: totalPendingProviders,
      currentPage: page,
      providers,
    });
  } catch (err) {
    console.error("Pending providers error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateProviderStatus(req, res, status, verificationStatus) {
  const provider = await providerModel.findById(req.params.id);

  if (!provider) {
    return res.status(404).json({ message: "provider not found" });
  }

  if (provider.status !== "Pending") {
    return res.status(400).json({ message: "provider is not pending" });
  }

  provider.status = status;
  provider.verificationStatus = verificationStatus;
  await provider.save();

  return res.status(200).json({
    message: `provider ${status.toLowerCase()} successfully`,
    provider,
  });
}

const pendingProvidersApproved = (req, res) =>
  updateProviderStatus(req, res, "Approved", "verified");

const pendingProvidersReject = (req, res) =>
  updateProviderStatus(req, res, "Rejected", "not verified");

async function userLists(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await userModel
      .find({ role: "user" })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select("fullname email role isVerified createdAt");
    const totalUsers = await userModel.countDocuments({ role: "user" });
    if (users.length === 0) {
      return res.status(200).json({
        message: "users not found",
        users: [],
        totalUsers: totalUsers,
      });
    }

    return res.status(200).json({
      message: "all users fetch successfully",
      users,
      totalUsers: totalUsers,
      currentPage: page,
    });
  } catch (err) {
    console.error("user list error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function bookingLists(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const bookings = await bookingModel
      .find({
        bookingStatus: "completed",
      })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .select("userId providerId bookingSlot bookingDate serviceAddress")
      .populate("userId providerId");
    const totalBooking = await bookingModel.countDocuments({
      bookingStatus: "completed",
    });
    if (bookings.length === 0) {
      return res
        .status(200)
        .json({ message: "booking not found", bookings: [], totalBooking: 0 });
    }

    return res.status(200).json({
      message: "all booking fetch successfully",
      bookings,
      totalBooking: totalBooking,
      currentPage: page,
    });
  } catch (err) {
    console.error("booking list error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  pendingProviders,
  pendingProvidersApproved,
  pendingProvidersReject,
  userLists,
  bookingLists,
};
