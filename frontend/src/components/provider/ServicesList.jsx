
import React, { useState } from "react";

import {
  MdOutlineCurrencyRupee,
  MdOutlineDelete,
  MdOutlineModeEdit,
  MdOutlineWorkOutline,
  MdOutlineWarningAmber,
} from "react-icons/md";

import StatusBudge from "../common/StatusBadge";
import ToggleSwitch from "../common/ToggleSwitch";

const ServicesList = ({ service }) => {
  const [status, setStatus] = useState(
    service?.isAvailable ?? false
  );



  // Toggle availability (API integration later)
  const handleToggle = () => {
    if (service?.approvalStatus !== "approved") return;

    setStatus((prev) => !prev);
  };

  // Format approval status
  const formatApprovalStatus = (approvalStatus) => {
    switch (approvalStatus) {
      case "pending":
        return "Pending Approval";

      case "approved":
        return "Approved";

      case "rejected":
        return "Rejected";

      default:
        return "Unknown";
    }
  };

  
 

  const isRejected = service?.approvalStatus === "rejected";
  // const isApproved = service?.approvalStatus === "approved";

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">

      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">

        {/* Category Details */}
        <div className="flex gap-3 items-center min-w-0">

          <div
            className="w-16 h-16 flex items-center justify-center rounded-full shrink-0"
            style={{
              backgroundColor:
                service?.category?.backgroundColor || "#F3F4F6",
            }}
          >
            <img
              src={service?.category?.icon?.url}
              alt={service?.category?.name || "Service"}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="flex flex-col gap-1 min-w-0">

            <h2 className="text-lg font-semibold text-text">
              {service?.category?.name}
            </h2>

            <p className="text-sm font-medium text-brownness line-clamp-2">
              {service?.description ||
                service?.category?.description ||
                "No description available"}
            </p>

          </div>
        </div>

        {/* Toggle & Approval Status */}
        <div className="flex flex-col gap-3 items-end shrink-0">

          <ToggleSwitch
            enabled={status}
            onChange={handleToggle}
          />

          <StatusBudge
            badge={formatApprovalStatus(service?.approvalStatus)}
          />

        </div>
      </div>

      {/* Rejection Reason */}
      {isRejected && (
        <div className="mt-5 p-3 rounded-xl bg-red-50 border border-red-200">

          <div className="flex items-center gap-2 mb-2">

            <MdOutlineWarningAmber
              size={20}
              className="text-red-600 shrink-0"
            />

            <h3 className="text-sm font-semibold text-red-700">
              Service Rejected
            </h3>

          </div>

          <p className="text-sm text-red-600 leading-relaxed break-words">
            {service?.rejectionReason ||
              "No rejection reason provided by admin."}
          </p>

        </div>
      )}

      {/* Pending Information */}
      {service?.approvalStatus === "pending" && (
        <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200">

          <p className="text-sm text-amber-700">
            Your service is waiting for admin approval.
          </p>

        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-200 my-5" />

      {/* Bottom Section */}
      <div className="flex items-center justify-between gap-4 flex-wrap">

        {/* Price */}
        <div className="flex gap-2 items-center">

          <span className="h-12 w-12 rounded-lg bg-green-100 text-green-500 flex items-center justify-center shrink-0">
            <MdOutlineCurrencyRupee size={24} />
          </span>

          <div className="flex flex-col gap-1">

            <p className="text-sm text-muted font-semibold">
              Price
            </p>

            <div className="flex items-center gap-1">

              <MdOutlineCurrencyRupee size={18} />

              <h3 className="text-lg font-bold">
                {service?.pricing?.price?.toLocaleString("en-IN") ?? 0}
              </h3>

            </div>


          </div>
        </div>

        {/* Experience */}
        <div className="flex gap-2 items-center">

          <span className="h-12 w-12 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
            <MdOutlineWorkOutline size={24} />
          </span>

          <div className="flex flex-col gap-1">

            <p className="text-sm text-muted font-semibold">
              Experience
            </p>

            <h3 className="text-lg font-bold">
              {service?.experience ?? 0}{" "}
              {service?.experience === 1 ? "Year" : "Years"}
            </h3>

          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Edit Button */}
          <button
            type="button"
            className="w-14 h-14 rounded-xl bg-gray-100 flex flex-col items-center justify-center text-muted hover:text-blue-500 hover:bg-blue-100 transition cursor-pointer"
          >
            <MdOutlineModeEdit size={24} />

            <p className="text-[10px] font-medium">
              Edit
            </p>
          </button>

          {/* Delete Button */}
          <button
            type="button"
            className="w-14 h-14 rounded-xl bg-red-50 flex flex-col items-center justify-center text-red-500 hover:bg-red-100 transition cursor-pointer"
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

export default ServicesList;
