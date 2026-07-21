import api from "./api";

export const paymentCreate = async (payload) => {
  const response = await api.post("/payments/create-order", payload);
  return response.data;
};

export const paymentVerify = async (payload) => {
  const response = await api.post("/payments/verify", payload);
  return response.data;
};

export const paymentMarkFailed = async (payload) => {
  const response = await api.post("/payments/payment-failed", payload);
  return response.data;
};