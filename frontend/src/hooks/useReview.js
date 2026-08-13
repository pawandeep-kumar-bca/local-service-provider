import { useMutation, useQuery } from "@tanstack/react-query";
import { createReviews, editReview, getAllUserReviews, getProviderReviews } from "../services/reviewService";
import { toast } from "react-toastify";

export const useReview = () => {
  const createReviewMutation = useMutation({
    mutationFn: createReviews,
    onSuccess:(data)=>{
      toast.success(data?.message)
    },
    onError: (err) => {
      console.error("create review error:", err);
      toast.error(err?.response?.data?.message)
    },
  });
  const updateReviewMutation = useMutation({
    mutationFn:editReview,
    onSuccess:(data)=>{
      toast.success(data?.message)
    },
    onError:(err)=>{
      console.error('update review error:',err)
      toast.error(err?.response?.data?.message)
    }
  })
  return { createReviewMutation,updateReviewMutation };
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
export const useProviderReviews = ({ providerId, categoryId }) => {
  return useQuery({
    queryKey: ["provider-reviews", providerId, categoryId],
    queryFn: () =>
      getProviderReviews({
        providerId,
        categoryId,
      }),
    enabled: !!providerId && !!categoryId,
  });
};