// hooks/categoryHooks.js

import { useMutation, useQuery } from "@tanstack/react-query";
import { createCategory, getAllCategories } from "../services/categoryService";
import { useNavigate } from "react-router-dom";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
};

export const useCategoryCreate =  ()=>{
 const navigate = useNavigate()
  const createCategoryMutation = useMutation({
    mutationFn:createCategory,
    onSuccess:()=>{
          navigate('/admin/categories')
    },
    onError:(err)=>{
      console.error("Create Category Error: ",err);
      
    }
  })
  return {createCategoryMutation}
}