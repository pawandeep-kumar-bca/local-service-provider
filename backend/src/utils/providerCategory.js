const mongoose = require("mongoose");

async function getCategoryId(categoryId, categoryModel) {
  if (!categoryId) {
    return null;
  }

  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new Error("Invalid categoryId");
  }

  const category = await categoryModel.findById(categoryId);

  if (!category) {
    throw new Error("Category not found");
  }

  return new mongoose.Types.ObjectId(categoryId);
}

async function getCategoryBySlug(slug, categoryModel) {
  if (!slug) {
    return null;
  }

  const category = await categoryModel.findOne({
    slug,
  });

  if (!category) {
    throw new Error("Category not found");
  }

  return category._id;
}

function buildCategoryFilter({ categoryId, minPrice, maxPrice }) {
  const filter = {};

  // Category selected hai
  if (categoryId) {
    filter["categories.category"] = categoryId;
  }

  // Price filter
  if (minPrice !== undefined || maxPrice !== undefined) {
    const priceFilter = {};

    if (minPrice !== undefined) {
      const min = Number(minPrice);

      if (Number.isNaN(min) || min < 0) {
        throw new Error("Invalid minPrice");
      }

      priceFilter.$gte = min;
    }

    if (maxPrice !== undefined) {
      const max = Number(maxPrice);

      if (Number.isNaN(max) || max < 0) {
        throw new Error("Invalid maxPrice");
      }

      priceFilter.$lte = max;
    }

    // Category selected hai
    if (categoryId) {
      filter.categories = {
        $elemMatch: {
          category: categoryId,
          "pricing.price": priceFilter,
        },
      };
    }

    // Category selected nahi hai
    else {
      filter.categories = {
        $elemMatch: {
          "pricing.price": priceFilter,
        },
      };
    }
  }

  return filter;
}

module.exports = {
  getCategoryId,
  getCategoryBySlug,
  buildCategoryFilter,
};
