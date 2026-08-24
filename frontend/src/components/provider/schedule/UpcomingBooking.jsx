import React from "react";
import {
  IoMdCall,
} from "react-icons/io";
import {
  BiMessageRoundedDetail,
} from "react-icons/bi";
import { Link } from "react-router-dom";

import StatusBadge from "../../common/StatusBadge";
const UpcomingBooking = () => {
  // TODO:
  // API:
  // GET /provider/bookings/upcoming

  const booking = {
    customer: {
      name: "Priya Sharma",
      avatar:
        "https://randomuser.me/api/portraits/men/11.jpg",
    },
    time: "10:00 AM",
    service: "AC Repair",
    location: "Malviya Nagar, Jaipur",
    status: "accepted",
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
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-muted">
          Upcoming Booking
        </h1>

        <Link
          to="/provider/bookings"
          className="
            text-sm
            font-semibold
            text-primary
            border-b-2
            border-transparent
            hover:border-primary
            transition-all
            duration-200
          "
        >
          View all
        </Link>
      </div>

      {/* Booking */}
      <div
        className="
          flex flex-col
          justify-between
          gap-4
          relative
          bg-white
          border border-slate-200
          rounded-2xl
          p-4
        "
      >
        {/* Customer */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src={booking.customer.avatar}
                alt={booking.customer.name}
                className="
                  w-14 h-14
                  min-w-14
                  rounded-full
                  object-cover
                  border-2 border-white
                  shadow-md
                  ring-2 ring-primary/10
                "
              />

              {/* Online */}
              <div
                className="
                  absolute
                  bottom-0
                  right-1
                  w-4 h-4
                  rounded-full
                  bg-green-500
                  border-2 border-white
                "
              />
            </div>

            <div>
              <h1 className="text-base font-semibold text-text">
                {booking.customer.name}
              </h1>

              <h2 className="text-sm font-semibold text-blue-500 mt-0.5">
                {booking.time}
              </h2>
            </div>
          </div>

          <div>
            <StatusBadge
              badge={booking.status}
            />
          </div>
        </div>

        {/* Service + Actions */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <h3 className="text-base font-semibold text-text">
              {booking.service}
            </h3>

            <p className="text-sm font-medium text-muted">
              {booking.location}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              type="button"
              className="
                flex items-center justify-center
                w-10 h-10
                md:w-11 md:h-11
                rounded-xl
                cursor-pointer
                bg-green-50
                border border-green-300
                text-green-600
                hover:bg-green-100
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              <IoMdCall size={20} />
            </button>

            <button
              type="button"
              className="
                flex items-center justify-center
                w-10 h-10
                md:w-11 md:h-11
                rounded-xl
                cursor-pointer
                bg-blue-50
                border border-blue-300
                text-blue-600
                hover:bg-blue-100
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              <BiMessageRoundedDetail
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBooking;