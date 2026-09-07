import React from "react";
import {
  FaRegCalendarAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { GiSandsOfTime } from "react-icons/gi";

import SummaryCard from "./SummaryCard";
import { useProviderScheduleSummary } from "../../../hooks/useProvider";

const ScheduleSummary = () => {

  const { data } = useProviderScheduleSummary()
  const summary = data?.result

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 mt-5">
      <SummaryCard
        icon={<FaRegCalendarAlt size={22} />}
        iconBg="bg-green-100"
        iconColor="text-green-500"
        title="Today's Bookings"
        value={summary?.totalTodayBookings ?? 0}
        extraContent={
          <div className="flex gap-1 items-center text-orange-500 pl-15">
            <GiSandsOfTime />

            <p className="font-bold">
              {summary?.totalPendingBookings ?? 0}
            </p>

            <p className="text-muted text-sm font-semibold">
              Pending
            </p>
          </div>
        }
      />

      <SummaryCard
        icon={<MdOutlineWatchLater size={22} />}
        iconBg="bg-orange-100"
        iconColor="text-orange-500"
        title="Upcoming Bookings"
        value={summary?.totalUpcomingBookings ?? 0}
        extraContent={
          <p className="text-sm font-semibold text-muted">
            <span className="font-bold">
              Next Slot :
            </span>{" "}
            {data?.nextUpcomingBooking?.bookingSlot?.startTime ? (
              <span className="text-success">
                {new Date(
                  data.nextUpcomingBooking.bookingSlot.startTime
                ).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }).toUpperCase()}{" "}
                -{" "}
                {new Date(
                  data.nextUpcomingBooking.bookingSlot.endTime
                ).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }).toUpperCase()}
              </span>
            ) : (
              <span className="text-muted">
                No upcoming booking
              </span>
            )}
          </p>
        }
      />

      <SummaryCard
        icon={<IoMdStopwatch size={22} />}
        iconBg="bg-purple-100"
        iconColor="text-purple-500"
        title="Free Slots"
        value={data?.totalFreeSlot ?? 0}
        extraContent={
          <p className=" pl-16 text-muted text-sm font-semibold">
            Available Today
          </p>
        }
      />

      <SummaryCard
        icon={<FaRegCheckCircle size={22} />}
        iconBg="bg-blue-100"
        iconColor="text-blue-500"
        title="Completed Bookings"
        value={summary?.totalCompletedBookings ?? 0}
        extraContent={
          <p className="pl-16 text-muted text-sm font-semibold">
            Today
          </p>
        }
      />
    </div>
  );
};

export default ScheduleSummary;