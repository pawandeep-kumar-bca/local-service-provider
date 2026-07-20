import api from "./api";

export const bookingSummary = async (payload) => {
  const response = await api.post("/bookings/summary", payload);
  return response.data;
};
export const createBooking = async (payload) => {
  const response = await api.post("/bookings/create", payload);
  return response.data;
};