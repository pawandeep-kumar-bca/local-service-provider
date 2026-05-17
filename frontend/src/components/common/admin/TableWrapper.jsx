
import React from "react";

const TableWrapper = ({ children }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-slate-300
        p-5
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
      "
    >
      {children}
    </div>
  );
};

export default TableWrapper;