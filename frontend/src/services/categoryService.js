import api from "./api";

export const createCategory = async (formData) => {
  const response = await api.post("/categories", formData);
  return response.data;
};

export const getAllCategories = async (params) => {
  const response = await api.get("/categories", { params });
  return response.data;
};

export const getAllCategoriesForTabs = async () => {
  const response = await api.get("/categories/tabs");
  return response.data;
};

export const getAllPopularCategories = async ({ page, limit }) => {
  const response = await api.get("/categories/popular", {
    params: {
      page,
      limit,
    },
  });

  return response.data;
};

export const getAllCategoriesForProvider = async ()=>{
  const response = await api.get('/categories/provider-categories')
  return response.data
}
export const createProviderCategory = async (payload) =>{
  const response = await api.post('categories/provider/create-category',payload)
  return response.data
}
export const getAllOwnCategoriesForProvider = async ()=>{
  const response = await api.get('/categories/provider/categories')
  return response.data
}

export const deleteProviderCategory = async (categoryId)=>{
  const response = await api.delete(`/categories/provider/categories/${categoryId}`)
  return response.data
}

export const providerCategoryAvailability = async (data)=>{
  const response = await api.patch(`/categories/provider/categories/${data.categoryId}/availability`,{isAvailable:data.newStatus})
  return response.data
}