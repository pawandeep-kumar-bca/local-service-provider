import api from "./api"


export const changePassword =async (payload)=>{
    const response= await api.patch('/users/change-password',payload)
    return response.data
}

export const updateProfile = async (payload)=>{
    const response = await api.patch('/users/update-profile',payload)
    return response.data
}