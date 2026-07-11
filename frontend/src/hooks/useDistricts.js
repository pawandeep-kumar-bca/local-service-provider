import { useQuery } from "@tanstack/react-query"
import { getAllDistrict } from "../services/districtService"



export const useDistrict = (stateId)=>{
    return useQuery({
        queryKey:['districts',stateId],
        queryFn:() => getAllDistrict(stateId),
        enabled: !!stateId
    })
}