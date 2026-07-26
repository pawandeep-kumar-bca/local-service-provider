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
  const filterBookings =
    filter === "all"
      ? bookings
      : bookings.filter((booking) => booking.status === filter);
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

      {filterBookings.length > 0 ? (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
          {/* Booking Card */}

          {filterBookings.map((items) => {
            
          })}
        </div>
      ) : (
        <div
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
            <LuClipboardList size={36} className="text-muted" />
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-text">No {filter} Bookings</h2>

          {/* Description */}
          <p className="text-sm text-muted mt-2 max-w-sm">
            You don’t have any {filter} bookings right now. New bookings will
            appear here automatically.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllBookings;
