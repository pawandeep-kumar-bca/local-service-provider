import React from "react";
import BookingProviderCard from "./BookingProviderCard";
import { useAllUserBookings } from "../../hooks/useBooking";
import { useOutletContext } from "react-router-dom";

const BookingList = () => {
  const status = useOutletContext();
  const { data } = useAllUserBookings(status);
  const bookings = data?.allBookings || [];
    
   
   
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {bookings.map((booking) => (
        <BookingProviderCard booking={booking} key={booking._id} />
      ))}
    </div>
  );
};

export default BookingList;
