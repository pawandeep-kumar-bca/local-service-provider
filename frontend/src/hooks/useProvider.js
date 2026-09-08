import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  createProvider,
  getAllProviders,
  getNearbyProviders,
  getProviderBookingAnalytics,
  getProviderById,
  getProviderDashboardOverview,
  getProviderScheduleBooking,
  getProviderScheduleSummary,
  getProviderTodayBookings,
  getRecommendedProviders,
  getSelectProviderByCategory,
} from "../services/providerService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useProviders = (params = {}) => {
  return useQuery({
    queryKey: ["providers", params],
    queryFn: () => getAllProviders(params),
  });
};

export const useProvider = (providerId) => {
  return useQuery({
    queryKey: ["provider", providerId],
    queryFn: () => getProviderById(providerId),
    enabled: !!providerId,
  });
};

export const useSelectProviderByCategory = (slug) => {
  return useQuery({
    queryKey: ["select-provider", slug],
    queryFn: () => getSelectProviderByCategory(slug),
    enabled: !!slug,
  });
};

export const useCreateProviders = () => {
  const navigate = useNavigate();

  const createProviderMutation = useMutation({
    mutationFn: createProvider,

    onSuccess: () => {
      navigate("/user/become-provider/upload-documents");
    },

    onError: (error) => {
      console.error("Create Provider Error:", error);

      toast.error(
        error?.response?.data?.message || "Failed to create provider profile",
      );
    },
  });

  return { createProviderMutation };
};

export const useRecommendedProviders = (filters = {}) => {
  return useQuery({
    queryKey: ["recommended-providers", filters],
    queryFn: () => getRecommendedProviders(filters),
    enabled: !!filters.lat && !!filters.lng && !!filters.radius,
  });
};

export const useNearbyProviders = (filters = {}) => {
  return useQuery({
    queryKey: ["nearby-providers", filters],
    queryFn: () => getNearbyProviders(filters),
    enabled: !!filters.lat && !!filters.lng && !!filters.radius,
  });
};

export const useProviderDashboardOverview=()=>{
  return useQuery({
    queryKey:['provider-dashboard-overview'],
    queryFn:getProviderDashboardOverview
  })
}

export const useProviderTodayBookings = () => {
  return useInfiniteQuery({
    queryKey: ["provider-today-bookings"],
    queryFn: ({ pageParam = 1 }) =>
      getProviderTodayBookings({ page: pageParam, limit: 5 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.pagination?.hasMore) {
        return undefined;
      }

      return lastPage.pagination.page + 1;
    },
  });
};

export const useProviderBookingAnalytics = (params) => {
  return useQuery({
    queryKey: ["provider-booking-analytic", params],
    queryFn: () => getProviderBookingAnalytics(params),
  });
};

export const useProviderScheduleSummary = () => {
  return useQuery({
    queryKey: ["provider-schedule-summary"],
    queryFn: getProviderScheduleSummary,
  });
};

export const useProviderUpcomingSchedule = (params)=>{
  return useQuery({
    queryKey:['provider-upcoming-schedule',params],
    queryFn:()=>getProviderScheduleBooking(params)
  })
}