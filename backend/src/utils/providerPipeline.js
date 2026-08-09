function addSelectedCategoryStage(pipeline, categoryId) {
  if (!categoryId) {
    return;
  }

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

function addCategoryPriceStage(pipeline, categoryId, required = false) {
  if (!categoryId || !required) {
    return;
  }

  pipeline.push({
    $set: {
      categoryPrice: "$selectedCategory.pricing.price",
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
    availability: 1,
    trusted: 1,
    topRated: 1,

    locality: "$location.locality",

    state: "$state.name",

    district: "$district.name",

    city: "$city.name",

    location: 1,

    categoryName: "$category.name",

    categoryPrice: 1,
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
  );

  // STATE
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

  // DISTRICT
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

  // CITY
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

  // CATEGORY
  if (categoryId) {
    pipeline.push(
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
}
module.exports = {
  addSelectedCategoryStage,
  addCategoryPriceStage,
  addSortStage,
  addProviderLookups,
  addProviderProjectStage,
  addPaginationFacetStage,
};
