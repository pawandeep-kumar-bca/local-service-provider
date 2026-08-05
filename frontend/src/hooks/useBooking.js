import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  acceptedBookingByProvider,
  cancelBookingByProvider,
  cancelBookingByUser,
  completeBookingByProvider,
  createBooking,
  getAllBookingsOfProvider,
  getAllBookingsOfUser,
  getOneBookingDetails,
  rejectedBookingByProvider,
  rescheduleBookingByUser,
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

export const useAllUserBookings = (status) => {
  return useQuery({
    queryKey: ["user-all-bookings", status],
    queryFn: () => getAllBookingsOfUser(status),
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
  const bookingCancelMutation = useMutation({
    mutationFn: (payload) => cancelBookingByProvider(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-all-bookings"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  const bookingCompleteMutation = useMutation({
    mutationFn: (bookingId) => completeBookingByProvider(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["provider-all-bookings"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return {
    bookingAcceptedMutation,
    bookingRejectMutation,
    bookingStartMutation,
    bookingCancelMutation,
    bookingCompleteMutation,
  };
};

export const useRescheduleBooking = () => {
  const queryClient = useQueryClient();
  const rescheduleBookingMutation = useMutation({
    mutationFn: (payload) => rescheduleBookingByUser(payload),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user-all-bookings"],
      });

      queryClient.invalidateQueries({
        queryKey: ["user-booking-details-one", variables.bookingId],
      });
    },
    onError: (err) => {
      console.error("Reschedule booking error:", err);
    },
  });

  return { rescheduleBookingMutation };
};
export const useCancelBookingByUser=()=>{
  const queryClient = useQueryClient()
    const cancelBookingByUserMutation = useMutation({
    mutationFn: (payload) => cancelBookingByUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-all-bookings"],
      });
    },
    onError: (err) => {
      console.error("Cancel booking by User Error:", err);
      toast.error(err?.response?.data?.message);
    },
  });
  return {cancelBookingByUserMutation}
}