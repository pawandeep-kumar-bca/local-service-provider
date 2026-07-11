import api from "./api";



export const getAllState =async () =>{
    const response = await api.get('/states')
    return response.data
}