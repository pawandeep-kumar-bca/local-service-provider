import React from "react";

import StatusBadge from "../../../common/StatusBadge";

const BookingItem = ({ booking }) => {
  const {
    customer,
    service,
    location,
    time,
    status,
  } = booking;

  const borderColor =
    status === "accepted"
      ? "border-green-500"
      : status === "pending"
      ? "border-yellow-500"
      : "border-gray-400";

  return (
    <div
      className={`
        flex justify-between
        gap-3
        border-l-[4px]
        ${borderColor}
        shadow-[0_0_20px_rgba(0,0,0,0.10)]
        p-2
        rounded-lg
        hover:bg-gray-50
        transition-all
        duration-200
      `}
    >
      {/* Customer */}
      <div className="flex items-center gap-3 min-w-0">
        <img
          src={customer.avatar}
          alt={customer.name}
          className="
            w-14 h-14
            rounded-full
            object-cover
            shrink-0
          "
        />

        <div className="min-w-0">
          <h2 className="font-semibold text-text">
            {service}
          </h2>

          <p className="text-sm font-semibold text-muted truncate">
            {customer.name}
          </p>

          <p className="text-sm text-muted truncate">
            {location}
          </p>
        </div>
      </div>

      {/* Time + Status */}
      <div className="flex flex-col items-center justify-center shrink-0">
        <h1 className="text-sm md:text-lg font-semibold text-muted mb-1">
          {time}
        </h1>

        <StatusBadge badge={status} />
      </div>
    </div>
  );
};

export default BookingItem;