import api from "./api";



export const paymentCreate =async (payload)=>{
 const response = await api.post('/payments/create-order',payload)
   return response.data
}

