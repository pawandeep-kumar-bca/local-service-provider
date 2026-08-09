function addSelectedCategoryStage(
  pipeline,
  categoryId,
) {
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

function addCategoryPriceStage(
  pipeline,
  categoryId,
  required = false,
) {
  if (!categoryId || !required) {
    return;
  }

  pipeline.push({
    $set: {
      categoryPrice:
        "$selectedCategory.pricing.price",
    },
  });
}

function addSortStage(
  pipeline,
  sortObject,
) {
  if (
    Object.keys(sortObject).length === 0
  ) {
    return;
  }

  pipeline.push({
    $sort: sortObject,
  });
}

module.exports = {
  addSelectedCategoryStage,
  addCategoryPriceStage,
  addSortStage,
};