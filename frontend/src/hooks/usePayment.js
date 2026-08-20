import { useMutation, useQuery } from "@tanstack/react-query";

import {
  paymentCreate,
  paymentVerify,
  paymentMarkFailed,
  userPaymentHistory,
  getAdminPayment,
  getUserPaymentDetails,
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
        "Marking payment failed:",
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

export const useUserPaymentDetails = (paymentId) => {
  return useQuery({
    queryKey: ["user-payment-details", paymentId],
    queryFn: () => getUserPaymentDetails(paymentId),
    enabled: !!paymentId,
  });
};

export const useUserPaymentHistory = (filters = {}) => {
  return useQuery({
    queryKey: ["user-payment-history", filters],
    queryFn: () => userPaymentHistory(filters),
  });
};

export const useAdminPayments = () => {
  return useQuery({
    queryKey: ["admin-payment"],
    queryFn: getAdminPayment,
  });
};