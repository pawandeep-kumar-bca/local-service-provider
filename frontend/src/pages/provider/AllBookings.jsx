import React, { useState } from "react";
import { FaPaintRoller, FaRegCalendarMinus } from "react-icons/fa";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import {
  MdChevronLeft,
  MdLocationPin,
  MdOutlinePlumbing,
} from "react-icons/md";
import Button from "../../components/common/Button";
import { PiNotePencilLight } from "react-icons/pi";
import {
  MdOutlineElectricalServices,
  MdPestControl,
  MdCleaningServices,
  MdMiscellaneousServices,
  MdOutlineCarpenter,
} from "react-icons/md";

import { TbAirConditioning, TbPaintFilled } from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";
import { LuClipboardList, LuDot } from "react-icons/lu";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdCash } from "react-icons/io";
import { useAllProviderBookings } from "../../hooks/useBooking";
import UserCardBookings from "./UserCardBookings";
const AllBookings = () => {
  const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold cursor-pointer";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  const [filter, setFilter] = useState("all");

  const { data } = useAllProviderBookings();
  const bookings = data?.allBookings || [];
 

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-text">My Booking</h1>

        <Button>
          <MdChevronLeft size={24} />
          Back
        </Button>
      </div>
      <div className="flex gap-2 mt-4 overflow-x-auto my-1">
        <button
          onClick={() => setFilter("all")}
          className={`${base} ${filter === "all" ? `${active}` : `${notActive}`}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`${base} ${filter === "pending" ? `${active}` : `${notActive}`}`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("accepted")}
          className={`${base} ${filter === "accepted" ? `${active}` : `${notActive}`}`}
        >
          Accepted
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${base} ${filter === "completed" ? `${active}` : `${notActive}`}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("cancelled")}
          className={`${base} ${filter === "cancelled" ? `${active}` : `${notActive}`}`}
        >
          Cancelled
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {/* Booking Card */}

        {bookings.map((booking) => {
          return <UserCardBookings booking={booking} key={booking._id}/>;
        })}
      </div>

      {/* <div
          className="flex flex-col items-center justify-center
  py-20 px-6 text-center rounded-2xl
  border border-dashed border-gray-300 bg-gray-50"
        >
         
          <div
            className="w-20 h-20 rounded-full
    bg-white border border-gray-200
    flex items-center justify-center mb-4"
          >
            <LuClipboardList size={36} className="text-muted" />
          </div>

          
          <h2 className="text-xl font-bold text-text">No {filter} Bookings</h2>

          
          <p className="text-sm text-muted mt-2 max-w-sm">
            You don’t have any {filter} bookings right now. New bookings will
            appear here automatically.
          </p>
        </div> */}
    </div>
  );
};

export default AllBookings;
