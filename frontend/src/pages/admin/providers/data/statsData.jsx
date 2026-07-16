import React from "react";
import { FaHourglassStart, FaRegCircleCheck, FaUserGroup, FaUserLock } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export const statsData = [
  {
    id: 1,
    title: "Total Providers",
    value: "12,835",
    growth: "12%",
    icon: <FaUserGroup size={22} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 2,
    title: "Active Providers",
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
    title: "Blocked Providers",
    value: "89,543",
    growth: "18%",
    icon: <FaUserLock size={22} />,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    growthIcon: <IoMdArrowRoundDown size={20} />,
    growthColor: "text-red-500",
  },
  {
    id: 4,
    title: "Pending Approval",
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
    title: "Top Rated Providers",
    value: "24,400",
    growth: "10%",
    icon: <IoStarOutline size={24} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];