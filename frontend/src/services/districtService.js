import api from "./api";



export const getAllDistrict =async (stateId)=>{
    const response = await api.get(`/states/${stateId}/districts`)
    return response.data
}