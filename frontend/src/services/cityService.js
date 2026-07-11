import api from "./api"


export const getAllCity =async (districtId)=>{
    const response = await api.get(`/districts/${districtId}/cities`)

    return response.data
} 