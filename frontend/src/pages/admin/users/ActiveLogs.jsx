import React from "react";
import StatusBadge from "../../../components/common/StatusBadge";

import { FaChrome } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
const ActiveLogs = () => {
  return (
    <div>
      <div className="mt-3">
        <div className="grid  grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr] text-sm text-black/80 font-bold justify-items-center items-center">
          <span>Activity</span>

          <span>Date & Time</span>
          <span>Device & Browser</span>
          <span>IP Address</span>
          <span>Status</span>
        </div>
        <div className="mt-2">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr_1fr_1fr] justify-items-center items-center">
            <div className="flex items-center gap-2">
              <MdLogin  size={22} className="text-green-500" />
              <p className="text-sm text-muted font-semibold">Logged In</p>
            </div>
            <span className="text-sm text-muted font-semibold">
              May 30,2026,10:30 AM
            </span>
            <div className="flex items-center gap-2">
              <FaChrome className=" text-blue-500" size={20}/>
              <p className="text-sm text-muted font-semibold">
                Chrome / Window
              </p>
            </div>
            <span className="text-sm text-muted font-semibold">
              198.168.1.10
            </span>
            <StatusBadge badge="success" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveLogs;
