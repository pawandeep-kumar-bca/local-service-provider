import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createCategory,
  createProviderCategory,
  deleteProviderCategory,
  getAllCategories,
  getAllCategoriesForProvider,
  getAllCategoriesForTabs,
  getAllOwnCategoriesForProvider,
  getAllPopularCategories,
} from "../services/categoryService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCategoryCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient()
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
   
 const createCategoryForProviderMutation = useMutation({
  mutationFn: createProviderCategory,
  
  onSuccess: (data) => {
    toast.success(data?.message);
    navigate("/provider/my-services");
    queryClient.invalidateQueries({
      queryKey:['get-own-provider-categories']
    })
  },

  onError: (err) => {
    toast.error(
      err?.response?.data?.message || "Failed to create service"
    );

    console.error("Create Category for Provider Error:", err);
  },
});
  return { createCategoryMutation,createCategoryForProviderMutation };
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

export const useGetCategoriesForProvider= ()=>{
  return useQuery({
    queryKey:['get-provider-categories'],
    queryFn:getAllCategoriesForProvider
  })
}

export const useGetOwnCategoriesForProvider= ()=>{
  return useQuery({
    queryKey:['get-own-provider-categories'],
    queryFn:getAllOwnCategoriesForProvider
  })
}

export const useProviderDeleteCategory = ()=>{
  return useMutation({
    mutationFn:(categoryId)=>deleteProviderCategory(categoryId)
  })
}