// services/categoryService.js

import api from "./api";

export const getAllCategories = async () => {
  const response = await api.get("/categories");
  return response.data;
};

export const createCategory = async (formData)=>{
  const response = await api.post('/categories',formData)
  return response.data
}