
import React from "react";

const ToggleSwitch = ({
  enabled,
  onChange,
}) => {
  return (
    <button
      onClick={onChange}
      className={`
        relative w-14 h-8 rounded-full
        transition-colors duration-300
        flex items-center
        cursor-pointer shrink-0
        ${enabled ? "bg-green-500" : "bg-slate-300"}
      `}
    >
      <span
        className={`
          absolute left-1
          w-6 h-6 rounded-full bg-white
          transition-transform duration-300
          shadow-sm
          ${enabled ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default ToggleSwitch;