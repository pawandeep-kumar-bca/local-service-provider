function buildProviderFilter({ rating, experience, availability, trusted }) {
  const filter = {
    status: "approved",
    verifiedByAdmin: true,
  };

  if (rating !== undefined && rating !== "") {
    rating = Number(rating);

    if (Number.isNaN(rating) || rating < 0 || rating > 5) {
      throw new Error("Invalid rating");
    }

    filter.rating = {
      $gte: rating,
    };
  }

  if (experience !== undefined && experience !== "") {
    experience = Number(experience);

    if (Number.isNaN(experience) || experience < 0) {
      throw new Error("Invalid experience");
    }

    filter.experience = {
      $gte: experience,
    };
  }

  if (availability !== undefined && availability !== "") {
    if (availability !== "true" && availability !== "false") {
      throw new Error("Invalid availability");
    }

    filter.availability = availability === "true";
  }

  if (trusted !== undefined && trusted !== "") {
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
