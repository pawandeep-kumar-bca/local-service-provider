import { useMutation, useQuery } from "@tanstack/react-query";
import { createProvider, getAllProviders, getProviderById } from "../services/providerService";
import { useNavigate } from "react-router-dom";
 

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

 export const useCreateProviders = ()=>{
 const navigate = useNavigate()

  const createProviderMutation = useMutation({
    mutationFn:createProvider,
    onSuccess:()=>{
            navigate('/user/become-provider/upload-documents')
    },
    onError:(err)=>{
      console.log('Create provider error:',err);
      
    }
  })

  return { createProviderMutation }
 }