// hooks/categoryHooks.js

import { useMutation, useQuery } from "@tanstack/react-query";
import { createCategory, getAllCategories } from "../services/categoryService";
import { useNavigate } from "react-router-dom";

export const useCategories = (params = {}) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => getAllCategories(params),
     enabled: true,  
  });
};

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
