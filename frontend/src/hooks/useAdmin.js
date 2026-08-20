import { useQuery } from "@tanstack/react-query";

import {
  getAllBookingsByAdmin,
  getAllCategoriesByAdmin,
  getAllProvidersList,
  getAllUserList,
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