import React, { useState } from "react";
import { FaPaintRoller, FaRegCalendarMinus } from "react-icons/fa";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import {
  MdChevronLeft,
  MdLocationPin,
  MdOutlinePlumbing,
} from "react-icons/md";
import Button from "../../components/common/Button";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";
import { LuDot } from "react-icons/lu";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdCash } from "react-icons/io";
const AllBookings = () => {
  const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold cursor-pointer";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  const [filter, setFilter] = useState("all");
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
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* Booking Card */}
        <div
          className="border border-gray-200 bg-white rounded-2xl p-5
    shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Top */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-bold text-text">#BK12345</h1>

              <p className="text-sm text-muted mt-1">12 May 2026</p>
            </div>

            <StatusBadge badge="pending" />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Customer */}
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-3 items-center">
              {/* Profile */}
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt="profile"
                  className="w-16 h-16 min-w-16 rounded-full object-cover
            border-4 border-white shadow-md ring-2 ring-primary/10"
                />

                {/* Online Dot */}
                <div
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full
            bg-green-500 border-2 border-white"
                />
              </div>

              {/* Customer Info */}
              <div >
                <h1 className="text-lg md:text-xl font-semibold text-text">
                  Ankit Verma
                </h1>
                {/* Payment */}

                <div className="flex items-center gap-1 mt-1">
                  

                  <span className="text-xs bg-gray-100 border-gray-300 flex items-center gap-1 py-1 px-2 rounded-sm border text-green-600"> 
                   <IoMdCash size={16}/> <span>Cash on delivery</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              {/* Call */}
              <button
                className="flex items-center justify-center
          w-11 h-11 rounded-xl cursor-pointer
          bg-green-50 border border-green-300 text-green-600
          hover:bg-green-100 hover:scale-105
          transition-all duration-300"
              >
                <IoMdCall size={22} />
              </button>

              {/* Chat */}
              <button
                className="flex items-center justify-center
          w-11 h-11 rounded-xl cursor-pointer
          bg-blue-50 border border-blue-300 text-blue-600
          hover:bg-blue-100 hover:scale-105
          transition-all duration-300"
              >
                <BiMessageRoundedDetail size={22} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Service */}
          <div className="flex gap-3 items-center">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl
        bg-cyan-100 text-cyan-600
        flex items-center justify-center shrink-0"
            >
              <MdOutlinePlumbing size={28} />
            </div>

            {/* Service Info */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-text">
                Plumbing
              </h3>

              <div className="flex items-center text-sm text-muted font-medium">
                <p>₹300</p>

                <span className="flex items-center">
                  <LuDot size={20} />
                  <p>1-2 Hours</p>
                </span>
              </div>

              {/* Earnings */}
              <p className="text-sm text-green-600 font-semibold mt-1">
                You Earn ₹270
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Date & Time */}
          <div className="flex gap-2 items-center">
            <CiCalendar size={22} className="text-muted mt-0.5 shrink-0" />

            <span
              className="flex flex-wrap items-center
        text-sm md:text-base font-medium text-gray-700"
            >
              <p>11 May 2026</p>

              <LuDot size={18} />

              <p>02:00 PM - 03:00 PM</p>
            </span>
          </div>

          {/* Address */}
          <div className="flex gap-2 items-center mt-3">
            <CiLocationOn size={22} className="text-muted mt-0.5 shrink-0" />

            <div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Vaishali Nagar, Jaipur
              </p>

              <p className="text-xs text-muted mt-1">2.5 KM away from you</p>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex  gap-3 mt-6">
            <Button fullWidth color="danger">
              Reject
            </Button>

            <Button fullWidth>Accept</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBookings;
