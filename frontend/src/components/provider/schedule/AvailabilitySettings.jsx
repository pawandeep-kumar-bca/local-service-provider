import React, { useState } from "react";

import SlotTime from "../../common/SlotTime";

const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const AvailabilitySettings = () => {
  const [workingDays, setWorkingDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ]);

  const handleDayChange = (day) => {
    setWorkingDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter(
          (item) => item !== day
        );
      }

      return [...prev, day];
    });
  };

  const handleSave = () => {
    const payload = {
      workingDays,
      // workingHours will come from SlotTime
    };

    console.log("Availability payload:", payload);

    // TODO:
    // PATCH /provider/availability
    // mutation.mutate(payload)
  };

  return (
    <div
      className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <h1 className="text-lg font-semibold mb-3 text-text">
        Availability Settings
      </h1>

      {/* Working Hours */}
      <SlotTime label="Working Hours" />

      {/* Working Days */}
      <div className="mt-4">
        <label className="block mb-2 font-medium text-sm md:text-sm">
          Working Days
        </label>

        <div className="flex flex-wrap gap-2">
          {days.map((day) => {
            const checked =
              workingDays.includes(day);

            return (
              <label
                htmlFor={`day-${day}`}
                key={day}
                className="cursor-pointer"
              >
                <input
                  id={`day-${day}`}
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    handleDayChange(day)
                  }
                  className="peer hidden"
                />

                <div
                  className="
                    w-16 h-9
                    flex items-center
                    justify-center
                    rounded-lg
                    bg-gray-100
                    text-gray-700
                    font-semibold
                    peer-checked:bg-green-100
                    peer-checked:text-green-600
                    peer-checked:border
                    peer-checked:border-green-300
                    hover:bg-green-50
                    transition-all
                    duration-300
                  "
                >
                  {day}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Save */}
      <button
        type="button"
        onClick={handleSave}
        className="
          mt-5
          w-full
          py-2.5
          rounded-xl
          bg-green-600
          text-white
          font-semibold
          hover:bg-green-700
          transition
        "
      >
        Save Availability
      </button>
    </div>
  );
};

export default AvailabilitySettings;