import React from "react";

import StatusBadge from "../../common/StatusBadge";
import Avatar from "../../common/Avatar";

const BookingItem = ({ booking }) => {
  

  const borderColor =
    booking?.bookingStatus === "accepted"
      ? "border-green-500"
      : booking?.bookingStatus === "pending"
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
       
         <div className="
            w-14 h-14
            rounded-full
            object-cover
            shrink-0
          ">
          <Avatar name={booking?.userSnapshot?.name} image={booking?.userSnapshot?.profileImage?.url} className="text-black bg-gray-400 text-2xl"/>
         </div>
        <div className="min-w-0">

          <h2 className="font-semibold text-text">{booking?.serviceSnapshot?.categoryName}</h2>

          <p className="text-sm font-semibold text-muted truncate">
            {booking?.userSnapshot?.name}
          </p>

          <p className="text-sm text-muted truncate">{booking?.serviceAddressSnapshot?.city},
            {booking?.serviceAddressSnapshot?.district}
          </p>
        </div>
      </div>

      {/* Time + Status */}
      <div className="flex flex-col items-center justify-center shrink-0">
        <h1 className="text-sm md:text-lg font-semibold text-muted mb-1">
          {new Date(booking?.bookingSlot?.startTime).toLocaleTimeString("en-IN",{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true
          }).toUpperCase()} -  {new Date(booking?.bookingSlot?.endTime).toLocaleTimeString("en-IN",{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true
          }).toUpperCase()}
        </h1>

        <StatusBadge badge={booking?.bookingStatus} />
      </div>
    </div>
  );
};

export default BookingItem;
