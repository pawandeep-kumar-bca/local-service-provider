import { useMutation, useQuery } from "@tanstack/react-query";
import { createReviews, getAllUserReviews } from "../services/reviewService";

export const useReview = () => {
  const createReviewMutation = useMutation({
    mutationFn: createReviews,
    onError: (err) => {
      console.error("create review error:", err);
    },
  });
  return { createReviewMutation };
};

export const useGetAllUserReviews = () => {
  return useQuery({
    queryKey: ["user-reviews"],
    queryFn: getAllUserReviews,
    onError: (err) => {
      console.error("Get all user reviews error:", err);
    },
  });
};
