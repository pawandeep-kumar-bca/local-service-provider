

import React from "react";

const StatsCard = ({
  title,
  value,
  growth,
  icon,
  growthIcon,
  iconBg,
  iconColor,
  growthColor = "text-green-500",
}) => {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-2xl
        p-5
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
        transition-all duration-300
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            ${iconBg}
            ${iconColor}
            w-13 h-13
            rounded-full
            flex items-center justify-center
            shrink-0
          `}
        >
          {icon}
        </div>

        <div className="flex-1">
          <h1 className="text-sm text-black/60 font-medium">
            {title}
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-black">
            {value}
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-2 flex-wrap">
        <span
          className={`
            ${growthColor}
            flex items-center gap-1
            font-semibold
            text-sm
          `}
        >
          {growthIcon}
          {growth}
        </span>

        <p className="text-xs md:text-sm text-black/60 font-medium">
          from last month
        </p>
      </div>
    </div>
  );
};

export default StatsCard;