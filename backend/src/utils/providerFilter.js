function buildProviderFilter({ rating, experience, availability, trusted }) {
  const filter = {
    status: "approved",
    verifiedByAdmin: true,
  };

  if (rating !== undefined) {
    const value = Number(rating);

    if (Number.isNaN(value) || value < 0 || value > 5) {
      throw new Error("Rating must be between 0 and 5");
    }

    filter.rating = {
      $gte: value,
    };
  }

  if (experience !== undefined) {
    const value = Number(experience);

    if (Number.isNaN(value) || value < 0) {
      throw new Error("Experience must be a valid number");
    }

    filter.experience = {
      $gte: value,
    };
  }

  if (availability !== undefined) {
    if (availability !== "true" && availability !== "false") {
      throw new Error("Invalid availability");
    }

    filter.availability = availability === "true";
  }

  if (trusted !== undefined) {
    if (trusted !== "true" && trusted !== "false") {
      throw new Error("Invalid trusted");
    }

    filter.trusted = trusted === "true";
  }

  return filter;
}

module.exports = {
  buildProviderFilter,
};
