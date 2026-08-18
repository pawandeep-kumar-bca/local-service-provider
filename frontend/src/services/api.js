import axios from "axios";
import { refreshAccessToken } from "./authService";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");

  if (auth?.accessToken) {
    config.headers.Authorization = `Bearer ${auth.accessToken}`;
  }

  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const data = await refreshAccessToken();

        const newAccessToken = data.accessToken;

        const auth = JSON.parse(localStorage.getItem("auth") || "{}");

        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...auth,
            accessToken: newAccessToken,
          }),
        );

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("auth");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
