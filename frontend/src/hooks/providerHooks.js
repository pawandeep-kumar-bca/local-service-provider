import { useQuery } from "@tanstack/react-query";
import { getAllProviders } from "../services/providerService";

export const useProviders = () => {
  return useQuery({
    queryKey: ["providers"],
    queryFn: getAllProviders,
  });
};