const providerModel = require("../models/provider.model");
const { uploadFile, deleteFile } = require("../config/imagekit");
const imagekit = require("@imagekit/nodejs");
const categoryModel = require("../models/category.model");

const UserModel = require("../models/User.model");
const { generateId } = require("../utils/generateId");
const reviewModel = require("../models/review.model");
const { mongoose } = require("mongoose");

const { selectFields } = require("express-validator/lib/field-selection.js");
const {
  getPagination,
  buildPaginationResponse,
} = require("../utils/providerPagination.js");
const { buildProviderFilter } = require("../utils/providerFilter.js");
const {
  getCategoryBySlug,
  buildCategoryFilter,
  getCategoryId,
} = require("../utils/providerCategory.js");
const { buildProviderSort } = require("../utils/providerSort.js");
const {
  addSelectedCategoryStage,
  addCategoryPriceStage,
  addSortStage,
  addProviderProjectStage,
  addPaginationFacetStage,
  addProviderLookups,
} = require("../utils/providerPipeline.js");
const { getFacetResult } = require("../utils/providerResponse.js");
const bookingsModel = require("../models/booking.model.js");
const withdrawalModel = require("../models/withdrawal.model.js");
const { promises } = require("nodemailer/lib/xoauth2/index.js");
async function providerProfileCreate(req, res) {
  try {
    const {
      phoneNumber,
      price,
      experience,
      state,
      categoryId,
      priceType,
      district,
      city,
      locality,
      lat,
      lng,
    } = req.body;
    console.log(categoryId);

    const userId = req.user.id;

    // Validate Location
    if (lat === undefined || lng === undefined) {
      return res.status(400).json({
        message: "Latitude and Longitude are required",
      });
    }

    if (isNaN(lat) || isNaN(lng)) {
      return res.status(400).json({
        message: "Latitude and Longitude must be valid numbers",
      });
    }

    // Check Provider Already Exists
    const existingProvider = await providerModel.findOne({ userId });

    if (existingProvider) {
      return res.status(400).json({
        message: "Provider profile already exists",
      });
    }

    // Validate Required Documents
    if (!req.files?.aadharCard || !req.files?.certificate) {
      return res.status(400).json({
        message: "Aadhar Card and Certificate are required",
      });
    }

    // Find User
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Upload Aadhar
    const aadharCardData = await uploadFile(
      req.files.aadharCard[0],
      `${userId}-${Date.now()}-aadharCard`,
      "Providers/Documents/AadharCards",
    );

    // Upload Certificate
    const certificateData = await uploadFile(
      req.files.certificate[0],
      `${userId}-${Date.now()}-certificate`,
      "Providers/Documents/Certificates",
    );
    const providerId = await generateId("LSP-PRO-", "provider");
    const provider = await providerModel.create({
      userId,
      providerId,
      pricing: { price },

      experience,

      categories: [
        {
          category: new mongoose.Types.ObjectId(categoryId),
          pricing: {
            priceType: priceType,
            price: price,
          },
        },
      ],

      location: {
        type: "Point",
        coordinates: [Number(lng), Number(lat)],
        state,
        district,
        city,
        locality,
      },

      documents: {
        aadharCard: {
          url: aadharCardData.url,
          fileId: aadharCardData.fieldId,
        },
        certificate: {
          url: certificateData.url,
          fileId: certificateData.fieldId,
        },
      },
    });

    if (phoneNumber && phoneNumber !== user.phoneNumber) {
      user.phoneNumber = phoneNumber;
    }

    if (req.files.profileImage) {
      if (user.profileImage?.fieldId) {
        await deleteFile(user.profileImage.fieldId);
      }

      const profileImageData = await uploadFile(
        req.files.profileImage[0],
        `${userId}-${Date.now()}-profileImage`,
        "Users/ProfileImages",
      );

      user.profileImage = {
        url: profileImageData.url,
        fieldId: profileImageData.fieldId,
      };
    }

    user.isProvider = true;
    await user.save();

    return res.status(201).json({
      message: "Provider profile created successfully",
      provider,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function getProvider(req, res) {
  try {
    const userId = req.user.id;
    const providerExists = await providerModel.findOne({ userId });
    if (!providerExists) {
      return res.status(404).json({ message: "Provider profile not found" });
    }
    return res.status(200).json({
      message: "provider profile fetch successfully",
      provider: providerExists,
    });
  } catch (err) {
    console.error("get provider error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function updateProvider(req, res) {
  try {
    const { providerName, phoneNumber, price, experience, city, availability } =
      req.body;
    const userId = req.user.id;

    const providerExists = await providerModel.findOne({ userId });

    if (!providerExists) {
      return res.status(404).json({ message: "Provider profile not found" });
    }

    let newImageData = null;

    // check if new image uploaded
    if (req.files && req.files.profileImage) {
      // delete old image if exists
      if (providerExists.profileImage && providerExists.profileImage.fileId) {
        await imagekit.deleteFile(providerExists.profileImage.fileId);
      }

      // upload new image
      newImageData = await uploadImage(
        req.files.profileImage[0],
        `${userId}-${Date.now()}-profileImage`,
        "providers/profile",
      );
    }

    // partial updates
    if (providerName) providerExists.providerName = providerName;
    if (phoneNumber) providerExists.phoneNumber = phoneNumber;
    if (price !== undefined) providerExists.price = price;
    if (experience !== undefined) providerExists.experience = experience;
    if (city) providerExists.city = city;

    if (newImageData) {
      providerExists.profileImage = {
        url: newImageData.url,
        fileId: newImageData.fileId,
      };
    }

    if (availability !== undefined) {
      providerExists.availability = availability;
    }

    await providerExists.save();

    return res.status(200).json({
      message: "Provider profile updated successfully",
      provider: providerExists,
    });
  } catch (err) {
    console.error("update provider profile error:", err);
    return res.status(500).json({ message: "Internal server error" });
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

    const filter = { verifiedByAdmin: true, status: "approved" };
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
      .populate("categories.category", "name")
      .populate("location.state", "name")
      .populate("location.district", "name")
      .populate("location.city", "name")
      .select(
        "userId categories experience verifiedByAdmin rating totalReview completedJobs availability responseTime trusted topRated location",
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

async function getOneProviderDetails(req, res) {
  try {
    const providerId = req.params.id;

    const providerExists = await providerModel
      .findById(providerId)
      .select("-documents")
      .populate("categories.category", "icon name description backgroundColor")
      .populate("userId", "fullname profileImage")
      .populate("location.state", "name")
      .populate("location.district", "name")
      .populate("location.city", "name");
    if (!providerExists) {
      return res.status(404).json({ message: "Provider not found" });
    }

    return res.status(200).json({
      success: true,
      message: "provider details fetch successfully",
      providerExists,
    });
  } catch (err) {
    console.error("One Provider details error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function nearbySearchLocation(req, res) {
  try {
    const {
      lat,
      lng,
      radius,
      categoryId,
      rating,
      experience,
      availability,
      trusted,
      minPrice,
      maxPrice,
      sort = [],
    } = req.query;

    // PAGINATION

    const { page, limit, skip } = getPagination(req.query);

    // LOCATION VALIDATION

    if (lat === undefined || lng === undefined || radius === undefined) {
      return res.status(400).json({
        success: false,
        message: "lat, lng and radius are required",
      });
    }

    const latitude = Number(lat);
    const longitude = Number(lng);
    const searchRadius = Number(radius);

    if (
      Number.isNaN(latitude) ||
      Number.isNaN(longitude) ||
      Number.isNaN(searchRadius)
    ) {
      return res.status(400).json({
        success: false,
        message: "lat, lng and radius must be valid numbers",
      });
    }

    if (latitude < -90 || latitude > 90) {
      return res.status(400).json({
        success: false,
        message: "Invalid latitude",
      });
    }

    if (longitude < -180 || longitude > 180) {
      return res.status(400).json({
        success: false,
        message: "Invalid longitude",
      });
    }

    if (searchRadius <= 0) {
      return res.status(400).json({
        success: false,
        message: "Radius must be greater than 0",
      });
    }

    // COMMON PROVIDER FILTER

    const filter = buildProviderFilter({
      rating,
      experience,
      availability,
      trusted,
    });

    // CATEGORY

    const validCategoryId = await getCategoryId(categoryId, categoryModel);

    const categoryFilter = buildCategoryFilter({
      categoryId: validCategoryId,
      minPrice,
      maxPrice,
    });

    Object.assign(filter, categoryFilter);

    // SORT

    const { sortObject, hasPriceSort } = buildProviderSort(sort);

    if (hasPriceSort && !validCategoryId) {
      return res.status(400).json({
        success: false,
        message: "Category is required for price sorting",
      });
    }

    // GEO NEAR

    const distance = searchRadius * 1000;

    const pipeline = [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [longitude, latitude],
          },

          key: "location",

          distanceField: "distance",

          maxDistance: distance,

          spherical: true,

          query: filter,
        },
      },
    ];

    // SELECTED CATEGORY

    addSelectedCategoryStage(pipeline, validCategoryId);

    // CATEGORY PRICE

    addCategoryPriceStage(pipeline, validCategoryId);
    // SORT

    addSortStage(pipeline, sortObject);

    addProviderLookups(pipeline);
    // PROJECT

    addProviderProjectStage(pipeline, {
      includeDistance: true,
    });
    // PAGINATION + COUNT

    addPaginationFacetStage(pipeline, skip, limit);

    // EXECUTE

    const result = await providerModel.aggregate(pipeline);

    const { providers, total } = getFacetResult(result);

    if (total === 0) {
      return res.status(200).json({
        success: true,
        message: "No providers found nearby",
        providers: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
          hasMore: false,
        },
      });
    }

    return res.status(200).json({
      success: true,

      message: "Nearby providers found",

      providers,

      pagination: buildPaginationResponse({
        page,
        limit,
        total,
      }),
    });
  } catch (err) {
    console.error("Nearby provider error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

async function recommendedProviders(req, res) {
  try {
    const {
      rating,
      experience,
      availability,
      trusted,
      categoryId,
      minPrice,
      maxPrice,
      sort = [],
    } = req.query;

    // PAGINATION

    const { page, limit, skip } = getPagination(req.query);

    // COMMON FILTER

    const filter = buildProviderFilter({
      rating,
      experience,
      availability,
      trusted,
    });

    // CATEGORY

    const validCategoryId = await getCategoryId(categoryId, categoryModel);

    const categoryFilter = buildCategoryFilter({
      categoryId: validCategoryId,
      minPrice,
      maxPrice,
    });

    Object.assign(filter, categoryFilter);

    // SORT

    const { sortObject, priceSortOrder } = buildProviderSort(sort);

    // PIPELINE

    const pipeline = [
      {
        $match: filter,
      },
    ];

    /*
      CATEGORY SELECTION

      1. category selected
         → selected category

      2. no category + price low
         → cheapest category

      3. no category + price high
         → highest category

      4. no category + other sort
         → first category
    */

    addSelectedCategoryStage(pipeline, validCategoryId, priceSortOrder);

    // CATEGORY PRICE

    addCategoryPriceStage(pipeline);

    // SORT

    addSortStage(pipeline, sortObject);

    // LOOKUPS

    addProviderLookups(pipeline);

    // PROJECT

    addProviderProjectStage(pipeline);

    // PAGINATION

    addPaginationFacetStage(pipeline, skip, limit);

    // EXECUTE

    const result = await providerModel.aggregate(pipeline);

    const { providers, total } = getFacetResult(result);

    // NO PROVIDERS

    if (total === 0) {
      return res.status(200).json({
        success: true,
        message: "No providers found",
        providers: [],
        pagination: {
          page,
          limit,
          total: 0,
          totalPages: 0,
          hasMore: false,
        },
      });
    }

    // SUCCESS

    return res.status(200).json({
      success: true,
      message: "Providers fetched successfully",
      providers,
      pagination: buildPaginationResponse({
        page,
        limit,
        total,
      }),
    });
  } catch (err) {
    console.error("Recommended providers error:", err);

    return res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
}

async function uploadProviderDocuments(req, res) {
  try {
    const userId = req.user.id;

    const provider = await providerModel.findOne({ userId });

    if (!provider) {
      return res.status(404).json({
        message: "Provider profile not found",
      });
    }

    if (!req.files || !req.files.aadharCard || !req.files.certificate) {
      return res.status(400).json({
        message: "Aadhar card and certificate are required",
      });
    }

    const aadharCardData = await uploadImage(
      req.files.aadharCard[0],
      `${userId}-${Date.now()}-aadharCard`,
      "providers/documents",
    );

    const certificateData = await uploadImage(
      req.files.certificate[0],
      `${userId}-${Date.now()}-certificate`,
      "providers/documents",
    );

    let profileImageData = null;

    if (req.files.profileImage) {
      profileImageData = await uploadImage(
        req.files.profileImage[0],
        `${userId}-${Date.now()}-profileImage`,
        "providers/profile",
      );
    }

    provider.documents = {
      aadharCard: {
        url: aadharCardData.url,
        fileId: aadharCardData.fileId,
      },
      certificate: {
        url: certificateData.url,
        fileId: certificateData.fileId,
      },
    };

    if (profileImageData) {
      provider.profileImage = {
        url: profileImageData.url,
        fileId: profileImageData.fileId,
      };
    }

    await provider.save();

    return res.status(200).json({
      message: "Documents uploaded successfully",
      provider,
    });
  } catch (err) {
    console.error("upload documents error:", err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

async function providerDashboardOverview(req, res) {
  try {
    const providerId = req.provider._id;

    const now = new Date();

    const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    const previousMonthStart = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      1,
    );

    const dashboardOverview = await bookingsModel.aggregate([
      {
        $match: {
          "providerSnapshot.providerObjectId": providerId,
        },
      },

      {
        $facet: {
          bookings: [
            {
              $match: {
                bookingDate: {
                  $gte: previousMonthStart,
                },
              },
            },
            {
              $group: {
                _id: {
                  $cond: [
                    {
                      $gte: ["$bookingDate", currentMonthStart],
                    },
                    "current",
                    "previous",
                  ],
                },
                count: {
                  $sum: 1,
                },
              },
            },
          ],

          pendingBookings: [
            {
              $match: {
                bookingDate: {
                  $gte: previousMonthStart,
                },
                bookingStatus: "pending",
              },
            },
            {
              $group: {
                _id: {
                  $cond: [
                    {
                      $gte: ["$bookingDate", currentMonthStart],
                    },
                    "current",
                    "previous",
                  ],
                },
                count: {
                  $sum: 1,
                },
              },
            },
          ],

          completedBookings: [
            {
              $match: {
                bookingStatus: "completed",
                completedAt: {
                  $gte: previousMonthStart,
                },
              },
            },
            {
              $group: {
                _id: {
                  $cond: [
                    {
                      $gte: ["$completedAt", currentMonthStart],
                    },
                    "current",
                    "previous",
                  ],
                },
                count: {
                  $sum: 1,
                },
              },
            },
          ],

          earnings: [
            {
              $match: {
                bookingStatus: "completed",
                paymentStatus: "success",
                completedAt: {
                  $gte: previousMonthStart,
                },
              },
            },
            {
              $group: {
                _id: {
                  $cond: [
                    {
                      $gte: ["$completedAt", currentMonthStart],
                    },
                    "current",
                    "previous",
                  ],
                },
                total: {
                  $sum: "$pricing.providerPayout",
                },
              },
            },
          ],
        },
      },
    ]);

    const data = dashboardOverview[0];

    const getCurrentPrevious = (data, field) => {
      const current = data.find((item) => item._id === "current");
      const previous = data.find((item) => item._id === "previous");

      return {
        current: current?.[field] || 0,
        previous: previous?.[field] || 0,
      };
    };

    const bookings = getCurrentPrevious(data.bookings, "count");

    const pendingBookings = getCurrentPrevious(data.pendingBookings, "count");

    const completedBookings = getCurrentPrevious(
      data.completedBookings,
      "count",
    );

    const earnings = getCurrentPrevious(data.earnings, "total");

    const calculatePercentage = (current, previous) => {
      if (previous === 0) {
        if (current === 0) return 0;

        return 100;
      }

      return Number((((current - previous) / previous) * 100).toFixed(2));
    };

    const overview = {
      totalBookings: bookings.current,

      pendingBookings: pendingBookings.current,

      completedBookings: completedBookings.current,

      totalEarnings: earnings.current,

      percentage: {
        totalBookings: calculatePercentage(bookings.current, bookings.previous),

        pendingBookings: calculatePercentage(
          pendingBookings.current,
          pendingBookings.previous,
        ),

        completedBookings: calculatePercentage(
          completedBookings.current,
          completedBookings.previous,
        ),

        totalEarnings: calculatePercentage(earnings.current, earnings.previous),
      },
    };

    return res.status(200).json({
      success: true,
      message: "Provider dashboard overview fetched successfully",
      dashboardOverview: overview,
    });
  } catch (err) {
    console.log("Provider Dashboard Overview Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function todayBookings(req, res) {
  try {
    const providerId = req.provider._id;
    let { page, limit } = req.query;

    page = Math.max(Number(page) || 1, 1);
    limit = Math.min(Math.max(Number(limit) || 5, 1), 50);
    const skip = (page - 1) * limit;

    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);

    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);
    const result = await bookingsModel.aggregate([
      {
        $match: {
          "providerSnapshot.providerObjectId": providerId,

          bookingDate: {
            $gte: todayStart,
            $lt: tomorrowStart,
          },

          bookingStatus: {
            $in: ["pending", "in_progress", "accepted"],
          },
        },
      },
      {
        $sort: {
          "bookingSlot.startTime": 1,
        },
      },
      {
        $facet: {
          bookings: [
            {
              $skip: skip,
            },
            {
              $limit: limit,
            },

            {
              $project: {
                _id: 1,
                bookingId: 1,
                bookingStatus: 1,

                bookingDate: 1,
                bookingSlot: 1,

                userSnapshot: 1,
                serviceSnapshot: 1,
                serviceAddressSnapshot: 1,
              },
            },
          ],
          totalTodayBookings: [
            {
              $count: "total",
            },
          ],
        },
      },
    ]);
    const todayBookings = result[0]?.bookings || [];
    const total = result[0]?.totalTodayBookings[0]?.total || 0;
    const totalPages = Math.ceil(total / limit);
    return res.status(200).json({
      success: true,
      message: "Today Booking Fetch Successfully.",
      todayBookings,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
      },
    });
  } catch (err) {
    console.error("Today booking error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function bookingAnalytics(req, res) {
  try {
    const { period = "week" } = req.query;
    const providerId = req.provider._id;

    const allowedPeriods = ["week", "month", "year"];

    if (!allowedPeriods.includes(period)) {
      return res.status(400).json({
        success: false,
        message: "Invalid period. Allowed values: week, month, year",
      });
    }
    const now = new Date();

    const IST_OFFSET = 5.5 * 60 * 60 * 1000;

    const istNow = new Date(now.getTime() + IST_OFFSET);
    //=======================================================
    // DAY PERIOD
    //=======================================================
    const day = istNow.getUTCDay();

    const diffToMonday = day === 0 ? 6 : day - 1;

    const currentWeekStartIST = new Date(istNow);

    currentWeekStartIST.setUTCDate(istNow.getUTCDate() - diffToMonday);

    currentWeekStartIST.setUTCHours(0, 0, 0, 0);

    const currentWeekDate = new Date(currentWeekStartIST);

    const nextWeekStart = new Date(currentWeekDate);

    nextWeekStart.setUTCDate(nextWeekStart.getUTCDate() + 7);

    const previousWeekDate = new Date(currentWeekDate);
    previousWeekDate.setUTCDate(previousWeekDate.getUTCDate() - 7);

    //=======================================================
    // MONTH PERIOD
    //=======================================================
    const currentMonthStartIST = new Date(istNow);

    currentMonthStartIST.setDate(1);
    currentMonthStartIST.setHours(0, 0, 0, 0);

    const nextMonthStartIST = new Date(currentMonthStartIST);
    nextMonthStartIST.setUTCMonth(nextMonthStartIST.getUTCMonth() + 1);

    const previousMonthStartIST = new Date(currentMonthStartIST);
    previousMonthStartIST.setUTCMonth(previousMonthStartIST.getUTCMonth() - 1);

    const currentMonthStart = new Date(
      currentMonthStartIST.getTime() - IST_OFFSET,
    );
    const nextMonthStart = new Date(nextMonthStartIST.getTime() - IST_OFFSET);
    const previousMonthStart = new Date(
      previousMonthStartIST.getTime() - IST_OFFSET,
    );
    const daysInCurrentMonth = new Date(
      currentMonthStartIST.getUTCFullYear(),
      currentMonthStartIST.getUTCMonth() + 1,
      0,
    ).getDate();

    const totalCurrentWeeks = Math.ceil(daysInCurrentMonth / 7);
    const daysInPreviousMonth = new Date(
      previousMonthStartIST.getUTCFullYear(),
      previousMonthStartIST.getUTCMonth() + 1,
      0,
    ).getDate();
    const totalPreviousWeeks = Math.ceil(daysInPreviousMonth / 7);

    //=======================================================
    // Year PERIOD
    //=======================================================

    const currentYearStartIST = new Date(istNow);

    currentYearStartIST.setUTCMonth(0, 1);
    currentYearStartIST.setUTCHours(0, 0, 0, 0);

    const nextYearStartIST = new Date(currentYearStartIST);
    nextYearStartIST.setUTCFullYear(nextYearStartIST.getUTCFullYear() + 1);

    const previousYearStartIST = new Date(currentYearStartIST);
    previousYearStartIST.setUTCFullYear(
      previousYearStartIST.getUTCFullYear() - 1,
    );

    const currentYearStart = new Date(
      currentYearStartIST.getTime() - IST_OFFSET,
    );
    const nextYearStart = new Date(nextYearStartIST.getTime() - IST_OFFSET);
    const previousYearStart = new Date(
      previousYearStartIST.getTime() - IST_OFFSET,
    );

    const facet = {};

    if (period === "week") {
      facet.currentWeek = [
        {
          $match: {
            bookingDate: {
              $gte: currentWeekDate,
              $lt: nextWeekStart,
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$bookingDate",
                timezone: "Asia/Kolkata",
              },
            },
            bookings: {
              $sum: 1,
            },
          },
        },
      ];

      facet.previousWeek = [
        {
          $match: {
            bookingDate: {
              $gte: previousWeekDate,
              $lt: currentWeekDate,
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%Y-%m-%d",
                date: "$bookingDate",
                timezone: "Asia/Kolkata",
              },
            },
            bookings: {
              $sum: 1,
            },
          },
        },
      ];
    }

    if (period === "month") {
      facet.currentMonth = [
        {
          $match: {
            bookingDate: {
              $gte: currentMonthStart,
              $lt: nextMonthStart,
            },
          },
        },
        {
          $set: {
            weekNumber: {
              $ceil: {
                $divide: [
                  {
                    $dayOfMonth: {
                      date: "$bookingDate",
                      timezone: "Asia/Kolkata",
                    },
                  },
                  7,
                ],
              },
            },
          },
        },
        {
          $group: {
            _id: "$weekNumber",
            bookings: {
              $sum: 1,
            },
          },
        },
      ];

      facet.previousMonth = [
        {
          $match: {
            bookingDate: {
              $gte: previousMonthStart,
              $lt: currentMonthStart,
            },
          },
        },
        {
          $set: {
            weekNumber: {
              $ceil: {
                $divide: [
                  {
                    $dayOfMonth: {
                      date: "$bookingDate",
                      timezone: "Asia/Kolkata",
                    },
                  },
                  7,
                ],
              },
            },
          },
        },
        {
          $group: {
            _id: "$weekNumber",
            bookings: {
              $sum: 1,
            },
          },
        },
      ];
    }

    if (period === "year") {
      facet.currentYear = [
        {
          $match: {
            bookingDate: {
              $gte: currentYearStart,
              $lt: nextYearStart,
            },
          },
        },
        {
          $group: {
            _id: {
              $month: {
                date: "$bookingDate",
                timezone: "Asia/Kolkata",
              },
            },
            bookings: {
              $sum: 1,
            },
          },
        },
      ];

      facet.previousYear = [
        {
          $match: {
            bookingDate: {
              $gte: previousYearStart,
              $lt: currentYearStart,
            },
          },
        },
        {
          $group: {
            _id: {
              $month: {
                date: "$bookingDate",
                timezone: "Asia/Kolkata",
              },
            },
            bookings: {
              $sum: 1,
            },
          },
        },
      ];
    }
    const result = await bookingsModel.aggregate([
      {
        $match: {
          "providerSnapshot.providerObjectId": providerId,
        },
      },
      {
        $facet: facet,
      },
    ]);

    //=======================================================
    // DAY PERIOD LOGIC
    //=======================================================

    const formatDateKey = (date) => {
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    if (period === "week") {
      const currentWeekData = result[0]?.currentWeek || [];

      const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

      const currentWeek = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(currentWeekDate);

        date.setUTCDate(date.getUTCDate() + index);

        const dateKey = formatDateKey(date);

        const found = currentWeekData.find((item) => item._id === dateKey);

        const bookings = found?.bookings || 0;

        const day = dayNames[index];

        return {
          day,
          bookings,
        };
      });
      const previousWeekData = result[0]?.previousWeek || [];
      const previousWeek = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(previousWeekDate);

        date.setUTCDate(date.getUTCDate() + index);

        const dateKey = formatDateKey(date);

        const found = previousWeekData.find((item) => item._id === dateKey);

        const bookings = found?.bookings || 0;

        const day = dayNames[index];

        return {
          day,
          bookings,
        };
      });
      const currentTotal = currentWeek.reduce(
        (total, item) => total + item.bookings,
        0,
      );
      const previousTotal = previousWeek.reduce(
        (total, item) => total + item.bookings,
        0,
      );
      let growthPercentage = null;

      if (previousTotal > 0) {
        growthPercentage = Number(
          (((currentTotal - previousTotal) / previousTotal) * 100).toFixed(2),
        );
      }

      return res.status(200).json({
        success: true,
        message: "Booking Analytics data fetched successfully",
        period,

        currentTotal,
        previousTotal,
        growthPercentage,

        currentWeek,
        previousWeek,
      });
    }
    //=======================================================
    // MONTH PERIOD LOGIC
    //=======================================================

    if (period === "month") {
      const currentMonthData = result[0]?.currentMonth || [];
      const previousMonthData = result[0]?.previousMonth || [];

      const currentMonth = Array.from(
        { length: totalCurrentWeeks },
        (_, index) => {
          const weekNumber = index + 1;
          const found = currentMonthData.find(
            (item) => item._id === weekNumber,
          );
          const bookings = found?.bookings || 0;
          return {
            week: `Week ${weekNumber}`,
            bookings,
          };
        },
      );

      const currentMonthTotal = currentMonth.reduce(
        (total, item) => total + item.bookings,
        0,
      );
      const previousMonth = Array.from(
        { length: totalPreviousWeeks },
        (_, index) => {
          const weekNumber = index + 1;
          const found = previousMonthData.find(
            (item) => item._id === weekNumber,
          );
          const bookings = found?.bookings || 0;

          return {
            week: `Week ${weekNumber}`,
            bookings,
          };
        },
      );
      const previousMonthTotal = previousMonth.reduce(
        (total, item) => total + item.bookings,
        0,
      );

      let monthGrowthPercentage = null;
      if (previousMonthTotal > 0) {
        monthGrowthPercentage = Number(
          (
            ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) *
            100
          ).toFixed(2),
        );
      }

      return res.status(200).json({
        success: true,
        message: "Booking Analytics data fetched successfully",
        period,

        currentMonthTotal,
        previousMonthTotal,
        monthGrowthPercentage,

        currentMonth,
        previousMonth,
      });
    }
    //=======================================================
    // YEAR PERIOD LOGIC
    //=======================================================

    if (period === "year") {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const currentYearData = result[0]?.currentYear || [];
      const previousYearData = result[0]?.previousYear || [];

      const currentYear = Array.from({ length: 12 }, (_, index) => {
        const monthNumber = index + 1;

        const found = currentYearData.find((item) => item._id === monthNumber);
        const bookings = found?.bookings || 0;

        return {
          month: monthNames[index],
          bookings,
        };
      });
      const previousYear = Array.from({ length: 12 }, (_, index) => {
        const monthNumber = index + 1;

        const found = previousYearData.find((item) => item._id === monthNumber);
        const bookings = found?.bookings || 0;

        return {
          month: monthNames[index],
          bookings,
        };
      });

      const currentYearTotal = currentYear.reduce(
        (total, item) => total + item.bookings,
        0,
      );
      const previousYearTotal = previousYear.reduce(
        (total, item) => total + item.bookings,
        0,
      );

      let yearGrowthPercentage = null;
      if (previousYearTotal > 0) {
        yearGrowthPercentage = Number(
          (
            ((currentYearTotal - previousYearTotal) / previousYearTotal) *
            100
          ).toFixed(2),
        );
      }

      return res.status(200).json({
        success: true,
        message: "Booking Analytics data fetched successfully",
        period,

        currentYearTotal,
        previousYearTotal,
        yearGrowthPercentage,

        currentYear,
        previousYear,
      });
    }
  } catch (err) {
    console.error("booking Analytics Error:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error:",
    });
  }
}

//=====================================================
// HELPER FUNCTIONS
//=====================================================

function minuteToTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}`;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

function dateToISTMinutes(date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(date);

  const hours = Number(parts.find((part) => part.type === "hour").value);

  const minutes = Number(parts.find((part) => part.type === "minute").value);

  return hours * 60 + minutes;
}

function time12ToMinutes(time) {
  const [timePart, modifier] = time.trim().split(" ");

  let [hours, minutes] = timePart.split(":").map(Number);

  if (modifier.toUpperCase() === "AM") {
    if (hours === 12) {
      hours = 0;
    }
  } else if (modifier.toUpperCase() === "PM") {
    if (hours !== 12) {
      hours += 12;
    }
  }

  return hours * 60 + minutes;
}

function minute12ToTime(minutes) {
  let hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
    2,
    "0",
  )} ${period}`;
}

async function scheduleSummary(req, res) {
  try {
    const providerId = req.provider._id;
    const workingHours = req.provider.workingHours;

    if (!workingHours?.startTime || !workingHours?.endTime) {
      return res.status(400).json({
        success: false,
        message: "Provider working hours are not set",
      });
    }

    const startM = time12ToMinutes(workingHours.startTime);
    const endM = time12ToMinutes(workingHours.endTime);

    const slots = [];

    let current = startM;

    while (current < endM) {
      const next = current + 60;

      if (next > endM) {
        break;
      }

      slots.push({
        startTime: minute12ToTime(current),
        endTime: minute12ToTime(next),
      });

      current = next;
    }

    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);

    const todayEnd = new Date(todayStart);
    todayEnd.setUTCDate(todayEnd.getUTCDate() + 1);

    const now = new Date();

    const currentISTMinutes = dateToISTMinutes(now);

    const nextFullHour =
      currentISTMinutes % 60 === 0
        ? currentISTMinutes
        : currentISTMinutes + (60 - (currentISTMinutes % 60));

    const [bookings, nextUpcomingBooking] = await Promise.all([
      bookingsModel.find({
        "providerSnapshot.providerObjectId": providerId,

        bookingDate: {
          $gte: todayStart,
          $lt: todayEnd,
        },
      }),

      bookingsModel
        .findOne({
          "providerSnapshot.providerObjectId": providerId,

          "bookingSlot.startTime": {
            $gt: now,
          },

          bookingStatus: {
            $in: ["pending", "accepted"],
          },
        })
        .select("bookingSlot")
        .sort({
          "bookingSlot.startTime": 1,
        })
        .lean(),
    ]);

    const slotBooks = slots.map((slot) => {
      // 12-hour formatted slot -> minutes
      const slotStart = time12ToMinutes(slot.startTime);
      const slotEnd = time12ToMinutes(slot.endTime);

      // Already passed slots
      if (slotStart < nextFullHour) {
        return {
          ...slot,
          status: "unavailable",
        };
      }

      const isBooked = bookings.some((booking) => {
        if (
          !["pending", "accepted", "in_progress"].includes(
            booking.bookingStatus,
          )
        ) {
          return false;
        }

        const bookingStart = dateToISTMinutes(booking.bookingSlot.startTime);

        const bookingEnd = dateToISTMinutes(booking.bookingSlot.endTime);

        return slotStart < bookingEnd && slotEnd > bookingStart;
      });

      return {
        ...slot,
        status: isBooked ? "booked" : "free",
      };
    });

    const totalFreeSlot = slotBooks.filter(
      (slot) => slot.status === "free",
    ).length;

    const result = await bookingsModel.aggregate([
      {
        $match: {
          "providerSnapshot.providerObjectId": providerId,
        },
      },

      {
        $group: {
          _id: null,

          totalTodayBookings: {
            $sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$bookingDate", todayStart],
                    },
                    {
                      $lt: ["$bookingDate", todayEnd],
                    },
                    {
                      $ne: ["$bookingStatus", "cancelled"],
                    },
                  ],
                },
                1,
                0,
              ],
            },
          },

          totalPendingBookings: {
            $sum: {
              $cond: [
                {
                  $eq: ["$bookingStatus", "pending"],
                },
                1,
                0,
              ],
            },
          },

          totalUpcomingBookings: {
            $sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gt: ["$bookingSlot.startTime", now],
                    },
                    {
                      $in: ["$bookingStatus", ["pending", "accepted"]],
                    },
                  ],
                },
                1,
                0,
              ],
            },
          },

          totalCompletedBookings: {
            $sum: {
              $cond: [
                {
                  $and: [
                    {
                      $gte: ["$bookingDate", todayStart],
                    },
                    {
                      $lt: ["$bookingDate", todayEnd],
                    },
                    {
                      $eq: ["$bookingStatus", "completed"],
                    },
                  ],
                },
                1,
                0,
              ],
            },
          },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Summary fetched successfully",

      result: result[0] || {
        totalTodayBookings: 0,
        totalPendingBookings: 0,
        totalUpcomingBookings: 0,
        totalCompletedBookings: 0,
      },

      totalFreeSlot,

      nextUpcomingBooking,
    });
  } catch (err) {
    console.error("Schedule summary Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
}

async function providerSlots(req, res) {
  try {
    const providerId = req.provider._id;
    const workingHours = req.provider.workingHours;

    if (!workingHours?.startTime || !workingHours?.endTime) {
      return res.status(400).json({
        success: false,
        message: "Provider working hours are not set",
      });
    }

    const startM = time12ToMinutes(workingHours.startTime);
    const endM = time12ToMinutes(workingHours.endTime);

    const startDate = new Date();
    startDate.setUTCHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setUTCDate(endDate.getUTCDate() + 1);

    const now = new Date();

    const currentISTMinutes = dateToISTMinutes(now);

    const nextAvailableTime =
      currentISTMinutes % 60 === 0
        ? currentISTMinutes
        : currentISTMinutes + (60 - (currentISTMinutes % 60));

    const todayBookings = await bookingsModel
      .find({
        "providerSnapshot.providerObjectId": providerId,

        bookingDate: {
          $gte: startDate,
          $lt: endDate,
        },

        bookingStatus: {
          $in: ["pending", "accepted", "in_progress"],
        },
      })
      .select(
        "userSnapshot serviceSnapshot.categoryName bookingStatus bookingSlot serviceAddressSnapshot",
      )
      .sort({
        "bookingSlot.startTime": 1,
      });

    const slots = [];

    const effectiveStart = Math.max(startM, nextAvailableTime);

    let cursor = effectiveStart;

    for (const booking of todayBookings) {
      const start = dateToISTMinutes(booking.bookingSlot.startTime);

      const end = dateToISTMinutes(booking.bookingSlot.endTime);

      if (end <= cursor) {
        continue;
      }

      if (end <= startM) {
        continue;
      }

      if (start >= endM) {
        break;
      }

      const bookingStart = Math.max(start, startM);
      const bookingEnd = Math.min(end, endM);

      if (cursor < bookingStart) {
        slots.push({
          type: "free",
          startTime: minute12ToTime(cursor),
          endTime: minute12ToTime(bookingStart),
        });
      }

      const visibleBookingStart = Math.max(cursor, bookingStart);

      if (visibleBookingStart < bookingEnd) {
        slots.push({
          type: "booking",
          startTime: minute12ToTime(visibleBookingStart),
          endTime: minute12ToTime(bookingEnd),
          booking,
        });
      }

      cursor = Math.max(cursor, bookingEnd);
    }

    if (cursor < endM) {
      slots.push({
        type: "free",
        startTime: minute12ToTime(cursor),
        endTime: minute12ToTime(endM),
      });
    }

    return res.status(200).json({
      success: true,
      message: "Provider slots fetched successfully",
      date: startDate,
      workingHours,
      slots,
    });
  } catch (err) {
    console.error("Provider Slots Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function providerUpcomingBooking(req, res) {
  try {
    const providerId = req.provider._id;

    const now = new Date();

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);

    const startOfTomorrow = new Date(startOfToday);
    startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

    const upcomingBookings = await bookingsModel
      .find({
        "providerSnapshot.providerObjectId": providerId,

        "bookingSlot.startTime": {
          $gte: now,
          $lt: startOfTomorrow,
        },

        bookingStatus: {
          $in: ["pending", "accepted"],
        },
      })
      .select(
        "userSnapshot serviceSnapshot.categoryName bookingStatus bookingSlot serviceAddressSnapshot",
      )
      .sort({
        "bookingSlot.startTime": 1,
      });

    return res.status(200).json({
      success: true,
      message: "Upcoming bookings fetched successfully",
      upcomingBookings,
    });
  } catch (err) {
    console.error("Upcoming booking Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
}
async function setProviderAvailability(req, res) {
  try {
    const { startTime, endTime } = req.body;
    const provider = req.provider;
    if (startTime === undefined || endTime === undefined) {
      return res.status(400).json({
        success: false,
        message: "Start time and end time are required!",
      });
    }

    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    if (startMinutes >= endMinutes) {
      return res.status(400).json({
        success: false,
        message: "End time must be greater than start time",
      });
    }
    provider.workingHours = {
      startTime,
      endTime,
    };
    await provider.save();
    return res.status(200).json({
      success: true,
      message: "provider availability updated successfully",
    });
  } catch (err) {
    console.error("availability Provider error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
async function getProviderAvailability(req, res) {
  try {
    const workingHours = req.provider.workingHours;

    return res.status(200).json({
      success: true,
      message: "Working hours fetched successfully",
      workingHours,
    });
  } catch (err) {
    console.error("Get provider availability error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
async function scheduleBookings(req, res) {
  try {
    const { view = "day", date } = req.query;
    const providerId = req.provider._id;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date is required",
      });
    }

    if (!["day", "week", "month"].includes(view)) {
      return res.status(400).json({
        success: false,
        message: "View must be day, week or month",
      });
    }

    const selectedDate = new Date(date);

    if (isNaN(selectedDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date",
      });
    }

    selectedDate.setUTCHours(0, 0, 0, 0);

    let startDate;
    let endDate;

    if (view === "day") {
      startDate = new Date(selectedDate);
      endDate = new Date(startDate);
      endDate.setUTCDate(endDate.getUTCDate() + 1);
    }

    if (view === "week") {
      const weekDay = selectedDate.getUTCDay();

      const daysToMonday = weekDay === 0 ? 6 : weekDay - 1;

      startDate = new Date(selectedDate);

      startDate.setUTCDate(startDate.getUTCDate() - daysToMonday);

      endDate = new Date(startDate);

      endDate.setUTCDate(endDate.getUTCDate() + 7);
    }

    if (view === "month") {
      startDate = new Date(
        Date.UTC(selectedDate.getUTCFullYear(), selectedDate.getUTCMonth(), 1),
      );

      endDate = new Date(
        Date.UTC(
          selectedDate.getUTCFullYear(),
          selectedDate.getUTCMonth() + 1,
          1,
        ),
      );
    }

    const bookings = await bookingsModel
      .find({
        "providerSnapshot.providerObjectId": providerId,

        bookingDate: {
          $gte: startDate,
          $lt: endDate,
        },

        bookingStatus: {
          $in: ["pending", "accepted", "in_progress"],
        },
      })
      .select(
        "_id serviceSnapshot.categoryName  serviceAddressSnapshot userSnapshot.profileImage userSnapshot.name bookingStatus bookingSlot",
      )
      .sort({
        "bookingSlot.startTime": 1,
      });

    return res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      view,

      dateRange: {
        startDate,
        endDate,
      },

      totalBookings: bookings.length,

      bookings,
    });
  } catch (err) {
    console.error("Schedule Bookings Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

//=====================================================
// PROVIDER EARNING CONTROLLERS
//=====================================================

async function earningsSummary(req, res) {
  try {
    const providerId = req.provider._id;

    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const startOfNextMonth = new Date(startOfMonth);
    startOfNextMonth.setMonth(startOfNextMonth.getMonth() + 1);

    const startOfLastMonth = new Date(startOfMonth);
    startOfLastMonth.setMonth(startOfLastMonth.getMonth() - 1);

    const bookingResult = await bookingsModel.aggregate([
      {
        $match: {
          "providerSnapshot.providerObjectId": providerId,
        },
      },

      {
        $facet: {
          totalEarnings: [
            {
              $match: {
                bookingStatus: "completed",
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],

          thisMonthEarnings: [
            {
              $match: {
                bookingStatus: "completed",
                completedAt: {
                  $gte: startOfMonth,
                  $lt: startOfNextMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],

          lastMonthEarnings: [
            {
              $match: {
                bookingStatus: "completed",
                completedAt: {
                  $gte: startOfLastMonth,
                  $lt: startOfMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],

          pendingAmount: [
            {
              $match: {
                bookingStatus: "completed",
                paymentStatus: "pending",
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],

          thisMonthPending: [
            {
              $match: {
                bookingStatus: "completed",
                paymentStatus: "pending",
                completedAt: {
                  $gte: startOfMonth,
                  $lt: startOfNextMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],

          lastMonthPending: [
            {
              $match: {
                bookingStatus: "completed",
                paymentStatus: "pending",
                completedAt: {
                  $gte: startOfLastMonth,
                  $lt: startOfMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$pricing.providerPayout", 0],
                  },
                },
              },
            },
          ],
        },
      },
    ]);

    const bookingData = bookingResult[0];

    const totalEarnings = bookingData.totalEarnings[0]?.amount || 0;

    const thisMonthEarnings = bookingData.thisMonthEarnings[0]?.amount || 0;

    const lastMonthEarnings = bookingData.lastMonthEarnings[0]?.amount || 0;

    const pendingAmount = bookingData.pendingAmount[0]?.amount || 0;

    const thisMonthPending = bookingData.thisMonthPending[0]?.amount || 0;

    const lastMonthPending = bookingData.lastMonthPending[0]?.amount || 0;

    const withdrawalResult = await withdrawalModel.aggregate([
      {
        $match: {
          providerId: providerId,
          status: "COMPLETED",
        },
      },

      {
        $facet: {
          totalWithdrawn: [
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$amount", 0],
                  },
                },
              },
            },
          ],

          thisMonthWithdrawn: [
            {
              $match: {
                createdAt: {
                  $gte: startOfMonth,
                  $lt: startOfNextMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$amount", 0],
                  },
                },
              },
            },
          ],

          lastMonthWithdrawn: [
            {
              $match: {
                createdAt: {
                  $gte: startOfLastMonth,
                  $lt: startOfMonth,
                },
              },
            },
            {
              $group: {
                _id: null,
                amount: {
                  $sum: {
                    $ifNull: ["$amount", 0],
                  },
                },
              },
            },
          ],
        },
      },
    ]);

    const withdrawalData = withdrawalResult[0];

    const withdrawnAmount = withdrawalData.totalWithdrawn[0]?.amount || 0;

    const thisMonthWithdrawn =
      withdrawalData.thisMonthWithdrawn[0]?.amount || 0;

    const lastMonthWithdrawn =
      withdrawalData.lastMonthWithdrawn[0]?.amount || 0;

    const calculateGrowth = (currentAmount, previousAmount) => {
      if (previousAmount === 0) {
        if (currentAmount === 0) {
          return 0;
        }

        return 100;
      }

      return Number(
        (((currentAmount - previousAmount) / previousAmount) * 100).toFixed(2),
      );
    };

    const thisMonthGrowth = calculateGrowth(
      thisMonthEarnings,
      lastMonthEarnings,
    );

    const pendingAmountGrowth = calculateGrowth(
      thisMonthPending,
      lastMonthPending,
    );

    const withdrawnAmountGrowth = calculateGrowth(
      thisMonthWithdrawn,
      lastMonthWithdrawn,
    );

    const totalEarningsGrowth = calculateGrowth(
      thisMonthEarnings,
      lastMonthEarnings,
    );

    return res.status(200).json({
      success: true,
      message: "Provider earnings fetched successfully",

      result: {
        totalEarnings,
        totalEarningsGrowth,

        thisMonthEarnings,
        thisMonthGrowth,

        pendingAmount,
        pendingAmountGrowth,

        withdrawnAmount,
        withdrawnAmountGrowth,
      },
    });
  } catch (err) {
    console.error("Provider Earning Summary Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
module.exports = {
  providerProfileCreate,
  getProvider,
  updateProvider,
  getProviders,
  getOneProviderDetails,
  uploadProviderDocuments,
  nearbySearchLocation,
  recommendedProviders,
  providerDashboardOverview,
  todayBookings,
  bookingAnalytics,
  scheduleSummary,
  providerSlots,
  providerUpcomingBooking,
  setProviderAvailability,
  getProviderAvailability,
  scheduleBookings,

  earningsSummary,
};
