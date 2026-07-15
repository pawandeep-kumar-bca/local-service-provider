// services/categoryService.js

import api from "./api";

export const getAllCategories = async (params) => {
  const response = await api.get("/categories",{params});
  return response.data;
};

export const createCategory = async (formData)=>{
  const response = await api.post('/categories',formData)
  return response.data
}