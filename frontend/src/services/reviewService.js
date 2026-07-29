import api from "./api";

export const createReviews = async (payload) => {
  const response = await api.post("/reviews/create-review", payload);
  return response.data;
};


