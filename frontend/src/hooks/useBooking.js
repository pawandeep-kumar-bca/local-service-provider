import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { bookingSummary, createBooking } from "../services/bookingService";

export const useBookingCreate = () => {
  const navigate = useNavigate();

  const bookingSummaryMutation = useMutation({
    mutationFn: bookingSummary,
    onSuccess: (data) => {
      navigate("/user/provider-details/booking-details/payment", {
        state: { summary: data},
      });
    },
    onError: (err) => {
      console.error("booking summary error", err);
      alert(
        err?.response?.data?.message ||
          "Something went wrong while creating the booking. Please try again.",
      );
    },
  });
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

  return { bookingSummaryMutation, createBookingMutation };
};
