import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createReviews,
  deleteReview,
  editReview,
  getAllUserReviews,
  getProviderReviews,
} from "../services/reviewService";
import { toast } from "react-toastify";

export const useReview = () => {
  const queryClient = useQueryClient();
  const createReviewMutation = useMutation({
    mutationFn: createReviews,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      console.error("create review error:", err);
      toast.error(err?.response?.data?.message);
    },
  });
  const updateReviewMutation = useMutation({
    mutationFn: editReview,

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user-reviews"],
      });
      toast.success(data?.message);
    },
    onError: (err) => {
      console.error("update review error:", err);
      toast.error(err?.response?.data?.message);
    },
  });
  const deleteReviewMutation = useMutation({
    mutationFn:deleteReview,
    onSuccess:(data)=>{
      queryClient.invalidateQueries({
        queryKey:["user-reviews"]
      })
      toast.success(data?.message)

    },
    onError:(err)=>{
      toast.error(err?.response?.data?.message)
      console.log('Delete review error:',err);
      
    }
  })
  return { createReviewMutation, updateReviewMutation,deleteReviewMutation };
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

