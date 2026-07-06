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
    "py-1 px-3 rounded-full text-sm flex w-fit gap-2 items-center font-semibold border";

  // STATUS BADGES
  const badges = {
    active: "bg-green-100 text-green-600 border-green-200",
   success: "bg-green-100 text-green-600 border-green-200",
    verified: "bg-green-100 text-green-600 border-green-200",
   available: "bg-green-100 text-green-600 border-green-200",
   accepted: "bg-green-100 text-green-600 border-green-200",
    inactive: "bg-gray-100 text-gray-500 border-gray-200",

    pending: "bg-yellow-100 text-yellow-600 border-yellow-200",

    completed: "bg-blue-100 text-blue-600 border-blue-200",

    refund: "bg-pink-100 text-pink-600 border-pink-200",
   upcoming:"bg-pink-100 text-pink-600 border-pink-200",
    failed: "bg-red-100 text-red-600 border-red-200",

    cancelled: "bg-red-100 text-red-600 border-red-200",

    

    uploaded: "bg-green-100 text-green-600 border-green-200",
  };
   
  // CATEGORY BADGES
  const badgeColors = [
  "bg-red-100 text-red-600 border-red-200",
  "bg-orange-100 text-orange-600 border-orange-200",
  "bg-yellow-100 text-yellow-600 border-yellow-200",
  "bg-green-100 text-green-600 border-green-200",
  "bg-emerald-100 text-emerald-600 border-emerald-200",
  "bg-teal-100 text-teal-600 border-teal-200",
  "bg-cyan-100 text-cyan-600 border-cyan-200",
  "bg-sky-100 text-sky-600 border-sky-200",
  "bg-blue-100 text-blue-600 border-blue-200",
  "bg-indigo-100 text-indigo-600 border-indigo-200",
  "bg-violet-100 text-violet-600 border-violet-200",
  "bg-purple-100 text-purple-600 border-purple-200",
  "bg-pink-100 text-pink-600 border-pink-200",
  "bg-rose-100 text-rose-600 border-rose-200",
];
const getCategoryStyle = (category) => {
  let hash = 0;

  for (let i = 0; i < category.length; i++) {
    hash += category.charCodeAt(i);
  }

  return badgeColors[hash % badgeColors.length];
};
const finalStyle = badge
  ? badges[badge]
  : getCategoryStyle(category);

  // ICONS
  const icons = {
    verified: <MdVerifiedUser size={16} />,

    completed: <IoIosCheckmark size={20} />,

    failed: <MdErrorOutline size={18} />,

    cancelled: <MdErrorOutline size={18} />,

    pending: <IoTimeOutline size={18} />,
  };


  // FINAL TEXT
  const finalText =
    badge
      ? badge.charAt(0).toUpperCase() + badge.slice(1)
      : category
          .split("-")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() +
              word.slice(1)
          )
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