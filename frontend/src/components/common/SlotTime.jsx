import React from "react";
import { GoDash } from "react-icons/go";

const allTimes = [
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
  "10:00 PM",
];

function parseTimeToMinutes(timeStr) {
  const [time, meridian] = timeStr.trim().split(" ");

  let [hours, minutes] = time.split(":").map(Number);

  if (meridian === "PM" && hours !== 12) {
    hours += 12;
  }

  if (meridian === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

// Round current time UP to next full hour
function getNextAvailableHour() {
  const now = new Date();

  const currentHour = now.getHours();

  // Always next full hour
  return (currentHour + 1) * 60;
}

const SlotTime = ({
  label,
  required = false,
  className = "",
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
  date,
}) => {
  // -----------------------------
  // Check whether selected date is today
  // -----------------------------

  const isToday = () => {
    if (!date) return false;

    const selectedDate = new Date(date);
    const today = new Date();

    return (
      selectedDate.getFullYear() === today.getFullYear() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getDate() === today.getDate()
    );
  };

  // -----------------------------
  // Start times
  // -----------------------------

  let startTimes = allTimes.slice(0, allTimes.length - 1);

  if (isToday()) {
    const nextAvailableMinutes = getNextAvailableHour();

    startTimes = startTimes.filter(
      (time) => parseTimeToMinutes(time) >= nextAvailableMinutes,
    );
  }

  // -----------------------------
  // End times
  // -----------------------------

  const endTimes = startTime
    ? allTimes.filter(
        (time) => parseTimeToMinutes(time) > parseTimeToMinutes(startTime),
      )
    : allTimes.slice(1);

  // -----------------------------
  // Start change
  // -----------------------------

  const handleStartChange = (e) => {
    const newStart = e.target.value;

    onStartTimeChange(newStart);

    if (
      endTime &&
      parseTimeToMinutes(endTime) <= parseTimeToMinutes(newStart)
    ) {
      onEndTimeChange("");
    }
  };

  return (
    <div className={className}>
      <label
        htmlFor="start-time"
        className="block mb-2 font-medium text-lg md:text-sm"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="flex items-center gap-1">
        {/* START TIME */}

        <select
          name="startTime"
          id="start-time"
          value={startTime}
          onChange={handleStartChange}
          className="w-full text-sm border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white"
        >
          <option disabled value="">
            Start Time
          </option>

          {startTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <GoDash />

        {/* END TIME */}

        <select
          name="endTime"
          id="end-time"
          value={endTime}
          disabled={!startTime}
          onChange={(e) => onEndTimeChange(e.target.value)}
          className="w-full text-sm border border-gray-300 text-slate-700 px-4 py-3 rounded-xl focus:ring focus:ring-blue-500 focus:outline-none bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
        >
          <option disabled value="">
            End Time
          </option>

          {endTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SlotTime;
