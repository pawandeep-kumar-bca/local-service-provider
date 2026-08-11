import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createProvider,
  getAllProviders,
  getNearbyProviders,
  getProviderById,
  getRecommendedProviders,
  getSelectProviderByCategory,
} from "../services/providerService";
import { useNavigate } from "react-router-dom";

export const useProviders = (params = {}) => {
  return useQuery({
    queryKey: ["providers", params], // category change hote hi refetch hoga
    queryFn: () => getAllProviders(params),
    enabled: true, // agar category required ho to yaha condition laga sakte ho
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
      console.log(error.response?.data);
    },
  });

  return { createProviderMutation };
};
export const useRecommendedProviders = (filters) => {
  return useQuery({
    queryKey: ["recommended-providers", filters],
    queryFn: () => getRecommendedProviders(filters),
    enabled: !filters.lat || !filters.lng || !filters.radius,
  });
};
export const useNearbyProviders = (filters) => {
  return useQuery({
    queryKey: ["nearby-providers", filters],
    queryFn: () => getNearbyProviders(filters),
    enabled: !!filters.lat && !!filters.lng && !!filters.radius,
  });
};