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

export const userPaymentHistory = async (filters) => {
  const response = await api.get("/payments/user/payment-history", {
    params: filters,
  });
  return response.data;
};

export const getAdminPayment = async () => {
  const response = await api.get("/admin/payments");
  return response.data;
};
export const getUserPaymentDetails = async ({ paymentId }) => {
  const response = await api.get(`/payments/user/payment-details/${paymentId}`);
  return response.data;
};
