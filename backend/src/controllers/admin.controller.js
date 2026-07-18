const providerModel = require("../models/provider.model");
const userModel = require("../models/User.model");
const bookingModel = require("../models/booking.model");
const bookingsModel = require("../models/booking.model");
const categoryModel = require("../models/category.model");
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
  updateProviderStatus(req, res, "approved", "verified");

const pendingProvidersReject = (req, res) =>
  updateProviderStatus(req, res, "rejected", "not verified");
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
    const searchFields = ["fullname", "email", "phoneNumber"];
    if (search) {
      filters.$or = searchFields.map((field) => ({
        [field]: {
          $regex: search,
          $options: "i",
        },
      }));
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
      totalBookings: bookingCounts.length,
      currentPage: page,
    });
  } catch (err) {
    console.error("user list error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
async function getProvidersByAdmin(req, res) {
  try {
    const { search, date, verificationStatus,status,category } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filters = {};

     if(status){
      filters.status = status
     }
    const providers = await providerModel
      .find(filters).select('categories status createdAt  completedJobs')
      .populate("userId", "fullname email phoneNumber profileImage isVerified")
      .populate("categories", "name")
      .limit(limit)
      .skip(skip);

    if (providers.length === 0) {
      return res.status(200).json({
        success: true,
        message: "Provider not available",
        providers: [],
      });
    }
    return res.status(200).json({
      success: true,
      message: "providers fetch successfully",
      providers,
    });
  } catch (err) {
    console.error("Get Providers by admin Error:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
async function getProviders(req, res) {
  try {
    const {
      category,
      search,
      city,
      availability,
      minRating,
      minExperience,
      sort = "latest",
    } = req.query;
    const limit = parseInt(req.query.limit) || 9;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const filter = {};
    // Category Filter (Multiple Categories)
    if (category && category !== "all") {
      filter.categories = {
        $in: [category],
      };
    }

    // search by provider name
    // if (search) {
    //   filter.providerName = {
    //     $regex: search,
    //     $options: "i",
    //   };
    // }
    // search by city
    // if (city) {
    //   filter.city = {
    //     $regex: search,
    //     $options: "i",
    //   };
    // }
    // Availability Filter
    if (availability) {
      filter.availability = availability;
    }
    // search by experience
    if (minExperience) {
      filter.experience = {
        $gte: Number(minExperience),
      };
    }

    // search by rating
    if (minRating) {
      filter.rating = {
        $gte: Number(minRating),
      };
    }
    // sorting
    let sortOption = {};

    switch (sort) {
      case "rating":
        sortOption = {
          rating: -1,
        };
        break;
      case "price-low":
        sortOption = { price: 1 };
        break;

      case "price-high":
        sortOption = { price: -1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }
    const providers = await providerModel
      .find(filter)
      .populate("userId", "fullname profileImage")
      .populate("categories", "name")
      .populate("location.state", "name")
      .populate("location.district", "name")
      .populate("location.city", "name")
      .select(
        "userId categories price experience verifiedByAdmin rating totalReview completedJobs availability responseTime trusted topRated location",
      )
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    const totalProviders = await providerModel.countDocuments(filter);
    if (providers.length === 0) {
      return res
        .status(200)
        .json({ message: "Providers not found", providers, totalProviders });
    }

    return res.status(200).json({
      success: true,
      message: "Provider fetch successfully",
      providers,
      totalProviders,
      currentPage: page,
      totalPages: Math.ceil(totalProviders / limit),
    });
  } catch (err) {
    console.error("Get providers error:", err);
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
      .select("userId providerId category bookingSlot bookingDate serviceAddress")
      .populate("userId providerId category","fullname profileImage name");
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
async function getCategoryByAdmin(req, res) {
  try {
    const { 
      search,
      status,
      category,
      sortBy = "newest first",
      page = 1,
      limit = 10,
    } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    // ==========================
    // Filter
    // ==========================

    const filter = {};
    
    if(category && category !== 'all'){
      filter.categories = {
        $in:[category]
      }
    }
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (status) {
      filter.status = status;
    }
    if (req.query.date) {
      const start = new Date(req.query.date);
      start.setHours(0, 0, 0, 0);

      const end = new Date(req.query.date);
      end.setHours(23, 59, 59, 999);

      filter.createdAt = {
        $gte: start,
        $lte: end,
      };
    }
    // ==========================
    // Sorting
    // ==========================

    let sortOption = {};

    switch (sortBy.toLowerCase()) {
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

    // ==========================
    // Stats
    // ==========================

    const [
      totalCategories,
      activeCategories,
      inactiveCategories,
      totalProviders,
    ] = await Promise.all([
      categoryModel.countDocuments(filter),

      categoryModel.countDocuments({
        status: "active",
      }),

      categoryModel.countDocuments({
        status: "inactive",
      }),

      providerModel.countDocuments({
        status: "approved",
      }),
    ]);

    // ==========================
    // Categories
    // ==========================

    const categories = await categoryModel
      .find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit))
      .lean();

    if (!categories.length) {
      return res.status(200).json({
        success: true,
        message: "No categories found",
        categories: [],
      });
    }

    // ==========================
    // Provider Count Aggregation
    // ==========================

    const providerCounts = await providerModel.aggregate([
      {
        $match: {
          status: "approved",
        },
      },
      {
        $unwind: "$categories",
      },
      {
        $group: {
          _id: "$categories",
          providers: {
            $sum: 1,
          },
        },
      },
    ]);

    // Convert array to object

    const providerMap = {};

    providerCounts.forEach((item) => {
      providerMap[item._id.toString()] = item.providers;
    });

    // Merge Provider Count

    const categoriesWithProviders = categories.map((category) => ({
      ...category,
      providers: providerMap[category._id.toString()] || 0,
    }));

    // ==========================
    // Response
    // ==========================

    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully",

      stats: {
        totalCategories,
        activeCategories,
        inactiveCategories,
        totalProviders,
      },

      categories: categoriesWithProviders,

      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: totalCategories,
        totalPages: Math.ceil(totalCategories / limit),
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  pendingProviders,
  getProvidersByAdmin,
  pendingProvidersApproved,
  pendingProvidersReject,
  userLists,
  bookingLists,
  getCategoryByAdmin
};
