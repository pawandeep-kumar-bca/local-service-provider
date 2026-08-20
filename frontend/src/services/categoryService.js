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