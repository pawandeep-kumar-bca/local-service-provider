import { useQuery } from "@tanstack/react-query"
import { getAllProvidersList, getAllUserList } from "../services/adminService"


export const useUsers = (params = {})=>{
 return useQuery({
    queryKey:['admin-users',params],
    queryFn:()=>getAllUserList(params),
    enabled:true
 })
}

export const useProviders = (params = {})=>{
   return useQuery({
      queryKey:['providers',params],
      queryFn:()=>getAllProvidersList(params),
      enabled:true
   })
}