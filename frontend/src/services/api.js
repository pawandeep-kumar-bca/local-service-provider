// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});

// 🔐 Token attach
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;