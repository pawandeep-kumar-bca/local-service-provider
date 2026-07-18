import React from "react";
import { GoDash } from "react-icons/go";

const SlotTime = ({label}) => {
  const startTimes = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];
  const endTimes = [
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
  ];
  return (
    <div>
      <label
        htmlFor="time"
        className="block mb-2 font-medium text-lg md:text-sm"
      >
        {label}
      </label>

      <div className="flex items-center gap-1">
        <select
          name="time"
          id="start-time"
          defaultValue=""
          className="w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500  text-muted focus:outline-none bg-white"
        >
          <option disabled value="">
            Start Time
          </option>
          {startTimes.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
        <GoDash />

        <select
          name="time"
          id="end-time"
          defaultValue=""
          className=" w-full text-lg border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-500 text-muted focus:outline-none bg-white"
        >
          <option disabled value="">
            End Time
          </option>
          {endTimes.map((time, idx) => (
            <option key={idx} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SlotTime;
