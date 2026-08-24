import React from "react";

import TimeSlotItem from "./TimeSlotItem";

const TimeSlotList = () => {
  // TODO:
  // API:
  // GET /provider/schedule/slots

  const slots = [
    {
      id: 1,
      startTime: "09:00 AM",
      endTime: "10:00 AM",
      status: "available",
    },
    {
      id: 2,
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      status: "booked",
      service: "Plumbing",
      location: "Ramnagar, Sultanganj",
    },
  ];

  return (
    <div className="flex-1 flex flex-col gap-3">
      {slots.map((slot) => (
        <TimeSlotItem
          key={slot.id}
          slot={slot}
        />
      ))}
    </div>
  );
};

export default TimeSlotList;