import api from "./api";

export const createBooking  =async (formData) =>{

    const response = await api.post('/bookings',formData)
    return response.data
}