import axios from "axios";

const refreshApi = axios.create({
   baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

export const refreshAccessToken = async () => {
  const response = await refreshApi.post("/auth/refresh-token");

  return response.data;
};