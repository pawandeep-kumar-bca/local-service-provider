import React from "react";
import {
  FaRegCalendarAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";

import SummaryCard from "./SummaryCard";

const ScheduleSummary = () => {
  // TODO:
  // Replace this mock data with API response

  const summary = {
    todayBookings: 5,
    pendingBookings: 2,
    upcomingBookings: 4,
    nextSlot: "01:00 PM - 03:00 PM",
    freeSlots: 2,
    completedBookings: 20,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 mt-5">
      <SummaryCard
        icon={FaRegCalendarAlt}
        iconBg="bg-green-100"
        iconColor="text-green-500"
        title="Today's Bookings"
        value={summary.todayBookings}
        extraContent={
          <div className="flex gap-1 items-center text-yellow-500">
            <GiSandsOfTime />

            <p className="font-bold">
              {summary.pendingBookings}
            </p>

            <p className="text-muted text-sm font-semibold">
              Pending
            </p>
          </div>
        }
      />

      <SummaryCard
        icon={MdOutlineWatchLater}
        iconBg="bg-orange-100"
        iconColor="text-orange-500"
        title="Upcoming Bookings"
        value={summary.upcomingBookings}
        extraContent={
          <p className="text-sm font-semibold text-muted">
            <span className="font-bold">
              Next Slot :
            </span>{" "}
            <span className="text-success">
              {summary.nextSlot}
            </span>
          </p>
        }
      />

      <SummaryCard
        icon={IoMdStopwatch}
        iconBg="bg-purple-100"
        iconColor="text-purple-500"
        title="Free Slots"
        value={summary.freeSlots}
        extraContent={
          <p className="text-muted text-sm font-semibold">
            Available Today
          </p>
        }
      />

      <SummaryCard
        icon={FaRegCheckCircle}
        iconBg="bg-blue-100"
        iconColor="text-blue-500"
        title="Completed Bookings"
        value={summary.completedBookings}
        extraContent={
          <p className="text-muted text-sm font-semibold">
            Today
          </p>
        }
      />
    </div>
  );
};

export default ScheduleSummary;