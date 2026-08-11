
import React from "react";

const TableWrapper = ({ children }) => {
  return (
    <div
      className="
        md:bg-white
        md:rounded-2xl
        md:border md:border-slate-300
        
        md:p-5
        md:shadow-[0_10px_40px_rgba(0,0,0,0.05)]
      "
    >
      {children}
    </div>
  );
};

export default TableWrapper;