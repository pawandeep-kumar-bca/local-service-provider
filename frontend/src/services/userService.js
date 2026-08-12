import api from "./api"


export const changePassword =async (payload)=>{
    const response= await api.patch('/users/change-password',payload)
    return response.data
}