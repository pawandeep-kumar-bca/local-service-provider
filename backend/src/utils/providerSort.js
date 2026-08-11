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
  const usedSortFields = new Set();

  let priceSortOrder = null;

  for (const sortOption of sortOptions) {
    const sortField = SORT_FIELDS[sortOption];

    if (!sortField) {
      throw new Error(`Invalid sort option: ${sortOption}`);
    }

    // Same field ko do baar sort nahi kar sakte
    if (usedSortFields.has(sortField.field)) {
      throw new Error(
        `Cannot sort ${sortField.field} multiple times`
      );
    }

    usedSortFields.add(sortField.field);

    sortObject[sortField.field] = sortField.order;

    // Price sorting detect
    if (
      sortOption === "price-low" ||
      sortOption === "price-high"
    ) {
      priceSortOrder = sortField.order;
    }
  }

  return {
    sortObject,
    priceSortOrder,
  };
}

module.exports = {
  buildProviderSort,
};