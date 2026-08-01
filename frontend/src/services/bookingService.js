import api from "./api";

export const createBooking = async (payload) => {
  const response = await api.post("/bookings/create", payload);
  return response.data;
};

export const getAllBookingsOfUser = async () => {
  const response = await api.get("/bookings/user");

  return response.data;
};

export const getAllBookingsOfProvider = async () => {
  const response = await api.get("/bookings/provider");
  return response.data;
};

export const getOneBookingDetails = async (bookingId) => {
  const response = await api.get(`/bookings/${bookingId}`);

  return response.data;
};

export const acceptedBookingByProvider = async (bookingId)=>{
  const response = await api.patch(`/bookings/${bookingId}/accept`)
  return response.data
}
