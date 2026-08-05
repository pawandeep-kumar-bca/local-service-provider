import api from "./api";

export const createBooking = async (payload) => {
  const response = await api.post("/bookings/create", payload);
  return response.data;
};

export const getAllBookingsOfUser = async (status) => {
  const response = await api.get("/bookings/user", {
    params: {
      status,
    },
  });

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

export const acceptedBookingByProvider = async (bookingId) => {
  const response = await api.patch(`/bookings/${bookingId}/accept`);
  return response.data;
};

export const rejectedBookingByProvider = async (payload) => {
  const response = await api.patch(
    `/bookings/${payload.bookingId}/reject`,
    payload,
  );
  return response.data;
};
export const startBookingByProvider = async (bookingId) => {
  const response = await api.patch(`/bookings/${bookingId}/start`);
  return response.data;
};
export const cancelBookingByProvider = async (payload) => {
  const response = await api.patch(
    `/bookings/${payload.bookingId}/cancel`,
    payload,
  );
  return response.data;
};
export const completeBookingByProvider = async (bookingId) => {
  const response = await api.patch(`/bookings/${bookingId}/complete`);
  return response.data;
};

export const rescheduleBookingByUser = async (payload)=>{
const response = await api.patch(`/bookings/${payload.bookingId}/reschedule-booking`,payload)
return response.data
}

export const cancelBookingByUser =async (payload)=>{
  const response = await api.patch(`/bookings/${payload.bookingId}/user/cancel`,payload)
  return response.data
}