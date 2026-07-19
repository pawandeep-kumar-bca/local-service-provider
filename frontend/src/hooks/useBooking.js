import { useMutation } from "@tanstack/react-query"
import { createBooking } from "../services/bookingService"
// import { useNavigate } from "react-router-dom"

export const useBookingCreate =()=>{
//    const navigate = useNavigate()
    const createBookingMutation = useMutation({
        mutationKey:['create-booking'],
        mutationFn:createBooking,
        onError:(err)=>{
            console.error('create booking error',err);
            
        }
    })

    return {createBookingMutation}
}