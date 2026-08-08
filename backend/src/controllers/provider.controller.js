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
    let { lat, lng, radius, categoryId } = req.query;

    if (lat === undefined || lng === undefined || radius === undefined) {
      return res.status(400).json({
        message: "lat, lng and radius are required",
      });
    }
    if (categoryId && !mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        message: "Invalid categoryId",
      });
    }

    lat = Number(lat);
    lng = Number(lng);
    radius = Number(radius);

    const distance = radius * 1000;
    const pipeline = [
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [lng, lat],
          },
          distanceField: "distance",
          maxDistance: distance,
          spherical: true,
          query: {
            status: "approved",
            verifiedByAdmin: true,
            availability: true,
          },
        },
      },
      {
        $addFields: {
          distanceInKm: {
            $round: [{ $divide: ["$distance", 1000] }, 1],
          },
        },
      },
    ];

    if (categoryId) {
      pipeline.push(...buildCategoryProviderPipeline(categoryId));
    } else {
      pipeline.push(...buildHomeProviderPipeline());
    }

    pipeline.push({
      $sort: {
        distanceInKm: 1,
        rating: -1,
        totalReview: -1,
      },
    });

    const providers = await providerModel.aggregate(pipeline);
    if (providers.length === 0) {
      return res.status(200).json({
        message: "No providers found nearby",
        providers: [],
      });
    }

    return res.status(200).json({
      message: "Nearby providers found",
      totalProviders: providers.length,
      providers,
    });
  } catch (err) {
    console.error("Nearby provider error:", err);

    return res.status(500).json({
      message: "Internal server error",
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
async function recommendedProviders(req, res) {
  try {
    let {
      rating,
      availability,
      trusted,
      experience,
      slug,
      minPrice,
      maxPrice,
      sortBy,
    } = req.query;

    // Always required filters
    const filter = {
      status: "approved",
      verifiedByAdmin: true,
    };
    const sort = {};
    let categoryId = null;
    // Rating filter
    if (rating !== undefined) {
      rating = Number(rating);

      filter.rating = {
        $gte: rating,
      };
    }
    if (sortBy === "rating-high") {
      sort.rating = -1;
    }
    if (sortBy === "rating-low") {
      sort.rating = 1;
    }
    if (sortBy === "experience-high") {
      sort.experience = -1;
    }
    if (sortBy === "experience-low") {
      sort.experience = 1;
    }

    // Availability filter
    if (availability !== undefined) {
      availability = availability === "true";

      filter.availability = availability;
    }

    // Trusted filter
    if (trusted !== undefined) {
      trusted = trusted === "true";

      filter.trusted = trusted;
    }

    // Experience filter
    if (experience !== undefined) {
      experience = Number(experience);

      filter.experience = {
        $gte: experience,
      };
    }

    // Category filter
    if (slug) {
      const category = await categoryModel.findOne({ slug });

      if (!category) {
        return res.status(404).json({
          message: "Category not found",
        });
      }

      categoryId = category._id;

      if (minPrice !== undefined || maxPrice !== undefined) {
        const priceFilter = {};

        if (minPrice !== undefined) {
          priceFilter.$gte = Number(minPrice);
        }

        if (maxPrice !== undefined) {
          priceFilter.$lte = Number(maxPrice);
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

    console.log("Final Filter:", filter);
    console.log("Final sort:", sort);
    const pipeline = [
      {
        $match: filter,
      },
    ];

    if ((sortBy === "price-low" || sortBy === "price-high") && categoryId) {
      pipeline.push({
        $set: {
          categoryPrice: {
            $arrayElemAt: [
              {
                $map: {
                  input: {
                    $filter: {
                      input: "$categories",
                      as: "category",
                      cond: {
                        $eq: ["$$category.category", categoryId],
                      },
                    },
                  },
                  as: "category",
                  in: "$$category.pricing.price",
                },
              },
            ],
          },
        },
      });
    }

    if (sortBy === "price-low") {
      pipeline.push({
        $sort: {
          categoryPrice: 1,
        },
      });
    }

    if (sortBy === "price-high") {
      pipeline.push({
        $sort: {
          categoryPrice: -1,
        },
      });
    }
    if (Object.keys(sort).length > 0) {
      pipeline.push({
        $sort: sort,
      });
    }
    console.log(pipeline);

    const providers = await providerModel.aggregate(pipeline);

    if (providers.length === 0) {
      return res.status(404).json({
        message: "Provider not found",
        providers: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Providers fetched successfully",
      totalProviders: providers.length,
      providers,
    });
  } catch (err) {
    console.error("Recommended providers error:", err);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

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
