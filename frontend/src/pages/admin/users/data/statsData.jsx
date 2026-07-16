import React from "react";
import { FaUser, FaUserLock, FaUserShield } from "react-icons/fa6";
import { RiUserAddFill } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export const getStatsData = (stats) => [
  {
    id: 1,
    title: "Total Users",
    value: stats?.totalUsers || 0,
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
    value: stats?.totalActiveUsers|| 0,
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
    value: stats?.totalBlockedUsers|| 0,
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
    value: stats?.totalNewUser|| 0,
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
    value: stats?.totalVerifiedUsers|| 0,
    growth: "10%",
    icon: <MdVerifiedUser size={24} />,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];