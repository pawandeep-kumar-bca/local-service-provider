import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import StatusBadge from "../../../components/common/StatusBadge";

const JobHistoryProvider = () => {
  return (
    <div>
      <button
        className="flex items-center  cursor-pointer text-2xl text-text font-bold"
        type="button"
      >
        <FaAngleLeft />
        Back to Providers
      </button>
      <h1 className="text-3xl font-bold text-text my-7">Job History</h1>

      <div className="border border-gray-300 rounded-xl ">
        <div className="border-b border-gray-300 p-3 grid grid-cols-6 justify-items-center">
          <span className="text-lg font-bold">Job Id</span>
          <span className="text-lg font-bold">Service</span>
          <span className="text-lg font-bold">Customer</span>
          <span className="text-lg font-bold">Date</span>
          <span className="text-lg font-bold">Amount</span>
          <span className="text-lg font-bold">Status</span>
        </div>
        <div className=" p-3 grid grid-cols-6 justify-items-center transition-all duration-300 hover:bg-gray-50">
          <span className="text-sm font-semibold text-blue-500">#JOB3322</span>
          <span className="text-sm font-semibold text-muted">Pope Installation</span>
          <span className="text-sm font-semibold text-muted">Ravi Sharma</span>
          <span className="text-sm font-semibold text-muted">May 23 ,2024</span>
          <span className="text-sm font-semibold text-muted">₹200</span>
         <div>
            <StatusBadge badge="completed"/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default JobHistoryProvider;
