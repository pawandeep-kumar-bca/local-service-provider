const mongoose = require("mongoose");

const commonPipeline = [
  {
    $lookup: {
      from: "users",
      let: {
        userId: "$userId",
      },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$_id", "$$userId"],
            },
          },
        },
        {
          $project: {
            fullname: 1,
            "profileImage.url": 1,
          },
        },
      ],
      as: "user",
    },
  },
  {
    $unwind: "$user",
  },

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
];

const buildHomeProviderPipeline = () => [
  ...commonPipeline,

  {
    $project: {
      _id: 1,
      providerId: 1,

      fullName: "$user.fullname",
      profileImage: "$user.profileImage.url",

      verified: "$verifiedByAdmin",
      availability: 1,

      rating: 1,
      totalReview: 1,
      completedJobs: 1,
      experience: 1,
      responseTime: 1,

      topRated: 1,
      trusted: 1,

      distanceInKm: 1,

      locality: "$location.locality",
      city: "$city.name",
      district: "$district.name",
      state: "$state.name",

      categories: "$categories",

      createdAt: 1,
    },
  },
];
const buildCategoryProviderPipeline = (categoryId) => [
  {
    $unwind: "$categories",
  },

  {
    $match: {
      "categories.category": new mongoose.Types.ObjectId(categoryId),
    },
  },

  ...commonPipeline,

  {
    $lookup: {
      from: "categories",
      localField: "categories.category",
      foreignField: "_id",
      as: "category",
    },
  },

  {
    $unwind: "$category",
  },

  {
    $project: {
      _id: 1,
      providerId: 1,

      fullName: "$user.fullname",
      profileImage: "$user.profileImage.url",

      verified: "$verifiedByAdmin",
      availability: 1,

      rating: 1,
      totalReview: 1,
      completedJobs: 1,
      experience: 1,
      responseTime: 1,

      topRated: 1,
      trusted: 1,

      distanceInKm: 1,

      locality: "$location.locality",
      city: "$city.name",
      district: "$district.name",
      state: "$state.name",

      category: "$category.name",

      pricing: {
        priceType: "$categories.pricing.priceType",
        price: "$categories.pricing.price",
      },

      createdAt: 1,
    },
  },
];
module.exports = {
  buildHomeProviderPipeline,
  buildCategoryProviderPipeline,
};
