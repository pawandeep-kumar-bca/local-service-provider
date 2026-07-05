import api from "./api";

export const getAllProviders = async () => {
  const response = await api.get("/providers");
  return response.data;
};

export const getProviderById = async (providerId) => {
  const response = await api.get(`/providers/${providerId}`);
  return response.data;
};