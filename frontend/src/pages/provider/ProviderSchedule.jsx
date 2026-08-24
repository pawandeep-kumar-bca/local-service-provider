import React, { useState } from "react";

import ScheduleHeader from "../../components/provider/schedule/ScheduleHeader";
import ScheduleSummary from "../../components/provider/schedule/ScheduleSummary";
import ScheduleToolbar from "../../components/provider/schedule/ScheduleToolbar";
import BookingSchedule from "../../components/provider/schedule/BookingSchedule";
import UpcomingBooking from "../../components/provider/schedule/UpcomingBooking";
import AvailabilitySettings from "../../components/provider/schedule/AvailabilitySettings";

const ProviderSchedule = () => {
  const [view, setView] = useState("Day");
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-full">
      {/* Header */}
      <ScheduleHeader />

      {/* Summary Cards */}
      <ScheduleSummary />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-5">
        {/* Left Section */}
        <div
          className="
            bg-white
            rounded-2xl
            border border-slate-200
            p-3 md:p-5
            shadow-[0_5px_20px_rgba(0,0,0,0.06)]
          "
        >
          {/* Toolbar */}
          <ScheduleToolbar
            view={view}
            setView={setView}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          {/* Schedule */}
          <BookingSchedule
            view={view}
            selectedDate={selectedDate}
          />
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-4">
          <UpcomingBooking />

          <AvailabilitySettings />
        </div>
      </div>
    </div>
  );
};

export default ProviderSchedule;