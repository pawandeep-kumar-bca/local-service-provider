import React from "react";

import BookingItem from "./BookingItem";
import TimeSlotList from "./TimeSlotList";
import { useProviderUpcomingSchedule } from "../../../hooks/useProvider";
const BookingSchedule = ({
  view,
  selectedDate,
}) => {
const {data} = useProviderUpcomingSchedule({
    view,date:selectedDate
  })

  const bookings = data?.bookings || []
 

  return (
    <div className="flex md:flex-row flex-col">
      {/* Booking List */}
      <div className="flex-1">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-lg capitalize text-muted font-semibold">
            {view === "day"
              ? "Today's Schedule"
              : `${view} Schedule`}
          </h1>

          <div className="px-3 py-1 bg-gray-200 rounded-lg text-black font-semibold text-sm">
            {data?.totalBookings} Bookings
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {bookings?.map((booking) => (
            <BookingItem
              key={booking.id}
              booking={booking}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="md:border-r border-t border-gray-300 md:mx-3 my-4" />

      {/* Slots */}
      <TimeSlotList />
    </div>
  );
};

export default BookingSchedule;