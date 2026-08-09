function getFacetResult(result) {
  const providers = result[0]?.providers || [];

  const total = result[0]?.totalCount?.[0]?.total || 0;

  return {
    providers,
    total,
  };
}

module.exports = {
  getFacetResult,
};
