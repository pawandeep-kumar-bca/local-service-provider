import React from "react";

const TimeSlotItem = ({ slot }) => {
  const isAvailable = slot.type === "free";

  return (
    <div className="flex gap-3 items-stretch">
    
      {/* Time */}
      <div className="w-[75px] shrink-0 flex flex-col justify-between py-1">
        <span className="text-xs sm:text-sm font-semibold text-muted">
          {slot.startTime}
        </span>

        <span className="text-xs sm:text-sm font-semibold text-muted">
          {slot.endTime}
        </span>
      </div>

      {/* Slot Card */}
      {isAvailable ? (
        <div
          className="
            flex-1
          
            flex items-center
            px-4 py-3
            bg-green-50
            border-l-4 border-green-500
            rounded-lg
          "
        >
          <div>
            <h3 className="text-sm font-semibold text-green-700">
              Available Slot
            </h3>
          </div>
        </div>
      ) : (
        <div
          className="
            flex-1
            min-h-[72px]
            px-4 py-3
            bg-blue-50
            border-l-4 border-blue-500
            rounded-lg
          "
        >
          <h3 className="text-sm font-bold text-primary">
            {slot.startTime} - {slot.endTime}
          </h3>

          <h3 className="text-base font-semibold text-black mt-1">
            { slot?.booking?.serviceSnapshot?.categoryName || "Booking"}
          </h3>

          <p className="text-xs text-muted mt-1">
            {slot?.booking?.serviceAddressSnapshot?.village },{
              slot?.booking?.serviceAddressSnapshot?.city
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeSlotItem;