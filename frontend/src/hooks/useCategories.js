// hooks/categoryHooks.js

import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  createCategory,
  getAllCategories,
  getAllCategoriesForTabs,
  getAllPopularCategories,
} from "../services/categoryService";
import { useNavigate } from "react-router-dom";
export const useCategoryCreate = () => {
  const navigate = useNavigate();
  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      navigate("/admin/categories");
    },
    onError: (err) => {
      console.error("Create Category Error: ", err);
    },
  });
  return { createCategoryMutation };
};

export const useCategories = (params = {}) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => getAllCategories(params),
    enabled: true,
  });
};

export const useCategoriesPopular = () => {
  return useInfiniteQuery({
    queryKey: ["popular-categories"],

    queryFn: ({ pageParam = 1 }) =>
      getAllPopularCategories({ page: pageParam, limit: 5 }),

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
    enabled: true,
  });
};
