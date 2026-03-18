const mongoose = require("mongoose");
const bookingModel = require("../models/booking.model");
const providerModel = require("../models/provider.model");
const userModel = require("../models/User.model");

// ✅ Constants (avoid hardcoding)
const BOOKING_STATUS = {
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  PENDING: "Pending",
};

// ✅ Common function (DRY)
async function getBookingStats(matchFilter) {
  const stats = await bookingModel.aggregate([
    { $match: matchFilter },
    {
      $group: {
        _id: "$bookingStatus",
        count: { $sum: 1 },
      },
    },
  ]);

  // convert array → object
  const result = {
    total: 0,
    completed: 0,
    cancelled: 0,
    pending: 0,
  };

  stats.forEach((item) => {
    result.total += item.count;

    if (item._id === BOOKING_STATUS.COMPLETED) result.completed = item.count;

    if (item._id === BOOKING_STATUS.CANCELLED) result.cancelled = item.count;

    if (item._id === BOOKING_STATUS.PENDING) result.pending = item.count;
  });

  return result;
}

// ================= USER DASHBOARD =================

async function userDetails(req, res) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = new mongoose.Types.ObjectId(req.user.id);

    // ✅ Aggregated stats
    const stats = await getBookingStats({ userId });

    // ✅ Today date
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // ✅ Upcoming bookings
    const upcomingBooking = await bookingModel.countDocuments({
      userId,
      bookingStatus: { $ne: BOOKING_STATUS.CANCELLED },
      bookingDate: { $gt: today },
    });

    // ✅ Pagination
    const limit = parseInt(req.query.limit) || 5;

    // ✅ Recent bookings (lean for performance)
    const recentBooking = await bookingModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("providerId", "providerName city")
      .populate("serviceId", "name")
      .lean();

    return res.status(200).json({
      success: true,
      message: "User dashboard fetched successfully",
      data: {
        totalBooking: stats.total,
        completedBooking: stats.completed,
        cancelledBooking: stats.cancelled,
        pendingBooking: stats.pending,
        upcomingBooking,
        recentBooking,
      },
    });
  } catch (err) {
    console.error("userDetails error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ================= PROVIDER DASHBOARD =================

async function providerDetails(req, res) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userId = req.user.id;

    const provider = await providerModel.findOne({ userId }).lean();

    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    const providerId = new mongoose.Types.ObjectId(provider._id);

    // ✅ Aggregated stats
    const stats = await getBookingStats({ providerId });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingBooking = await bookingModel.countDocuments({
      providerId,
      bookingStatus: { $ne: BOOKING_STATUS.CANCELLED },
      bookingDate: { $gt: today },
    });

    const limit = parseInt(req.query.limit) || 5;

    const recentBooking = await bookingModel
      .find({ providerId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate("userId", "fullname email")
      .populate("serviceId", "name")
      .lean();

    return res.status(200).json({
      success: true,
      message: "Provider dashboard fetched successfully",
      data: {
        totalBooking: stats.total,
        completedBooking: stats.completed,
        cancelledBooking: stats.cancelled,
        pendingBooking: stats.pending,
        upcomingBooking,
        recentBooking,
      },
    });
  } catch (err) {
    console.error("providerDetails error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// ================= ADMIN DASHBOARD =================

async function adminDetails(req, res) {
  try {
    // ✅ Parallel queries (FAST 🚀)
    const [
      totalUsers,
      totalProviders,
      totalBookings,
      totalCompletedBookings,
      totalCancelledBookings,
      pendingProvider,
      revenueData,
    ] = await Promise.all([
      userModel.countDocuments({ role: "user" }),
      providerModel.countDocuments({ verificationStatus: "verified" }),
      bookingModel.countDocuments(),
      bookingModel.countDocuments({
        bookingStatus: BOOKING_STATUS.COMPLETED,
      }),
      bookingModel.countDocuments({
        bookingStatus: BOOKING_STATUS.CANCELLED,
      }),
      providerModel.find({ verificationStatus: "Pending" }).lean(), // ✅ FIXED BUG
      bookingModel.aggregate([
        { $match: { bookingStatus: BOOKING_STATUS.COMPLETED } },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: "$price" },
          },
        },
      ]),
    ]);

    const totalRevenue = revenueData.length ? revenueData[0].totalRevenue : 0;

    return res.status(200).json({
      success: true,
      message: "Admin dashboard fetched successfully",
      data: {
        totalUsers,
        totalProviders,
        totalBookings,
        totalCompletedBookings,
        totalCancelledBookings,
        pendingProvider,
        totalRevenue,
      },
    });
  } catch (err) {
    console.error("adminDetails error:", err.message);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  userDetails,
  providerDetails,
  adminDetails,
};
