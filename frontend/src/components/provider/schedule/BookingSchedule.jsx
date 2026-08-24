import React from "react";

import BookingItem from "./BookingItem";
import TimeSlotList from "./TimeSlotList";

const BookingSchedule = ({
  view,
  selectedDate,
}) => {
  // TODO:
  // API integration:
  // GET /provider/schedule
  //
  // params:
  // {
  //   view,
  //   date: selectedDate
  // }

  const bookings = [
    {
      id: 1,
      customer: {
        name: "Priya Sharma",
        avatar:
          "https://randomuser.me/api/portraits/women/44.jpg",
      },
      service: "Plumbing",
      location: "Malviya Nagar, Jaipur",
      time: "10:00 AM",
      status: "accepted",
    },
    {
      id: 2,
      customer: {
        name: "Priya Sharma",
        avatar:
          "https://randomuser.me/api/portraits/women/44.jpg",
      },
      service: "Plumbing",
      location: "Malviya Nagar, Jaipur",
      time: "01:00 PM",
      status: "pending",
    },
  ];

  return (
    <div className="flex md:flex-row flex-col">
      {/* Booking List */}
      <div className="flex-1">
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-lg text-muted font-semibold">
            {view === "Day"
              ? "Today's Schedule"
              : `${view} Schedule`}
          </h1>

          <div className="px-3 py-1 bg-gray-200 rounded-lg text-black font-semibold text-sm">
            {bookings.length} Bookings
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {bookings.map((booking) => (
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