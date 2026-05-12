import React from 'react'
import { IoMdCall } from "react-icons/io";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import { BiMessageRoundedDetail } from "react-icons/bi";
import StatusBadge from "../../components/common/StatusBadge";
const ProviderTodayBookings = () => {
  return (
     <div>
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold text-muted">
              Today's Bookings
            </h1>
            <Link
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
          <div
            className="
    flex flex-col lg:flex-row
    lg:items-center
    justify-between
    gap-4
    relative
    bg-white
    border border-slate-200
    rounded-2xl
    p-4
  "
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              {/* Profile */}
              <div className="relative shrink-0">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="profile"
                  className="
          w-14 h-14 min-w-14
          rounded-full
          object-cover
          border-2 border-white
          shadow-md
          ring-2 ring-primary/10
        "
                />

                {/* Online Dot */}
                <div
                  className="
          absolute bottom-0 right-1
          w-4 h-4 rounded-full
          bg-green-500
          border-2 border-white
        "
                />
              </div>

              {/* Customer Info */}
              <div>
                <h1 className="text-base  font-semibold text-text">
                  Priya Sharma
                </h1>

                <h2 className="text-sm font-semibold text-blue-500 mt-0.5">
                  10:00 AM
                </h2>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-between lg:gap-6">
              {/* Service Info */}
              <div className="flex flex-col">
                <h3 className="text-base  font-semibold text-text">
                  AC Repair
                </h3>

                <p className="text-sm font-medium text-muted">
                  Malviya Nagar, Jaipur
                </p>
              </div>

              {/* Status */}
              <div className="hidden lg:flex">
                <StatusBadge badge="accepted" />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {/* Call */}
                <button
                  className="
          flex items-center justify-center
          w-10 h-10 md:w-11 md:h-11
          rounded-xl
          cursor-pointer
          bg-green-50
          border border-green-300
          text-green-600
          hover:bg-green-100
          hover:-translate-y-0.5
          transition-all duration-300
        "
                >
                  <IoMdCall size={20} />
                </button>

                {/* Chat */}
                <button
                  className="
          flex items-center justify-center
          w-10 h-10 md:w-11 md:h-11
          rounded-xl
          cursor-pointer
          bg-blue-50
          border border-blue-300
          text-blue-600
          hover:bg-blue-100
          hover:-translate-y-0.5
          transition-all duration-300
        "
                >
                  <BiMessageRoundedDetail size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Status */}
            <div className="absolute top-4 right-4 lg:hidden">
              <StatusBadge badge="accepted" />
            </div>
          </div>
          <div className="mt-5">
            <Button fullWidth color="white" className="text-green-500">
              View All Booking
            </Button>
          </div>
          </div>
  )
}

export default ProviderTodayBookings