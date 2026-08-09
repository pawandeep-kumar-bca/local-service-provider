const SORT_FIELDS = {
  "rating-high": {
    field: "rating",
    order: -1,
  },

  "rating-low": {
    field: "rating",
    order: 1,
  },

  "experience-high": {
    field: "experience",
    order: -1,
  },

  "experience-low": {
    field: "experience",
    order: 1,
  },

  "price-high": {
    field: "categoryPrice",
    order: -1,
  },

  "price-low": {
    field: "categoryPrice",
    order: 1,
  },

  "distance-near": {
    field: "distance",
    order: 1,
  },

  "distance-far": {
    field: "distance",
    order: -1,
  },
};

function buildProviderSort(sort) {
  const sortOptions = Array.isArray(sort)
    ? sort
    : [sort].filter(Boolean);

  const sortObject = {};
  const usedFields = new Set();

  for (const option of sortOptions) {
    const sortField = SORT_FIELDS[option];

    if (!sortField) {
      throw new Error(
        `Invalid sort option: ${option}`,
      );
    }

    if (
      usedFields.has(sortField.field)
    ) {
      throw new Error(
        `Cannot sort ${sortField.field} multiple times`,
      );
    }

    usedFields.add(sortField.field);

    sortObject[sortField.field] =
      sortField.order;
  }

  return {
    sortOptions,
    sortObject,

    hasPriceSort: sortOptions.some(
      (option) =>
        option === "price-low" ||
        option === "price-high",
    ),

    hasDistanceSort: sortOptions.some(
      (option) =>
        option === "distance-near" ||
        option === "distance-far",
    ),
  };
}

module.exports = {
  buildProviderSort,
};