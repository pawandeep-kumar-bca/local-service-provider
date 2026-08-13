import api from "./api";

export const createReviews = async (payload) => {
  const response = await api.post("/reviews/user/create-review", payload);
  return response.data;
};

export const getAllUserReviews = async () => {
  const response = await api.get("/reviews/user/review-history");
  return response.data;
};
export const getProviderReviews = async ({ providerId, categoryId }) => {
  const response = await api.get(`/reviews/provider/${providerId}/reviews`, {
    params: {
      categoryId,
    },
  });

  return response.data;
};

export const editReview =async ({data,reviewId})=>{
  const response = await api.patch(`/users/${reviewId}/edit-review`,data)
  return response.data
}