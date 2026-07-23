import React, { useState } from "react";
import { FaPaintRoller, FaRegCalendarMinus } from "react-icons/fa";
import { IoIosChatboxes, IoMdCall } from "react-icons/io";
import {
  MdChevronLeft,
  MdLocationPin,
  MdOutlinePlumbing,
} from "react-icons/md";
import Button from "../../components/common/Button";
import {
  
  MdOutlineElectricalServices,
  MdPestControl,
  MdCleaningServices,
  MdMiscellaneousServices,
  MdOutlineCarpenter,
} from "react-icons/md";

import {
  TbAirConditioning,
  TbPaintFilled,
} from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import StatusBadge from "../../components/common/StatusBadge";
import { LuClipboardList, LuDot } from "react-icons/lu";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdCash } from "react-icons/io";
const AllBookings = () => {
  const base =
    "whitespace-nowrap border shrink-0 transition-all duration-300 mb-2 px-5 py-2 rounded-xl font-semibold cursor-pointer";
  const active = "bg-primary text-white";
  const notActive = "border-muted border text-black";
  const [filter, setFilter] = useState("all");
  const bookings = [
  {
    id: "#BK12345",
    status: "pending",
    bookingDate: "12 May 2026",

    customerName: "Ankit Verma",
    customerPhone: "9876543213",
    customerImage: "https://randomuser.me/api/portraits/men/20.jpg",

    paymentType: "Cash on delivery",

    serviceName: "Plumbing",
    serviceIcon: "MdOutlinePlumbing",
    price: 300,
    duration: "1-2 Hours",
    earning: 270,

    serviceDate: "11 May 2026",
    startTime: "02:00 PM",
    endTime: "03:00 PM",

    address: "Vaishali Nagar, Jaipur",
    distance: "2.5 KM away from you",
  },

  {
    id: "#BK12346",
    status: "accepted",
    bookingDate: "13 May 2026",

    customerName: "Priya Sharma",
    customerPhone: "9876543201",
    customerImage: "https://randomuser.me/api/portraits/women/44.jpg",

    paymentType: "Online Paid",

    serviceName: "AC Repair",
    serviceIcon: "TbAirConditioning",
    price: 499,
    duration: "2 Hours",
    earning: 450,

    serviceDate: "13 May 2026",
    startTime: "10:00 AM",
    endTime: "12:00 PM",

    address: "Malviya Nagar, Jaipur",
    distance: "4 KM away from you",
  },

  {
    id: "#BK12347",
    status: "completed",
    bookingDate: "14 May 2026",

    customerName: "Rahul Mehta",
    customerPhone: "9876543255",
    customerImage: "https://randomuser.me/api/portraits/men/32.jpg",

    paymentType: "Online Paid",

    serviceName: "Cleaning",
    serviceIcon: "MdCleaningServices",
    price: 799,
    duration: "3 Hours",
    earning: 720,

    serviceDate: "14 May 2026",
    startTime: "09:00 AM",
    endTime: "12:00 PM",

    address: "Mansarovar, Jaipur",
    distance: "1.2 KM away from you",
  },

  {
    id: "#BK12348",
    status: "pending",
    bookingDate: "15 May 2026",

    customerName: "Neha Agarwal",
    customerPhone: "9876543266",
    customerImage: "https://randomuser.me/api/portraits/women/68.jpg",

    paymentType: "Cash on delivery",

    serviceName: "Painting",
    serviceIcon: "TbPaintFilled",
    price: 1200,
    duration: "4 Hours",
    earning: 1100,

    serviceDate: "15 May 2026",
    startTime: "11:00 AM",
    endTime: "03:00 PM",

    address: "Jagatpura, Jaipur",
    distance: "5 KM away from you",
  },

  {
    id: "#BK12349",
    status: "accepted",
    bookingDate: "16 May 2026",

    customerName: "Vikram Singh",
    customerPhone: "9876543277",
    customerImage: "https://randomuser.me/api/portraits/men/55.jpg",

    paymentType: "Online Paid",

    serviceName: "Electrical",
    serviceIcon: "MdOutlineElectricalServices",
    price: 650,
    duration: "2 Hours",
    earning: 590,

    serviceDate: "16 May 2026",
    startTime: "01:00 PM",
    endTime: "03:00 PM",

    address: "C-Scheme, Jaipur",
    distance: "3 KM away from you",
  },

  {
    id: "#BK12350",
    status: "completed",
    bookingDate: "17 May 2026",

    customerName: "Aman Yadav",
    customerPhone: "9876543288",
    customerImage: "https://randomuser.me/api/portraits/men/45.jpg",

    paymentType: "Online Paid",

    serviceName: "Pest Control",
    serviceIcon: "MdPestControl",
    price: 999,
    duration: "3 Hours",
    earning: 900,

    serviceDate: "17 May 2026",
    startTime: "09:00 AM",
    endTime: "12:00 PM",

    address: "Bani Park, Jaipur",
    distance: "6 KM away from you",
  },

  {
    id: "#BK12351",
    status: "pending",
    bookingDate: "18 May 2026",

    customerName: "Riya Kapoor",
    customerPhone: "9876543299",
    customerImage: "https://randomuser.me/api/portraits/women/12.jpg",

    paymentType: "Cash on delivery",

    serviceName: "Carpenter",
    serviceIcon: "MdOutlineCarpenter",
    price: 450,
    duration: "1 Hour",
    earning: 400,

    serviceDate: "18 May 2026",
    startTime: "04:00 PM",
    endTime: "05:00 PM",

    address: "Ajmer Road, Jaipur",
    distance: "2 KM away from you",
  },

  {
    id: "#BK12352",
    status: "accepted",
    bookingDate: "19 May 2026",

    customerName: "Suresh Kumar",
    customerPhone: "9876543211",
    customerImage: "https://randomuser.me/api/portraits/men/78.jpg",

    paymentType: "Online Paid",

    serviceName: "Appliance Repair",
    serviceIcon: "MdMiscellaneousServices",
    price: 850,
    duration: "2-3 Hours",
    earning: 780,

    serviceDate: "19 May 2026",
    startTime: "12:00 PM",
    endTime: "03:00 PM",

    address: "Tonk Road, Jaipur",
    distance: "7 KM away from you",
  },

  {
    id: "#BK12353",
    status: "completed",
    bookingDate: "20 May 2026",

    customerName: "Simran Kaur",
    customerPhone: "9876543222",
    customerImage: "https://randomuser.me/api/portraits/women/34.jpg",

    paymentType: "Online Paid",

    serviceName: "Cleaning",
    serviceIcon: "MdCleaningServices",
    price: 699,
    duration: "2 Hours",
    earning: 630,

    serviceDate: "20 May 2026",
    startTime: "08:00 AM",
    endTime: "10:00 AM",

    address: "Vaishali Nagar, Jaipur",
    distance: "3.5 KM away from you",
  },

  {
    id: "#BK12354",
    status: "pending",
    bookingDate: "21 May 2026",

    customerName: "Deepak Jain",
    customerPhone: "9876543233",
    customerImage: "https://randomuser.me/api/portraits/men/11.jpg",

    paymentType: "Cash on delivery",

    serviceName: "Plumbing",
    serviceIcon: "MdOutlinePlumbing",
    price: 350,
    duration: "1 Hour",
    earning: 300,

    serviceDate: "21 May 2026",
    startTime: "05:00 PM",
    endTime: "06:00 PM",

    address: "Murlipura, Jaipur",
    distance: "1 KM away from you",
  },
];
const icons = {
  MdOutlinePlumbing,
  MdOutlineElectricalServices,
  MdPestControl,
  MdCleaningServices,
  MdMiscellaneousServices,
  MdOutlineCarpenter,
  TbAirConditioning,
  TbPaintFilled,
};
const filterBookings =  filter === 'all' ? bookings:bookings.filter((booking)=>booking.status === filter)
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

     {filterBookings.length>0 ? <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {/* Booking Card */}


        {filterBookings.map((items)=>{
          const {id,status,bookingDate,customerName,customerImage,paymentType,serviceName,price,duration,earning,serviceDate,startTime,endTime,address,distance}=items
          const Icon = icons[items.serviceIcon];
          return (
            <div key={id}
          className="border border-gray-200 bg-white rounded-2xl p-5
    shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
        >
          {/* Top */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-lg font-bold text-text">{id}</h1>

              <p className="text-sm text-muted mt-1">{bookingDate}</p>
            </div>

            <StatusBadge badge={status} />
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Customer */}
          <div className="flex justify-between items-center gap-3">
            <div className="flex gap-3 items-center">
              {/* Profile */}
              <div className="relative">
                <img
                  src={customerImage}
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
                  {customerName}
                </h1>
                {/* Payment */}

                <div className="flex items-center gap-1 mt-1">
                  

                  <span className="text-xs bg-gray-100 border-gray-300 flex items-center gap-1 py-1 px-2 rounded-sm border text-green-600"> 
                   <IoMdCash size={16}/> <span>{paymentType}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
             <div className="flex gap-2">
  
  {/* Call */}
  <button
    className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-green-50 border border-green-300 text-green-600
      hover:bg-green-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
  >
    <IoMdCall size={22} />
  </button>

  {/* Chat */}
  <button
    className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-blue-50 border border-blue-300 text-blue-600
      hover:bg-blue-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
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
              <Icon size={28} />
            </div>

            {/* Service Info */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-text">
                {serviceName}
              </h3>

              <div className="flex items-center text-sm text-muted font-medium">
                <p>₹ {price}</p>

                <span className="flex items-center">
                  <LuDot size={20} />
                  <p>{duration}</p>
                </span>
              </div>

              {/* Earnings */}
              <p className="text-sm text-green-600 font-semibold mt-1">
                You Earn ₹{earning}
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
              <p>{serviceDate}</p>

              <LuDot size={18} />

              <p>{startTime} - {endTime}</p>
            </span>
          </div>

          {/* Address */}
          <div className="flex gap-2 items-center mt-3">
            <CiLocationOn size={22} className="text-muted mt-0.5 shrink-0" />

            <div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                {address}
              </p>

              <p className="text-xs text-muted mt-1">{distance}</p>
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
          )
        })}
      </div>:<div
  className="flex flex-col items-center justify-center
  py-20 px-6 text-center rounded-2xl
  border border-dashed border-gray-300 bg-gray-50"
>

  {/* Icon */}
  <div
    className="w-20 h-20 rounded-full
    bg-white border border-gray-200
    flex items-center justify-center mb-4"
  >
    <LuClipboardList
      size={36}
      className="text-muted"
    />
  </div>

  {/* Heading */}
  <h2 className="text-xl font-bold text-text">
    No {filter} Bookings
  </h2>

  {/* Description */}
  <p className="text-sm text-muted mt-2 max-w-sm">
    You don’t have any {filter} bookings right now.
    New bookings will appear here automatically.
  </p>

</div>}

    </div>
  );
};

export default AllBookings;
