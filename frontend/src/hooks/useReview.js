import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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
      queryClient.invalidateQueries({
        queryKey: ["user-reviews"],
      });

      toast.success(
        data?.message || "Review created successfully",
      );
    },

    onError: (err) => {
      console.error("Create review error:", err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to create review",
      );
    },
  });

  const updateReviewMutation = useMutation({
    mutationFn: editReview,

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-reviews"],
      });

      if (variables?.providerId && variables?.categoryId) {
        queryClient.invalidateQueries({
          queryKey: [
            "provider-reviews",
            variables.providerId,
            variables.categoryId,
          ],
        });
      }

      toast.success(
        data?.message || "Review updated successfully",
      );
    },

    onError: (err) => {
      console.error("Update review error:", err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to update review",
      );
    },
  });

  const deleteReviewMutation = useMutation({
    mutationFn: deleteReview,

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["user-reviews"],
      });

      toast.success(
        data?.message || "Review deleted successfully",
      );
    },

    onError: (err) => {
      console.error("Delete review error:", err);

      toast.error(
        err?.response?.data?.message ||
          "Failed to delete review",
      );
    },
  });

  return {
    createReviewMutation,
    updateReviewMutation,
    deleteReviewMutation,
  };
};

export const useGetAllUserReviews = () => {
  return useQuery({
    queryKey: ["user-reviews"],
    queryFn: getAllUserReviews,
  });
};

export const useProviderReviews = ({
  providerId,
  categoryId,
} = {}) => {
  return useQuery({
    queryKey: [
      "provider-reviews",
      providerId,
      categoryId,
    ],

    queryFn: () =>
      getProviderReviews({
        providerId,
        categoryId,
      }),

    enabled: !!providerId && !!categoryId,
  });
};