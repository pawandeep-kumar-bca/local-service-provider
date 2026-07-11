import { useQuery } from "@tanstack/react-query"
import { getAllCity } from "../services/cityService"


export const useCity = (districtId)=>{
    return useQuery({
        queryKey:['cities',districtId],
        queryFn:()=>getAllCity(districtId),
        enabled:!!districtId
    })
}