import React, { useState } from "react";
import { FaPaintRoller } from "react-icons/fa";
import {
  MdOutlineCurrencyRupee,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";

import StatusBudge from "../common/StatusBadge";

const ServicesList = () => {
  const [status, setStatus] = useState(false);

  return (
    <div className="mt-5">

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {/* Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">

          {/* Top */}
          <div className="flex items-start justify-between gap-3">

            <div className="flex gap-3 items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full text-pink-600 shrink-0">
                <FaPaintRoller size={24} />
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-lg font-semibold text-text">
                  AC Repair
                </h1>

                <StatusBudge category="cleaning" />
              </div>
            </div>

            {/* Toggle */}
            <button
              type="button"
              onClick={() => setStatus((prev) => !prev)}
              className={`w-12 h-6 rounded-full relative transition-all duration-300 shrink-0 cursor-pointer ${
                status ? "bg-green-400" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all duration-300 ${
                  status ? "right-0.5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-5"></div>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-3">

            {/* Price */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm text-muted">
                Price
              </p>

              <div className="flex items-center">
                <MdOutlineCurrencyRupee size={18} />

                <h1 className="text-lg font-bold">
                  300
                </h1>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm text-muted">
                Duration
              </p>

              <h3 className="text-lg font-bold">
                1-2 Hours
              </h3>
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
      </div>
    </div>
  );
};

export default ServicesList