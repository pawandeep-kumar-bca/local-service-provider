const providerModel = require("../models/provider.model");
const userModel = require("../models/User.model");
const bookingModel = require("../models/booking.model");
const bookingsModel = require("../models/booking.model");
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
  if (status === "Approved") {
    await userModel.findByIdAndUpdate(provider.userId, {
      role: "provider",
    });
  }
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
    const {
      search,
      sort = "newest first",
      verificationStatus,
      accountStatus,
    } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filters = {};

    if (search) {
      filters.fullname = {
        $regex: search,
        $options: "i",
      };
    }

    if (verificationStatus === "verified") {
      filters.isVerified = true;
    }

    if (verificationStatus === "not verified") {
      filters.isVerified = false;
    }
    if (accountStatus === "active") {
      filters.isBlocked = false;
    }

    if (accountStatus === "blocked") {
      filters.isBlocked = true;
    }
    if (req.query.date) {
      const start = new Date(req.query.date);
      start.setHours(0, 0, 0, 0);

      const end = new Date(req.query.date);
      end.setHours(23, 59, 59, 999);

      filters.createdAt = {
        $gte: start,
        $lte: end,
      };
    }

    let sortOption = {};

    switch (sort.toLowerCase()) {
      case "newest first":
        sortOption = { createdAt: -1 };
        break;

      case "oldest first":
        sortOption = { createdAt: 1 };
        break;

      case "ascending order":
        sortOption = { name: 1 };
        break;

      case "descending order":
        sortOption = { name: -1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }
    const startOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1,
    );
    const [
      totalUsers,
      totalActiveUsers,
      totalBlockedUsers,
      totalNewUser,
      totalVerifiedUsers,
    ] = await Promise.all([
      userModel.countDocuments(),
      userModel.countDocuments({ isBlocked: false }),
      userModel.countDocuments({ isBlocked: true }),
      userModel.countDocuments({ createdAt: { $gte: startOfMonth } }),
      userModel.countDocuments({ isVerified: true }),
    ]);
    const users = await userModel
      .find(filters)
      .sort(sortOption)
      .limit(limit)
      .skip(skip);

    if (users.length === 0) {
      return res.status(200).json({
        message: "users not found",
        users: [],
      });
    }

    // ==========================
    // Booking Count Aggregation
    // ==========================
  const bookingCounts = await bookingModel.aggregate([
  {
    $group: {
      _id: "$userId",
      totalBookings: {
        $sum: 1,
      },
    },
  },
]);

const bookingMap = {};

bookingCounts.forEach((item) => {
  bookingMap[item._id.toString()] = item.totalBookings;
});
const usersWithBookings = users.map((user) => ({
  ...user.toObject(),
  totalBookings: bookingMap[user._id.toString()] || 0,
}));
    return res.status(200).json({
      message: "all users fetch successfully",
      users: usersWithBookings,
      stats: {
        totalUsers,
        totalActiveUsers,
        totalBlockedUsers,
        totalNewUser,
        totalVerifiedUsers,
      },
      totalBookings:bookingCounts.length,
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
