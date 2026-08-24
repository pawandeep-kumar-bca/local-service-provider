import React from "react";

const TimeSlotItem = ({ slot }) => {
  const isAvailable =
    slot.status === "available";

  if (isAvailable) {
    return (
      <div className="flex gap-2">
        <h1 className="text-sm font-semibold text-muted w-[70px]">
          {slot.startTime}
        </h1>

        <div
          className="
            bg-green-100
            py-2 px-4
            border-l-[3px]
            border-green-500
            font-semibold
            text-black
            rounded-lg
            w-full
            flex items-center
          "
        >
          Available Slot
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <div className="w-[70px] flex flex-col justify-between">
        <h1 className="text-sm font-semibold text-muted">
          {slot.startTime}
        </h1>

        <h1 className="text-sm font-semibold text-muted">
          {slot.endTime}
        </h1>
      </div>

      <div
        className="
          bg-blue-100
          py-2 px-4
          border-l-[3px]
          border-blue-500
          rounded-lg
          w-full
        "
      >
        <h3 className="text-sm text-primary font-bold">
          {slot.startTime} - {slot.endTime}
        </h3>

        <h3 className="text-lg font-semibold">
          {slot.service}
        </h3>

        <p className="text-sm text-muted">
          {slot.location}
        </p>
      </div>
    </div>
  );
};

export default TimeSlotItem;