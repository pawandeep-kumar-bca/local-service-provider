import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdErrorOutline, MdVerifiedUser } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const StatusBadge = ({
  badge = "",
  category = "",
  className = "",
  children,

  showIcon = false,
}) => {
  const base =
    "py-1 px-3  rounded-full font-mono text-xs md:text-sm flex w-fit gap-1 items-center font-[600] border";

  // STATUS BADGES
  const badges = {
    active: "bg-green-100 text-green-600 border-green-200",
    UPI: "bg-blue-100 text-blue-600 border-blue-200",
    COD: "bg-green-100 text-green-600 border-green-200 ",
    success: "bg-green-100 text-green-600 border-green-200",
    verified: "bg-green-100 text-green-600 border-green-200",
    available: "bg-green-100 text-green-600 border-green-200",
    accepted: "bg-green-100 text-green-600 border-green-200",
    inactive: "bg-gray-100 text-gray-500 border-gray-200",
    "in_progress":'bg-purple-100 text-purple-600 border-purple-30',
    pending: "bg-yellow-100 text-yellow-600 border-yellow-300",

    
    approved: "bg-blue-100 text-blue-600 border-blue-200",
    completed: "bg-blue-100 text-blue-600 border-blue-200",
    refund: "bg-pink-100 text-pink-600 border-pink-200",
    upcoming: "bg-pink-100 text-pink-600 border-pink-200",
    failed: "bg-red-100 text-red-600 border-red-200",
    rejected: "bg-red-100 text-red-600 border-red-200",

    cancelled: "bg-red-100 text-red-600 border-red-200",
    'not verified': "bg-red-100 text-red-600 border-red-200",

    uploaded: "bg-green-100 text-green-600 border-green-200",
  };

  // CATEGORY BADGES
  const badgeColors = [
    "bg-red-50 text-red-500 border-red-300",
    "bg-orange-50 text-orange-500 border-orange-300",
    "bg-yellow-50 text-yellow-500 border-yellow-300",
    "bg-green-50 text-green-500 border-green-300",
    "bg-emerald-50 text-emerald-500 border-emerald-300",
    "bg-teal-50 text-teal-500 border-teal-300",
    "bg-cyan-50 text-cyan-500 border-cyan-300",
    "bg-sky-50 text-sky-500 border-sky-300",
    "bg-blue-50 text-blue-500 border-blue-300",
    "bg-indigo-50 text-indigo-500 border-indigo-300",
    "bg-violet-50 text-violet-500 border-violet-300",
    "bg-purple-50 text-purple-500 border-purple-300",
    "bg-pink-50 text-pink-500 border-pink-300",
    "bg-rose-50 text-rose-500 border-rose-300",
  ];
  const getCategoryStyle = (category) => {
    let hash = 0;

    for (let i = 0; i < category.length; i++) {
      hash += category.charCodeAt(i);
    }

    return badgeColors[hash % badgeColors.length];
  };
  const finalStyle = badge ? badges[badge] : getCategoryStyle(category);

  // ICONS
  const icons = {
    verified: <MdVerifiedUser size={16} />,

    completed: <IoIosCheckmark size={20} />,

    failed: <MdErrorOutline size={18} />,

    cancelled: <MdErrorOutline size={18} />,

    pending: <IoTimeOutline size={16} />,
  };

  // FINAL TEXT
  const finalText = badge
    ? badge.charAt(0).toUpperCase() + badge.slice(1)
    : category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

  return (
    <span
      className={`
        ${base}
        ${finalStyle}
        ${className}
      `}
    >
      {showIcon && (children || icons[badge])}

      {finalText}
    </span>
  );
};

export default StatusBadge;
