import { useMutation } from "@tanstack/react-query";
import { createReviews } from "../services/reviewService";

export const useReview = () => {
  const createReviewMutation = useMutation({
    mutationFn: createReviews,
    onError: (err) => {
      console.error("create review error:", err);
    },
  });
  return { createReviewMutation };
};
