import { useQuery } from "@tanstack/react-query"
import { getAllCategoriesByAdmin, getAllProvidersList, getAllUserList } from "../services/adminService"


export const useUsers = (params = {})=>{
 return useQuery({
    queryKey:['admin-users',params],
    queryFn:()=>getAllUserList(params),
    enabled:true
 })
}

export const useProviders = (params = {})=>{
   return useQuery({
      queryKey:['admin-providers',params],
      queryFn:()=>getAllProvidersList(params),
      enabled:true
   })
}
export const useCategoriesByAdmin = (params = {})=>{
   return useQuery({
            queryKey:['admin-categories',params],
            queryFn:()=>getAllCategoriesByAdmin(params),
            enabled:true
   })
}