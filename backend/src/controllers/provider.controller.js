const providerModel = require("../models/provider.model");
const { uploadImage } = require("../config/imagekit");
const imagekit = require("@imagekit/nodejs");
const categoryModel = require("../models/category.model");

const UserModel = require("../models/User.model");
const { generateId } = require("../utils/generateId");
const reviewModel = require("../models/review.model");
const { mongoose } = require("mongoose");
const {
  buildHomeProviderPipeline,
  buildCategoryProviderPipeline,
} = require("../utils/providerAggregation.js");
const { selectFields } = require("express-validator/lib/field-selection.js");
async function providerProfileCreate(req, res) {
  try {
    const {
      phoneNumber,
      price,
      experience,
      state,
      categories,
      district,
      city,
      locality,
      lat,
      lng,
    } = req.body;

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
    const aadharCardData = await uploadImage(
      req.files.aadharCard[0],
      `${userId}-${Date.now()}-aadharCard`,
      "Providers/Documents/AadharCards",
    );

    // Upload Certificate
    const certificateData = await uploadImage(
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

      categories,

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
          fileId: aadharCardData.fileId,
        },
        certificate: {
          url: certificateData.url,
          fileId: certificateData.fileId,
        },
      },
    });

    if (phoneNumber && phoneNumber !== user.phoneNumber) {
      user.phoneNumber = phoneNumber;
    }

    if (req.files.profileImage) {
      if (user.profileImage?.fileId) {
        await deleteImage(user.profileImage.fileId);
      }

      const profileImageData = await uploadImage(
        req.files.profileImage[0],
        `${userId}-${Date.now()}-profileImage`,
        "Users/ProfileImages",
      );

      user.profileImage = {
        url: profileImageData.url,
        fileId: profileImageData.fileId,
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

async function getSelectProviderByCategory(req, res) {
  try {
    const slug = req.params.slug;

    if (!slug) {
      return res.status(400).json({
        message: "slug is required!",
      });
    }
    const category = await categoryModel.findOne({ slug });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const providers = await providerModel.aggregate([
      {
        $match: {
          status: "approved",
          verifiedByAdmin: true,
        },
      },
      {
        $unwind: "$categories",
      },
      {
        $match: {
          "categories.category": category._id,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          providerName: "$user.fullname",
          profileImage: "$user.profileImage.url",
          experience: 1,
          rating: 1,
          totalReview: 1,
          availability: 1,
          pricing: "$categories.pricing.price",
        },
      },
      {
        $sort: {
          pricing: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Providers fetched  successfully",
      providers,
    });
  } catch (err) {
    console.error("Get select provider by category error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

async function nearbySearchLocation(req, res) {
  try {
    let {
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

    // =====================================================
    // PAGINATION
    // =====================================================

    const page = Math.max(
      Number(req.query.page) || 1,
      1,
    );

    const limit = Math.min(
      Math.max(Number(req.query.limit) || 6, 1),
      50,
    );

    const skip = (page - 1) * limit;

    // =====================================================
    // LOCATION VALIDATION
    // =====================================================

    if (
      lat === undefined ||
      lng === undefined ||
      radius === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "lat, lng and radius are required",
      });
    }

    lat = Number(lat);
    lng = Number(lng);
    radius = Number(radius);

    if (
      Number.isNaN(lat) ||
      Number.isNaN(lng) ||
      Number.isNaN(radius)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "lat, lng and radius must be valid numbers",
      });
    }

    if (lat < -90 || lat > 90) {
      return res.status(400).json({
        success: false,
        message: "Invalid latitude",
      });
    }

    if (lng < -180 || lng > 180) {
      return res.status(400).json({
        success: false,
        message: "Invalid longitude",
      });
    }

    if (radius <= 0) {
      return res.status(400).json({
        success: false,
        message: "Radius must be greater than 0",
      });
    }

    // =====================================================
    // CATEGORY VALIDATION
    // =====================================================

    if (categoryId) {
      if (!mongoose.Types.ObjectId.isValid(categoryId)) {
        return res.status(400).json({
          success: false,
          message: "Invalid categoryId",
        });
      }

      const category = await categoryModel.findById(
        categoryId,
      );

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }

      categoryId = new mongoose.Types.ObjectId(
        categoryId,
      );
    }

    // =====================================================
    // BASE FILTER
    // =====================================================

    const queryFilter = {
      status: "approved",
      verifiedByAdmin: true,
    };

    // =====================================================
    // RATING FILTER
    // =====================================================

    if (rating !== undefined) {
      rating = Number(rating);

      if (
        Number.isNaN(rating) ||
        rating < 0 ||
        rating > 5
      ) {
        return res.status(400).json({
          success: false,
          message: "Rating must be between 0 and 5",
        });
      }

      queryFilter.rating = {
        $gte: rating,
      };
    }

    // =====================================================
    // EXPERIENCE FILTER
    // =====================================================

    if (experience !== undefined) {
      experience = Number(experience);

      if (
        Number.isNaN(experience) ||
        experience < 0
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Experience must be a valid number",
        });
      }

      queryFilter.experience = {
        $gte: experience,
      };
    }

    // =====================================================
    // AVAILABILITY FILTER
    // =====================================================

    if (availability !== undefined) {
      if (
        availability !== "true" &&
        availability !== "false"
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid availability",
        });
      }

      queryFilter.availability =
        availability === "true";
    }

    // =====================================================
    // TRUSTED FILTER
    // =====================================================

    if (trusted !== undefined) {
      if (
        trusted !== "true" &&
        trusted !== "false"
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid trusted",
        });
      }

      queryFilter.trusted =
        trusted === "true";
    }

    // =====================================================
    // CATEGORY FILTER
    // =====================================================

    if (categoryId) {
      queryFilter["categories.category"] =
        categoryId;
    }

    // =====================================================
    // PRICE FILTER
    // =====================================================

    if (
      minPrice !== undefined ||
      maxPrice !== undefined
    ) {
      if (!categoryId) {
        return res.status(400).json({
          success: false,
          message:
            "Category is required for price filter",
        });
      }

      const priceFilter = {};

      if (minPrice !== undefined) {
        minPrice = Number(minPrice);

        if (
          Number.isNaN(minPrice) ||
          minPrice < 0
        ) {
          return res.status(400).json({
            success: false,
            message: "Invalid minPrice",
          });
        }

        priceFilter.$gte = minPrice;
      }

      if (maxPrice !== undefined) {
        maxPrice = Number(maxPrice);

        if (
          Number.isNaN(maxPrice) ||
          maxPrice < 0
        ) {
          return res.status(400).json({
            success: false,
            message: "Invalid maxPrice",
          });
        }

        priceFilter.$lte = maxPrice;
      }

      if (
        minPrice !== undefined &&
        maxPrice !== undefined &&
        minPrice > maxPrice
      ) {
        return res.status(400).json({
          success: false,
          message:
            "minPrice cannot be greater than maxPrice",
        });
      }

      queryFilter.categories = {
        $elemMatch: {
          category: categoryId,
          "pricing.price": priceFilter,
        },
      };
    }

    // =====================================================
    // SORT OPTIONS
    // =====================================================

    const sortOptions = Array.isArray(sort)
      ? sort
      : [sort].filter(Boolean);

    // =====================================================
    // SORT HELPER
    // =====================================================

    function getSortField(sortOption) {
      switch (sortOption) {
        case "rating-high":
          return {
            field: "rating",
            order: -1,
          };

        case "rating-low":
          return {
            field: "rating",
            order: 1,
          };

        case "experience-high":
          return {
            field: "experience",
            order: -1,
          };

        case "experience-low":
          return {
            field: "experience",
            order: 1,
          };

        case "price-high":
          return {
            field: "categoryPrice",
            order: -1,
          };

        case "price-low":
          return {
            field: "categoryPrice",
            order: 1,
          };

        case "distance-near":
          return {
            field: "distance",
            order: 1,
          };

        case "distance-far":
          return {
            field: "distance",
            order: -1,
          };

        default:
          return null;
      }
    }

    // =====================================================
    // BUILD SORT
    // =====================================================

    const sortObject = {};
    const usedSortFields = new Set();

    for (const sortOption of sortOptions) {
      const sortField =
        getSortField(sortOption);

      if (!sortField) {
        return res.status(400).json({
          success: false,
          message:
            `Invalid sort option: ${sortOption}`,
        });
      }

      if (
        usedSortFields.has(sortField.field)
      ) {
        return res.status(400).json({
          success: false,
          message:
            `Cannot sort ${sortField.field} multiple times`,
        });
      }

      usedSortFields.add(sortField.field);

      sortObject[sortField.field] =
        sortField.order;
    }

    // =====================================================
    // PRICE SORT CHECK
    // =====================================================

    const hasPriceSort = sortOptions.some(
      (option) =>
        option === "price-low" ||
        option === "price-high",
    );

    if (hasPriceSort && !categoryId) {
      return res.status(400).json({
        success: false,
        message:
          "Category is required for price sorting",
      });
    }

    // =====================================================
    // GEO NEAR
    // =====================================================

    const distance = radius * 1000;

    const pipeline = [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [lng, lat],
          },

          key: "location",

          distanceField: "distance",

          maxDistance: distance,

          spherical: true,

          query: queryFilter,
        },
      },
    ];

    // =====================================================
    // SELECTED CATEGORY
    // =====================================================

    if (categoryId) {
      pipeline.push({
        $set: {
          selectedCategory: {
            $arrayElemAt: [
              {
                $filter: {
                  input: "$categories",

                  as: "category",

                  cond: {
                    $eq: [
                      "$$category.category",
                      categoryId,
                    ],
                  },
                },
              },

              0,
            ],
          },
        },
      });
    }

    // =====================================================
    // CATEGORY PRICE
    // =====================================================

    if (categoryId) {
      pipeline.push({
        $set: {
          categoryPrice:
            "$selectedCategory.pricing.price",
        },
      });
    }

    // =====================================================
    // SORT
    // =====================================================

    if (
      Object.keys(sortObject).length > 0
    ) {
      pipeline.push({
        $sort: sortObject,
      });
    }

    // =====================================================
    // USER LOOKUP
    // =====================================================

    pipeline.push(
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },

      {
        $unwind: "$user",
      },
    );

    // =====================================================
    // STATE LOOKUP
    // =====================================================

    pipeline.push(
      {
        $lookup: {
          from: "states",
          localField: "location.state",
          foreignField: "_id",
          as: "state",
        },
      },

      {
        $unwind: "$state",
      },
    );

    // =====================================================
    // DISTRICT LOOKUP
    // =====================================================

    pipeline.push(
      {
        $lookup: {
          from: "districts",
          localField: "location.district",
          foreignField: "_id",
          as: "district",
        },
      },

      {
        $unwind: "$district",
      },
    );

    // =====================================================
    // CITY LOOKUP
    // =====================================================

    pipeline.push(
      {
        $lookup: {
          from: "cities",
          localField: "location.city",
          foreignField: "_id",
          as: "city",
        },
      },

      {
        $unwind: "$city",
      },
    );

    // =====================================================
    // CATEGORY LOOKUP
    // =====================================================

    if (categoryId) {
      pipeline.push(
        {
          $lookup: {
            from: "categories",
            localField:
              "selectedCategory.category",
            foreignField: "_id",
            as: "category",
          },
        },

        {
          $unwind: "$category",
        },
      );
    }

    // =====================================================
    // PROJECT
    // =====================================================

    pipeline.push({
      $project: {
        _id: 1,

        providerId: 1,

        providerName:
          "$user.fullname",

        profileImage:
          "$user.profileImage.url",

        rating: 1,

        totalReview: 1,

        experience: 1,

        availability: 1,

        trusted: 1,

        topRated: 1,

        completedJobs: 1,

        responseTime: 1,

        locality:
          "$location.locality",

        state: "$state.name",

        district:
          "$district.name",

        city: "$city.name",

        location: 1,

        distance: 1,

        categoryName:
          "$category.name",

        categoryPrice: 1,
      },
    });

    // =====================================================
    // PAGINATION + TOTAL COUNT
    // =====================================================

    pipeline.push({
      $facet: {
        providers: [
          {
            $skip: skip,
          },

          {
            $limit: limit,
          },
        ],

        totalCount: [
          {
            $count: "total",
          },
        ],
      },
    });

    // =====================================================
    // EXECUTE PIPELINE
    // =====================================================

    const result =
      await providerModel.aggregate(
        pipeline,
      );

    const providers =
      result[0]?.providers || [];

    const totalProviders =
      result[0]?.totalCount?.[0]?.total || 0;

    // =====================================================
    // NO PROVIDERS
    // =====================================================

    if (totalProviders === 0) {
      return res.status(200).json({
        success: true,

        message:
          "No providers found nearby",

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

    // =====================================================
    // PAGINATION
    // =====================================================

    const totalPages = Math.ceil(
      totalProviders / limit,
    );

    const hasMore =
      page < totalPages;

    // =====================================================
    // RESPONSE
    // =====================================================

    return res.status(200).json({
      success: true,

      message:
        "Nearby providers found",

      providers,

      pagination: {
        page,
        limit,
        total: totalProviders,
        totalPages,
        hasMore,
      },
    });
  } catch (err) {
    console.error(
      "Nearby provider error:",
      err,
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error",
    });
  }
}

async function recommendedProviders(req, res) {
  try {
    const {
      rating,
      availability,
      trusted,
      experience,
      slug,
      minPrice,
      maxPrice,
      sort1,
      sort2,
      sort3,
    } = req.query;

    // =====================================================
    // PAGINATION
    // =====================================================

    const page = Math.max(Number(req.query.page) || 1, 1);

    const limit = Math.min(Math.max(Number(req.query.limit) || 6, 1), 50);

    const skip = (page - 1) * limit;

    // =====================================================
    // SORT OPTIONS
    // =====================================================

    const sortOptions = [sort1, sort2, sort3].filter(Boolean);

    // =====================================================
    // FILTER
    // =====================================================

    const filter = {
      status: "approved",
      verifiedByAdmin: true,
    };

    let categoryId = null;

    // =====================================================
    // RATING FILTER
    // =====================================================

    if (rating !== undefined) {
      const ratingValue = Number(rating);

      if (Number.isNaN(ratingValue)) {
        return res.status(400).json({
          success: false,
          message: "Invalid rating.",
        });
      }

      filter.rating = {
        $gte: ratingValue,
      };
    }

    // =====================================================
    // AVAILABILITY FILTER
    // =====================================================

    if (availability !== undefined) {
      if (availability !== "true" && availability !== "false") {
        return res.status(400).json({
          success: false,
          message: "Invalid availability value.",
        });
      }

      filter.availability = availability === "true";
    }

    // =====================================================
    // TRUSTED FILTER
    // =====================================================

    if (trusted !== undefined) {
      if (trusted !== "true" && trusted !== "false") {
        return res.status(400).json({
          success: false,
          message: "Invalid trusted value.",
        });
      }

      filter.trusted = trusted === "true";
    }

    // =====================================================
    // EXPERIENCE FILTER
    // =====================================================

    if (experience !== undefined) {
      const experienceValue = Number(experience);

      if (Number.isNaN(experienceValue)) {
        return res.status(400).json({
          success: false,
          message: "Invalid experience.",
        });
      }

      filter.experience = {
        $gte: experienceValue,
      };
    }

    // =====================================================
    // CATEGORY + PRICE FILTER
    // =====================================================

    if (slug) {
      const category = await categoryModel.findOne({
        slug,
      });

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found.",
        });
      }

      categoryId = category._id;

      // -----------------------------------------------
      // PRICE RANGE
      // -----------------------------------------------

      if (minPrice !== undefined || maxPrice !== undefined) {
        const priceFilter = {};

        if (minPrice !== undefined) {
          const min = Number(minPrice);

          if (Number.isNaN(min)) {
            return res.status(400).json({
              success: false,
              message: "Invalid minPrice.",
            });
          }

          priceFilter.$gte = min;
        }

        if (maxPrice !== undefined) {
          const max = Number(maxPrice);

          if (Number.isNaN(max)) {
            return res.status(400).json({
              success: false,
              message: "Invalid maxPrice.",
            });
          }

          priceFilter.$lte = max;
        }

        filter.categories = {
          $elemMatch: {
            category: categoryId,
            "pricing.price": priceFilter,
          },
        };
      } else {
        filter["categories.category"] = categoryId;
      }
    }

    // =====================================================
    // SORT HELPER
    // =====================================================

    function getSortField(sortOption) {
      switch (sortOption) {
        case "rating-high":
          return {
            field: "rating",
            order: -1,
          };

        case "rating-low":
          return {
            field: "rating",
            order: 1,
          };

        case "experience-high":
          return {
            field: "experience",
            order: -1,
          };

        case "experience-low":
          return {
            field: "experience",
            order: 1,
          };

        case "price-low":
          return {
            field: "categoryPrice",
            order: 1,
          };

        case "price-high":
          return {
            field: "categoryPrice",
            order: -1,
          };

        default:
          return null;
      }
    }

    // =====================================================
    // BUILD SORT
    // =====================================================

    const sort = {};
    const usedSortFields = new Set();

    for (const sortOption of sortOptions) {
      const sortField = getSortField(sortOption);

      // Invalid sort
      if (!sortField) {
        return res.status(400).json({
          success: false,
          message: `Invalid sort option: ${sortOption}`,
        });
      }

      // Same field cannot be sorted twice
      if (usedSortFields.has(sortField.field)) {
        return res.status(400).json({
          success: false,
          message: `Cannot sort ${sortField.field} multiple times.`,
        });
      }

      usedSortFields.add(sortField.field);

      sort[sortField.field] = sortField.order;
    }

    // =====================================================
    // CHECK PRICE SORT
    // =====================================================

    const hasPriceSort = sortOptions.some(
      (sortOption) => sortOption === "price-low" || sortOption === "price-high",
    );

    if (hasPriceSort && !categoryId) {
      return res.status(400).json({
        success: false,
        message: "Category is required for price sorting.",
      });
    }

    // =====================================================
    // BASE PIPELINE
    // =====================================================

    const pipeline = [
      {
        $match: filter,
      },
    ];

    // =====================================================
    // SELECTED CATEGORY
    // =====================================================

    if (categoryId) {
      pipeline.push({
        $set: {
          selectedCategory: {
            $arrayElemAt: [
              {
                $filter: {
                  input: "$categories",
                  as: "category",
                  cond: {
                    $eq: ["$$category.category", categoryId],
                  },
                },
              },
              0,
            ],
          },
        },
      });
    }

    // =====================================================
    // CATEGORY PRICE
    // =====================================================

    if (hasPriceSort && categoryId) {
      pipeline.push({
        $set: {
          categoryPrice: "$selectedCategory.pricing.price",
        },
      });
    }

    // =====================================================
    // SORT
    // =====================================================

    if (Object.keys(sort).length > 0) {
      pipeline.push({
        $sort: sort,
      });
    }

    // =====================================================
    // FACET
    // =====================================================

    pipeline.push({
      $facet: {
        // -----------------------------------------------
        // PROVIDERS
        // -----------------------------------------------

        providers: [
          {
            $skip: skip,
          },

          {
            $limit: limit,
          },

          // =============================================
          // USER LOOKUP
          // =============================================

          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "user",
            },
          },

          {
            $unwind: "$user",
          },

          // =============================================
          // STATE LOOKUP
          // =============================================

          {
            $lookup: {
              from: "states",
              localField: "location.state",
              foreignField: "_id",
              as: "state",
            },
          },

          {
            $unwind: "$state",
          },

          // =============================================
          // DISTRICT LOOKUP
          // =============================================

          {
            $lookup: {
              from: "districts",
              localField: "location.district",
              foreignField: "_id",
              as: "district",
            },
          },

          {
            $unwind: "$district",
          },

          // =============================================
          // CITY LOOKUP
          // =============================================

          {
            $lookup: {
              from: "cities",
              localField: "location.city",
              foreignField: "_id",
              as: "city",
            },
          },

          {
            $unwind: "$city",
          },

          // =============================================
          // CATEGORY LOOKUP
          // =============================================

          ...(categoryId
            ? [
                {
                  $lookup: {
                    from: "categories",
                    localField: "selectedCategory.category",
                    foreignField: "_id",
                    as: "category",
                  },
                },

                {
                  $unwind: "$category",
                },
              ]
            : []),

          // =============================================
          // FINAL PROJECT
          // =============================================

          {
            $project: {
              _id: 1,
              providerId: 1,

              providerName: "$user.fullname",

              profileImage: "$user.profileImage.url",

              state: "$state.name",

              district: "$district.name",

              city: "$city.name",

              locality: "$location.locality",

              rating: 1,

              totalReview: 1,

              experience: 1,

              availability: 1,

              trusted: 1,

              topRated: 1,

              ...(categoryId
                ? {
                    categoryName: "$category.name",

                    categoryPrice: 1,
                  }
                : {}),
            },
          },
        ],

        // -----------------------------------------------
        // TOTAL COUNT
        // -----------------------------------------------

        totalCount: [
          {
            $count: "total",
          },
        ],
      },
    });

    // =====================================================
    // EXECUTE AGGREGATION
    // =====================================================

    const result = await providerModel.aggregate(pipeline);

    // =====================================================
    // RESULT
    // =====================================================

    const providers = result[0]?.providers || [];

    const total = result[0]?.totalCount?.[0]?.total || 0;

    // =====================================================
    // NO PROVIDERS
    // =====================================================

    if (total === 0) {
      return res.status(404).json({
        success: false,
        message: "Provider not found.",
        providers: [],
      });
    }

    // =====================================================
    // PAGINATION
    // =====================================================

    const totalPages = Math.ceil(total / limit);

    const hasMore = page < totalPages;

    // =====================================================
    // RESPONSE
    // =====================================================

    return res.status(200).json({
      success: true,

      message: "Providers fetched successfully.",

      providers,

      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore,
      },
    });
  } catch (err) {
    console.error("Recommended providers error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}
//   try {
//     const limit = Number(req.query.limit) || 6;
//     const page = Number(req.query.page) || 1;
//     const skip = (page - 1) * limit;
//     const { slug } = req.query;

//     let categoryId = null;

//     if (slug) {
//       const category = await categoryModel.findOne({ slug });

//       if (!category) {
//         return res.status(404).json({
//           success: false,
//           message: "Category not found",
//         });
//       }

//       categoryId = category._id;
//     }

//     const pipeline = [
//       {
//         $match: {
//           status: "approved",
//           verifiedByAdmin: true,
//           availability: true,
//           rating: { $gte: 4 },
//           totalReview: { $gte: 10 },
//         },
//       },
//     ];

//     if (categoryId) {
//       pipeline.push(...buildCategoryProviderPipeline(categoryId));
//     } else {
//       pipeline.push(...buildHomeProviderPipeline());
//     }

//     pipeline.push(
//       {
//         $sort: {
//           rating: -1,
//           totalReview: -1,
//           completedJobs: -1,
//         },
//       },
//       {
//         $facet: {
//           providers: [
//             {
//               $skip: skip,
//             },
//             {
//               $limit: limit,
//             },
//           ],
//           totalCount: [
//             {
//               $count: "total",
//             },
//           ],
//         },
//       },
//     );

//     const result = await providerModel.aggregate(pipeline);
// if (result.length === 0) {
//       return res.status(200).json({
//         message: "No recommended providers found",
//         providers: [],
//       });
//     }
//     const providers = result[0]?.providers || [];

//     const totalProviders = result[0]?.totalCount?.[0]?.total || 0;

//     return res.status(200).json({
//       success: true,
//       providers,
//       pagination: {
//         page,
//         limit,
//         total: totalProviders,
//         totalPages: Math.ceil(totalProviders / limit),
//         hasMore: page * limit < totalProviders,
//       },
//     });
//   } catch (err) {
//     console.error("Recommended provider error:", err);

//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
async function availabilityProvider(req, res) {
  try {
    const { availability } = req.body;
    const providerId = req.user.id;
    const provider = await providerModel.findOne({ userId: providerId });

    if (!provider) {
      return res
        .status(404)
        .json({ message: "Provider profile not found", provider: [] });
    }
    if (availability === undefined) {
      return res.status(400).json({ message: "availability is required" });
    }
    provider.availability = availability;
    await provider.save();
    return res.status(200).json({
      message: "provider availability updated successfully",
      provider,
    });
  } catch (err) {
    console.error("availability Provider error:", err);
    return res.status(500).json({ message: "Internal server error" });
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

module.exports = {
  providerProfileCreate,
  getProvider,
  updateProvider,
  getProviders,
  getOneProviderDetails,
  uploadProviderDocuments,
  getSelectProviderByCategory,
  nearbySearchLocation,
  recommendedProviders,
  availabilityProvider,
};
