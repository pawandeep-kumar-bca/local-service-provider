import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdCall,
  IoMdStopwatch,
} from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GoDash } from "react-icons/go";
const ProviderSchedule = () => {
  const cardsContent = [
    {
      bgColor: "bg-green-100",
      textColor: "text-green-500",
      Icon: FaRegCalendarAlt,
      text: "This Month Earning",
      value: "5",
      extraContent: (
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <p className="text-yellow-500 font-bold">2</p>
          <p className="text-muted text-sm font-semibold">Pending</p>
        </div>
      ),
    },

    {
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",

      Icon: FaRegCheckCircle,

      text: "Completed Today",

      value: "20",

      extraContent: (
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-sm font-bold">₹ 1,200</p>
          <p className="text-muted text-sm font-semibold"> Earnings</p>
        </div>
      ),
    },

    {
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",

      Icon: IoMdStopwatch,

      text: "Free Slots",

      value: "2",

      extraContent: (
        <p className="text-muted text-sm font-semibold">Available Today</p>
      ),
    },
    {
      bgColor: "bg-orange-100",
      textColor: "text-orange-500",
      Icon: IoWalletOutline,
      text: "Today Earnings",
      value: "₹ 22,400",

      extraContent: (
        <Link className="border-b border-[2px] border-transparent hover:border-b hover:border-green hover:border-[2px] transition-all duration-300 text-green-500 ">
          View Details
        </Link>
      ),
    },
  ];

  const [value, setValue] = useState("Day");
  console.log(value);
  const schedule = ["Day", "Week", "Month"];
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-text">Schedule</h1>
        <p className="tex-sm text-muted">
          Manage your bookings and availability.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:gap-4 mt-5 gap-2">
        {cardsContent.map((item, idx) => {
          const {
            bgColor,

            textColor,

            Icon,
            text,
            value,
            extraContent,
          } = item;

          return (
            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                relative
                overflow-hidden
                p-4
                border border-slate-100
                shadow-[0_5px_20px_rgba(0,0,0,0.06)]
                hover:-translate-y-1
                transition-all duration-300
                
              "
            >
              {/* Top */}
              <div className="flex items-start gap-4">
                <div
                  className={`
                    w-14 h-14
                    flex items-center justify-center
                    ${textColor}
                    ${bgColor}
                    rounded-2xl
                    shrink-0
                  `}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h2 className="text-muted md:text-sm font-medium text-lg leading-5 ">
                    {text}
                  </h2>
                  {/* Content */}
                  <div className="mt-1">
                    <h1 className="text-text text-3xl font-bold mb-1">
                      {value}
                    </h1>

                    {extraContent}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-1 grid-cols-1 mt-5">
        <div
          className="
    bg-white
    rounded-2xl
    border border-slate-200
    p-3 md:p-5
    shadow-[0_5px_20px_rgba(0,0,0,0.06)]
  "
        >
          {/* Top Toolbar */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Day / Week / Month */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Day */}
              {schedule.map((shed, idx) => (
                <label key={shed} htmlFor={shed}>
                  <input
                    defaultChecked={idx === 0}
                    name="schedule"
                    id={shed}
                    value={shed}
                    onChange={(e) => setValue(e.target.value)}
                    type="radio"
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
          cursor-pointer
          transition-all duration-200
          hover:border-green-500
          hover:text-green-600
          peer-checked:bg-green-600
          peer-checked:text-white
          peer-checked:hover:text-white
          peer-checked:border-green-600
          peer-checked:shadow-md
        "
                  >
                    {shed}
                  </div>
                </label>
              ))}
            </div>

            {/* Date Navigation */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* Left Arrow */}
              <button
                className="
          w-10 h-10
          rounded-xl
          border border-slate-200
          flex items-center justify-center
          hover:bg-slate-100
          transition-all duration-200 cursor-pointer
        "
              >
                <IoIosArrowBack size={18} />
              </button>

              {/* Date */}
              <div className="flex items-center gap-2">
                <FaCalendarDays size={18} className="text-slate-500" />

                <p className="text-sm md:text-base font-semibold text-slate-700">
                  15 May 2026, Thursday
                </p>
              </div>

              {/* Right Arrow */}
              <button
                className="
          w-10 h-10
          rounded-xl
          border border-slate-200
          flex items-center justify-center cursor-pointer
          hover:bg-slate-100
          transition-all duration-200
        "
              >
                <IoIosArrowForward size={18} />
              </button>
            </div>

            {/* Calendar Sync */}
            <button
              className="
        flex items-center justify-center gap-2
        border border-slate-200
        rounded-xl
        px-4 py-2.5
        bg-slate-50
        hover:bg-slate-100
        transition-all duration-200
        font-semibold
        text-sm cursor-pointer
        w-full sm:w-auto
      "
            >
              <FaCalendarDays size={18} />

              <span>Calendar Sync</span>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-5"></div>

          <div className="flex md:flex-row flex-col">
            <div className=" flex-1">
              <div className="flex justify-between">
                <h1 className="text-lg text-muted font-semibold">
                  Today's Schedule
                </h1>
                <div className="px-3 py-1 bg-gray-200 rounded-lg text-black font-semibold">
                  5 Bookings
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between border-l-[4px] border-green-500 shadow-[0_0_20px_rgba(0,0,0,0.10)] p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 ">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="priya"
                      className="
                w-14 h-14
                rounded-full
                object-cover
              "
                    />

                    <div>
                      <h2 className="font-semibold text-text">Plumbing</h2>

                      <p className="text-sm font-semibold text-muted ">
                        Priya Sharma
                      </p>
                      <p className="text-sm text-muted ">
                        Malviya nagar,jaipur
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg font-semibold text-muted mb-1">
                      10:00 AM
                    </h1>
                    <StatusBadge badge="accepted" />
                  </div>
                </div>
                <div className="flex justify-between border-l-[4px] border-yellow-500 shadow-[0_0_20px_rgba(0,0,0,0.10)] p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 ">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="priya"
                      className="
                w-14 h-14
                rounded-full
                object-cover
              "
                    />

                    <div>
                      <h2 className="font-semibold text-text">Plumbing</h2>

                      <p className="text-sm font-semibold text-muted ">
                        Priya Sharma
                      </p>
                      <p className="text-sm text-muted ">
                        Malviya nagar,jaipur
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-lg font-semibold text-muted mb-1">
                      10:00 AM
                    </h1>
                    <StatusBadge badge="pending" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:border-r border-t border-gray-300 md:mx-3 my-4"></div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-2">
                <h1 className="text-sm font-semibold text-muted w-[70px]">
                  9 AM{" "}
                </h1>
                <div className="bg-green-100 py-2 px-4 border-l-[3px] border-green-500 font-semibold text-black rounded-lg w-full flex items-center">
                  Available Slot
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[70px] flex flex-col justify-between">
                  <h1 className="text-sm font-semibold text-muted w-[50px]">
                    10 AM{" "}
                  </h1>
                  <h1 className="text-sm font-semibold text-muted ">12 PM </h1>
                </div>
                <div className="bg-blue-100 py-2 px-4 border-l-[3px] border-blue-500   rounded-lg w-full">
                  <h3 className="text-sm text-primary font-bold">
                    10:00 AM - 12:00 PM
                  </h3>
                  <h3 className="text-lg font-semibold">Plumbing</h3>
                  <p className="text-sm text-muted">Ramnagar,Sultanganj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-muted">
                  Upcoming Booking
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
                {/* Left Section */}
                <div className="flex justify-between">
                  {/* Profile */}
                  <div className="flex items-center gap-3">
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
                  <div>
                    <StatusBadge badge="accepted" />
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
              </div>
            </div>
          </div>

          <div className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      ">
            <div>

              <h1 className="text-lg font-semibold mb-2 text-text ">Availability Settings</h1>
              <label
                htmlFor="time"
                className="block mb-2 font-medium text-lg md:text-sm"
              >
                Working Hours
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
            <div className="flex-1 mt-3 md:mt-4">
              <label className="block mb-2 font-medium text-lg md:text-sm">
                Working Days
              </label>
              <div className="flex flex-wrap gap-2">
                {days.map((day, index) => {
                  return (
                    <label htmlFor={day} key={index} className="cursor-pointer">
                      <input
                       defaultChecked={index === 0}
                        type="checkbox"
                        name="days"
                        id={day}
                        value={day}
                        className="peer hidden"
                      />

                      <div className="w-16 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 font-semibold peer-checked:bg-green-100 peer-checked:text-green-600 peer-checked:border peer-checked:border-green-300 hover:bg-green-50 transition-all duration-300">
                        {day}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSchedule;
