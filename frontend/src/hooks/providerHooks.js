import { useQuery } from "@tanstack/react-query";
import { getAllProviders, getProviderById } from "../services/providerService";


export const useProviders = ( params  = {})=> {
  return useQuery({
    queryKey: ["providers", params],       // category change hote hi refetch hoga
    queryFn: () => getAllProviders( params ),
    enabled: true,                            // agar category required ho to yaha condition laga sakte ho
  });
};
export const useProvider = (providerId) => {
  return useQuery({
    queryKey: ["provider", providerId],
    queryFn: () => getProviderById(providerId),
    enabled: !!providerId,
  });
};