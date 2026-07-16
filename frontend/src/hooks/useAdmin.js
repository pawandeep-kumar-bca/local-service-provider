import { useQuery } from "@tanstack/react-query"
import { getAllUserList } from "../services/adminService"


export const useUsers = (params = {})=>{
 return useQuery({
    queryKey:['users',params],
    queryFn:()=>getAllUserList(params),
    enabled:true
 })
}