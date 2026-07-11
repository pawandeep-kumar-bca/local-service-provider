import { useQuery } from "@tanstack/react-query"
import { getAllState } from "../services/stateService"



export const useStates = ()=>{

    return useQuery({
        queryKey:["states"],
        queryFn:getAllState
    })
}