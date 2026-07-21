import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createBooking } from "../services/bookingService";

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

  return {  createBookingMutation };
};
