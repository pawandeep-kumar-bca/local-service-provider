import {
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  createCategory,
  getAllCategories,
  getAllCategoriesForTabs,
  getAllPopularCategories,
} from "../services/categoryService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCategoryCreate = () => {
  const navigate = useNavigate();

  const createCategoryMutation = useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      toast.success("Category created successfully");
      navigate("/admin/categories");
    },

    onError: (err) => {
      console.error("Create Category Error:", err);

      toast.error(
        err?.response?.data?.message || "Failed to create category",
      );
    },
  });

  return { createCategoryMutation };
};

export const useCategories = (params = {}) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => getAllCategories(params),
  });
};

export const useCategoriesPopular = () => {
  return useInfiniteQuery({
    queryKey: ["popular-categories"],

    queryFn: ({ pageParam = 1 }) =>
      getAllPopularCategories({
        page: pageParam,
        limit: 5,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage.pagination.hasMore
        ? lastPage.pagination.page + 1
        : undefined;
    },
  });
};

export const useCategoriesTabs = () => {
  return useQuery({
    queryKey: ["categories-tabs"],
    queryFn: getAllCategoriesForTabs,
  });
};