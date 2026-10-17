import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getAllBookingsByAdmin,
  getAllCategoriesByAdmin,
  getAllProvidersList,
  getAllUserList,
  providerApprovedByAdmin,
  providerRejectedByAdmin,
} from "../services/adminService";

export const useUsers = (params = {}) => {
  return useQuery({
    queryKey: ["admin-users", params],
    queryFn: () => getAllUserList(params),
  });
};

export const useProviders = (params = {}) => {
  return useQuery({
    queryKey: ["admin-providers", params],
    queryFn: () => getAllProvidersList(params),
  });
};

export const useCategoriesByAdmin = (params = {}) => {
  return useQuery({
    queryKey: ["admin-categories", params],
    queryFn: () => getAllCategoriesByAdmin(params),
  });
};

export const useBookingsByAdmin = () => {
  return useQuery({
    queryKey: ["admin-bookings"],
    queryFn: getAllBookingsByAdmin,
  });
};

export const useApproveProvider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: providerApprovedByAdmin,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-providers"],
      });
    },
  });
};

export const useRejectProvider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: providerRejectedByAdmin,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminProviders"],
      });
    },
  });
};