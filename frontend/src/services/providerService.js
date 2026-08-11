import api from "./api";
const cleanFilters = (filters) => {
  return Object.fromEntries(
    Object.entries(filters).filter(([, value]) => {
      if (value === "") return false;
      if (value === null || value === undefined) return false;

      if (Array.isArray(value) && value.length === 0) {
        return false;
      }

      return true;
    }),
  );
};
export const getAllProviders = async (params) => {
  const response = await api.get("/providers", { params });
  return response.data;
};

export const getProviderById = async (providerId) => {
  const response = await api.get(`/providers/${providerId}`);

  return response.data;
};

export const createProvider = async (formData) => {
  const response = await api.post("/providers", formData);

  return response.data;
};

export const getSelectProviderByCategory = async (slug) => {
  const response = await api.get(`/providers/category/${slug}`);
  return response.data;
};
export const getRecommendedProviders = async (filters) => {
  const params = cleanFilters(filters);
  const response = await api.get("/providers/recommended", {
    params: params,
  });
  return response.data;
};
export const getNearbyProvider = async (filters)=>{
  const params = cleanFilters(filters)
  const response = await api.get('/providers/nearby',{
    params:params
  })
  return response.data
}