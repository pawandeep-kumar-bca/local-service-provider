import React from "react";
import { CiBank } from "react-icons/ci";
import { FaHourglassStart, FaRegCircleCheck } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineReload } from "react-icons/ai";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

export const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹ 12,835",
    growth: "12%",
    icon: <IoWalletOutline size={22} />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 2,
    title: "Successful Payments",
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
    title: "Pending Payments",
    value: "89,543",
    growth: "18%",
    icon: <FaHourglassStart size={22} />,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthIcon: <IoMdArrowRoundDown size={20} />,
    growthColor: "text-yellow-500",
  },
  {
    id: 4,
    title: "Refunds Payments",
    value: "₹ 24,400",
    growth: "10%",
    icon: <AiOutlineReload size={22} />,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
  {
    id: 5,
    title: "Provider Payouts",
    value: "₹ 24,400",
    growth: "10%",
    icon: <CiBank size={24} />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    growthIcon: <IoMdArrowRoundUp size={20} />,
    growthColor: "text-green-500",
  },
];