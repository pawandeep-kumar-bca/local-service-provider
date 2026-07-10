import api from "./api";

export const getAllProviders = async (params) => {
  const response = await api.get("/providers",{params});
  return response.data;
};

export const getProviderById = async (providerId) => {
  const response = await api.get(`/providers/${providerId}`);
  return response.data;
};


export const createProvider = async () =>{
        const response = await api.post('/providers/')

        return response.data
}