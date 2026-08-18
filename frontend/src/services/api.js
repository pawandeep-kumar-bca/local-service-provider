// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// 🔐 Token attach
api.interceptors.request.use((config) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (auth?.accessToken) {
    config.headers.Authorization = `Bearer ${auth.accessToken}`;
  }

  return config;
});

export default api;