import React from "react";
import { FaUser, FaUserLock, FaUserShield } from "react-icons/fa6";
import { RiUserAddFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export const statsData = [
  {
    id: 1,
    title: "Total Users",
    value: "12,835",
    growth: "12%",
    icon: <FaUser size={22} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 2,
    title: "Active Users",
    value: "12,345",
    growth: "5%",
    icon: <FaUserShield size={22} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 3,
    title: "Blocked Users",
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
    title: "New Users",
    value: "24,400",
    growth: "10%",
    icon: <RiUserAddFill size={22} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 5,
    title: "Verified Users",
    value: "24,400",
    growth: "10%",
    icon: <MdVerifiedUser size={24} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];