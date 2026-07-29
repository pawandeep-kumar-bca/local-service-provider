import api from "./api";

export const createReviews = async (payload) => {
  const response = await api.post("/reviews/user/create-review", payload);
  return response.data;
};


export const getAllUserReviews = async ()=>{
    const response = await api.get('/reviews/user/review-history')
    return response.data
}