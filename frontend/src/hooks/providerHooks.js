import { useQuery } from "@tanstack/react-query";
import { getAllProviders } from "../services/providerService";

export const useProviders = ({ category } = {}) => {
  return useQuery({
    queryKey: ["providers", category],       // category change hote hi refetch hoga
    queryFn: () => getAllProviders({ category }),
    enabled: true,                            // agar category required ho to yaha condition laga sakte ho
  });
};