import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const StatusBadge = ({
  badge = "active",
  className = "",
  children,
  showIcon = false,
}) => {
  const base =
    "py-1 px-3 rounded text-sm flex w-fit gap-1 items-center font-medium";

  const badges = {
    active: "bg-green-100 text-green-600 border",
    inactive: "bg-gray-100 text-gray-500 border",
    pending: "bg-yellow-100 text-yellow-600 border",
    completed: "bg-blue-100 text-blue-600 border",
    refund: "bg-pink-100 text-pink-600 border",
    failed: "bg-red-100 text-red-600 border",
    canceled: "bg-red-100 text-red-600 border",
    verified: "bg-green-100 text-green-600 border",
  };

  const icons = {
    verified: <IoIosCheckmark size={30} />,
    completed: <IoIosCheckmark size={30} />,
    failed: <MdErrorOutline size={30} />,
    canceled: <MdErrorOutline size={30} />,
    pending: <IoTimeOutline size={30} />,
  };

  const formatted = badge?.charAt(0).toUpperCase() + badge?.slice(1);

  return (
    <span className={`${base} ${badges[badge] || badges.active} ${className}`}>
      {formatted}

      {/* 🔥 ICON LOGIC */}
      {showIcon && (children || icons[badge])}
    </span>
  );
};

export default StatusBadge;
