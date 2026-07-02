import api from "./api";

export const getAllProviders = async () => {
  const response = await api.get("/providers");
  return response.data;
};