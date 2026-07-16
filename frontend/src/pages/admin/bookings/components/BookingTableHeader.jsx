import React from "react";

const BookingTableHeader = () => {
  return (
    <div
      className="
        grid
        grid-cols-[0.8fr_1.5fr_1.5fr_1.2fr_1fr_0.7fr_0.8fr_1fr_0.5fr]
        items-center
        mt-3
        text-sm
        font-bold
        text-black/80
        px-3
      "
    >
      <span>Booking ID</span>
      <span className="pl-9">Customer</span>
      <span className="pl-9">Provider</span>
      <span className="pl-9">Service</span>
      <span>Date & Time</span>
      <span>Amount</span>
      <span className="text-center">Payment</span>
      <span className="text-center">Status</span>
      <span className="text-center">Action</span>
    </div>
  );
};

export default BookingTableHeader;