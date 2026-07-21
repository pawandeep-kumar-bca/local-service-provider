import { useMutation } from "@tanstack/react-query";
import {
  paymentCreate,
  paymentVerify,
  paymentMarkFailed,
} from "../services/paymentService";

export const usePayment = () => {
  const createOrderMutation = useMutation({
    mutationFn: paymentCreate,
    onError: (error) => {
      console.error(
        "Order creation failed:",
        error?.response?.data?.message || error.message,
      );
    },
  });

  const verifyPaymentMutation = useMutation({
    mutationFn: paymentVerify,
    onError: (error) => {
      console.error(
        "Payment verification failed:",
        error?.response?.data?.message || error.message,
      );
    },
  });

  const markPaymentFailedMutation = useMutation({
    mutationFn: paymentMarkFailed,
    onError: (error) => {
      console.error(
        "Marking payment failed errored out:",
        error?.response?.data?.message || error.message,
      );
    },
  });

  return {
    createOrderMutation,
    verifyPaymentMutation,
    markPaymentFailedMutation,
  };
};