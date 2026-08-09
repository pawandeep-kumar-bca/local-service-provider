function addSelectedCategoryStage(pipeline, categoryId) {
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

    return;
  }

  // Category select nahi hai
  // First category select karo
  pipeline.push({
    $set: {
      selectedCategory: {
        $arrayElemAt: ["$categories", 0],
      },
    },
  });
}

function addCategoryPriceStage(pipeline, categoryId) {
  if (categoryId) {
    pipeline.push({
      $set: {
        categoryPrice: "$selectedCategory.pricing.price",
      },
    });

    return;
  }

  pipeline.push({
    $set: {
      categoryPrice: {
        $arrayElemAt: ["$categories.pricing.price", 0],
      },
    },
  });
}

function addSortStage(pipeline, sortObject) {
  if (Object.keys(sortObject).length === 0) {
    return;
  }

  pipeline.push({
    $sort: sortObject,
  });
}
function addProviderProjectStage(pipeline, { includeDistance = false } = {}) {
  const project = {
    _id: 1,
    providerId: 1,

    providerName: "$user.fullname",
    profileImage: "$user.profileImage.url",

    rating: 1,
    totalReview: 1,
    experience: 1,
    verifiedByAdmin: 1,
    completedJobs: 1,
    responseTime: 1,

    availability: 1,
    trusted: 1,
    topRated: 1,

    locality: "$location.locality",

    state: "$state.name",
    district: "$district.name",
    city: "$city.name",

    location: 1,

   

    category: {
      id: "$selectedCategory.category",

      name: "$category.name",

      pricing: {
        priceType: "$selectedCategory.pricing.priceType",

        price: "$selectedCategory.pricing.price",
      },
    },
  };

  if (includeDistance) {
    project.distance = 1;
  }

  pipeline.push({
    $project: project,
  });
}
function addPaginationFacetStage(pipeline, skip, limit) {
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
}
function addProviderLookups(pipeline, categoryId = null) {
  // USER
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

    // STATE
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

    // DISTRICT
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

    // CITY
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

    // SELECTED CATEGORY
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
  );
}
module.exports = {
  addSelectedCategoryStage,
  addCategoryPriceStage,
  addSortStage,
  addProviderLookups,
  addProviderProjectStage,
  addPaginationFacetStage,
};
