import React from "react";

const SummaryCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  extraContent,
}) => {
  return (
    <div
      className="
        bg-white
        rounded-xl
        relative
        overflow-hidden
        p-4
        border border-slate-100
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Top */}
      <div className="flex items-start gap-4">
        <div
          className={`
            w-14 h-14
            flex items-center justify-center
            ${iconColor}
            ${iconBg}
            rounded-2xl
            shrink-0
          `}
        >
          {Icon}
        </div>

        <div>
          <h2 className="text-muted text-sm font-medium leading-5">
            {title}
          </h2>

          <div className="mt-1">
            <h1 className="text-text text-3xl font-bold">
              {value}
            </h1>
          </div>
        </div>
      </div>

      {/* Extra Content */}
      {extraContent && (
        <div className="pl-1 mt-2">
          {extraContent}
        </div>
      )}
    </div>
  );
};

export default SummaryCard;