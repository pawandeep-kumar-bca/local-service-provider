import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  createBooking,
  getAllBookingsOfProvider,
  getAllBookingsOfUser,
  getOneBookingDetails,
} from "../services/bookingService";

export const useBookingCreate = () => {
  const navigate = useNavigate();

  const createBookingMutation = useMutation({
    mutationFn: createBooking,
    onSuccess: (data) => {
      navigate("/user/provider-details/booking-details/payment", {
        state: { booking: data?.booking },
      });
    },
    onError: (err) => {
      console.error("create booking error", err);
      alert(
        err?.response?.data?.message ||
          "Something went wrong while creating the booking. Please try again.",
      );
    },
  });

  return { createBookingMutation };
};

export const useAllUserBookings = () => {
  return useQuery({
    queryKey: ["user-all-bookings"],
    queryFn: getAllBookingsOfUser,
    onError: (err) => {
      console.log("Get all bookings of user error:", err);
    },
  });
};

export const useAllProviderBookings = () => {
  return useQuery({
    queryKey: ["provider-all-bookings"],
    queryFn: getAllBookingsOfProvider,
    onError: (err) => {
      console.log("Get all provider booking error:", err);
    },
  });
};

export const useUserOneBookingDetails = (bookingId) => {
  console.log(bookingId);

  return useQuery({
    queryKey:['user-booking-details-one',bookingId],
    queryFn:()=>getOneBookingDetails(bookingId),
    enabled:!!bookingId
  });
};
