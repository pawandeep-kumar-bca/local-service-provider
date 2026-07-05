import { useQuery } from "@tanstack/react-query";
import { getAllProviders, getProviderById } from "../services/providerService";

export const useProviders = ({ category } = {}) => {
  return useQuery({
    queryKey: ["providers", category],       // category change hote hi refetch hoga
    queryFn: () => getAllProviders({ category }),
    enabled: true,                            // agar category required ho to yaha condition laga sakte ho
  });
};
 export const useFilterProviders = ({filter})=>{
  return useQuery({
    queryKey:['providers',filter],
    queryFn:()=>getAllProviders({filter}),
    enabled:true
  })
 }
export const useProvider = (providerId) => {
  return useQuery({
    queryKey: ["provider", providerId],
    queryFn: () => getProviderById(providerId),
    enabled: !!providerId,
  });
};