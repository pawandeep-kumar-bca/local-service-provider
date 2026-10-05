import React, { useState } from "react";
import { FaPaintRoller } from "react-icons/fa";
import {
  MdOutlineCurrencyRupee,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";

import StatusBudge from "../common/StatusBadge";
import ToggleSwitch from "../common/ToggleSwitch";

const ServicesList = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-3 items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full text-pink-600 shrink-0">
            <FaPaintRoller size={24} />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold text-text">
              AC Repair
            </h1>

            <p className='text-sm font-semibold text-brownness'>I have 5 years of experiences.</p>
          </div>
        </div>

        {/* Toggle */}
        <div className='flex flex-col gap-3 items-end'>
          <ToggleSwitch enabled={status} onChange={() => setStatus((prev) => !prev)} />

          {status === 'Pending Approval' ? <StatusBudge badge='pending' /> : <StatusBudge badge='approved' />}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-5"></div>

      {/* Bottom */}
      <div className="flex items-center justify-between gap-3">

        {/* Price */}
        <div className='flex gap-2 items-center'>
          <span className='h-12 w-12 rounded-sm bg-green-100 text-green-500 flex items-center justify-center'>
            <MdOutlineCurrencyRupee size={24} />
          </span>
          <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-muted font-semibold">
            Price
          </p>

          <div className="flex items-center">
            <MdOutlineCurrencyRupee size={18} />

            <h1 className="text-lg font-bold">
              300
            </h1>
          </div>
        </div>
        </div>

        {/* Duration */}
        <div className='flex gap-2 items-center'>
          <span className='h-12 w-12 rounded-sm bg-blue-100 text-blue-500 flex items-center justify-center'>
            <MdOutlineCurrencyRupee size={24} />
          </span>
          <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-muted font-semibold">
            Experience
          </p>

          <h3 className="text-lg font-bold">
            10 Years
          </h3>
        </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          <button
            className="w-14 h-14 rounded-xl bg-gray-100 flex flex-col items-center justify-center
                text-muted hover:text-blue-500 hover:bg-blue-100 transition cursor-pointer"
          >
            <MdOutlineModeEdit size={24} />

            <p className="text-[10px] font-medium">
              Edit
            </p>
          </button>

          <button
            className="w-14 h-14 rounded-xl bg-red-50 flex flex-col items-center justify-center
                text-red-500 hover:bg-red-100 transition cursor-pointer"
          >
            <MdOutlineDelete size={24} />

            <p className="text-[10px] font-medium">
              Delete
            </p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default ServicesList