import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  acceptedBookingByProvider,
  createBooking,
  getAllBookingsOfProvider,
  getAllBookingsOfUser,
  getOneBookingDetails,
  rejectedBookingByProvider,
  startBookingByProvider,
} from "../services/bookingService";
import { toast } from "react-toastify";

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
    refetchInterval: 10000,
    onError: (err) => {
      console.log("Get all bookings of user error:", err);
    },
  });
};

export const useAllProviderBookings = () => {
  return useQuery({
    queryKey: ["provider-all-bookings"],
    queryFn: getAllBookingsOfProvider,
    refetchInterval: 10000,
    onError: (err) => {
      console.log("Get all provider booking error:", err);
    },
  });
};

export const useUserOneBookingDetails = (bookingId) => {
  console.log(bookingId);

  return useQuery({
    queryKey: ["user-booking-details-one", bookingId],
    queryFn: () => getOneBookingDetails(bookingId),
    enabled: !!bookingId,
  });
};

export const useBookingStatus = () => {
  const queryClient = useQueryClient();
  const bookingAcceptedMutation = useMutation({
    mutationFn: (bookingId) => acceptedBookingByProvider(bookingId),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["provider-all-bookings"],
      });
    },
  });
  const bookingRejectMutation = useMutation({
    mutationFn: (payload) => rejectedBookingByProvider(payload),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["provider-all-bookings"],
      });
    },
  });
  const bookingStartMutation = useMutation({
    mutationFn: (bookingId) => startBookingByProvider(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-all-bookings"],
      });
    },
    onError: (err) => {
      console.log("Start Booking Error", err);
    },
  });
  return {
    bookingAcceptedMutation,
    bookingRejectMutation,
    bookingStartMutation,
  };
};
