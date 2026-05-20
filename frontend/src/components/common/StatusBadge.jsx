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
  const categoryStyles = {
    electrician:
      "bg-yellow-100 text-yellow-600 border-yellow-200",

    plumbing:
      "bg-blue-100 text-blue-600 border-blue-200",

    cleaning:
      "bg-pink-100 text-pink-600 border-pink-200",

    appliance:
      "bg-cyan-100 text-cyan-600 border-cyan-200",

    "home-repair":
      "bg-orange-100 text-orange-600 border-orange-200",

    "home-decor":
      "bg-green-100 text-green-600 border-green-200",

    beauty:
      "bg-purple-100 text-purple-600 border-purple-200",
  };

  // ICONS
  const icons = {
    verified: <MdVerifiedUser size={16} />,

    completed: <IoIosCheckmark size={20} />,

    failed: <MdErrorOutline size={18} />,

    cancelled: <MdErrorOutline size={18} />,

    pending: <IoTimeOutline size={18} />,
  };

  // FINAL STYLE
  const finalStyle =
    badge
      ? badges[badge]
      : categoryStyles[category];

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