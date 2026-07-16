import React from "react";
import { FiBook } from "react-icons/fi";
import { SiCashapp } from "react-icons/si";
import { FaHourglassStart, FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircleOutline, IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

// Stats cards ka data. Naya card add karna ho to bas yahan ek object push karo.
export const statsData = [
  {
    id: 1,
    title: "Total Bookings",
    value: "12,835",
    growth: "12%",
    icon: <FiBook size={22} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 2,
    title: "Completed Bookings",
    value: "12,345",
    growth: "5%",
    icon: <FaRegCircleCheck size={22} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 3,
    title: "Cancelled Bookings",
    value: "89,543",
    growth: "18%",
    icon: <IoIosCloseCircleOutline size={22} />,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    growthIcon: <IoMdArrowRoundDown size={20} />,
    growthColor: "text-red-500",
  },
  {
    id: 4,
    title: "Pending Bookings",
    value: "24,400",
    growth: "10%",
    icon: <FaHourglassStart size={22} />,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 5,
    title: "Total Revenue",
    value: "24,400",
    growth: "10%",
    icon: <SiCashapp size={24} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];