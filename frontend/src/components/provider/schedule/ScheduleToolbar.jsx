import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";

const ScheduleToolbar = ({ view, setView, selectedDate, setSelectedDate }) => {
  const scheduleViews = ["Day", "Week", "Month"];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "long",
    });
  };

  const changeDate = (direction) => {
    const newDate = new Date(selectedDate);

    if (view === "Day") {
      newDate.setDate(newDate.getDate() + direction);
    }

    if (view === "Week") {
      newDate.setDate(newDate.getDate() + direction * 7);
    }

    if (view === "Month") {
      newDate.setMonth(newDate.getMonth() + direction);
    }

    setSelectedDate(newDate);
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* View Selector */}
        <div className="flex items-center gap-2 flex-wrap">
          {scheduleViews.map((item) => (
            <label key={item} htmlFor={item} className="cursor-pointer">
              <input
                id={item}
                type="radio"
                name="schedule"
                value={item}
                checked={view === item}
                onChange={(e) => setView(e.target.value)}
                className="peer hidden"
              />

              <div
                className="
                  px-4 py-2
                  rounded-lg
                  border border-slate-200
                  font-semibold
                  text-sm
                  text-slate-700
                  transition-all
                  duration-200
                  hover:border-green-500
                  hover:text-green-600
                  peer-checked:bg-green-600
                  peer-checked:text-white
                  peer-checked:border-green-600
                  peer-checked:shadow-md
                "
              >
                {item}
              </div>
            </label>
          ))}
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => changeDate(-1)}
            className="
              w-10 h-10
              rounded-xl
              border border-slate-200
              flex items-center justify-center
              hover:bg-slate-100
              transition-all
              duration-200
              cursor-pointer
            "
          >
            <IoIosArrowBack size={18} />
          </button>

          <div className="flex items-center gap-2">
            <FaCalendarDays size={18} className="text-slate-500" />

            <p className="text-sm md:text-base font-semibold text-slate-700 text-center">
              {formatDate(selectedDate)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => changeDate(1)}
            className="
              w-10 h-10
              rounded-xl
              border border-slate-200
              flex items-center justify-center
              hover:bg-slate-100
              transition-all
              duration-200
              cursor-pointer
            "
          >
            <IoIosArrowForward size={18} />
          </button>
        </div>

        {/* Calendar Sync */}
        <button
          type="button"
          className="
            flex items-center justify-center gap-2
            border border-slate-200
            rounded-xl
            px-4 py-2.5
            bg-slate-50
            hover:bg-slate-100
            transition-all
            duration-200
            font-semibold
            text-sm
            cursor-pointer
            w-full sm:w-auto
          "
        >
          <FaCalendarDays size={18} />

          <span>Calendar Sync</span>
        </button>
      </div>

      <div className="border-t border-slate-200 my-5" />
    </>
  );
};

export default ScheduleToolbar;
