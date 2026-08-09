function getPagination(query) {
  const page = Math.max(
    Number(query.page) || 1,
    1,
  );

  const limit = Math.min(
    Math.max(
      Number(query.limit) || 6,
      1,
    ),
    50,
  );

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
}

function buildPaginationResponse({
  page,
  limit,
  total,
}) {
  const totalPages =
    Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    totalPages,
    hasMore: page < totalPages,
  };
}

module.exports = {
  getPagination,
  buildPaginationResponse,
};