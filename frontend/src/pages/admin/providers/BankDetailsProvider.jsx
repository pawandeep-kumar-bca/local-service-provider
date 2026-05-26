import React from "react";
import { MdOutlineAccountBalance, MdOutlineVerified } from "react-icons/md";

import { FaRegCreditCard, FaRegClock } from "react-icons/fa";

import StatusBadge from "../../../components/common/StatusBadge";

const bankInfo = [
  {
    label: "Account Holder Name",
    value: "John Doe",
  },

  {
    label: "Bank Name",
    value: "State Bank of India",
  },

  {
    label: "Account Number",
    value: "8594 2323 4589",
  },

  {
    label: "IFSC Code",
    value: "SBIN0004589",
  },

  {
    label: "Branch",
    value: "New Delhi Main Branch",
  },

  {
    label: "UPI ID",
    value: "johndoe@upi",
  },
];

const BankDetailsProvider = () => {
  return (
    <div className="space-y-6">
      {/* top */}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-3 items-center">
          <div
            className="
              w-12 h-12
              rounded-xl
              bg-blue-100
              flex items-center justify-center
              text-blue-600
            "
          >
            <MdOutlineAccountBalance size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-text">Bank Details</h1>

            <p className="text-sm text-muted mt-1">
              Review provider bank account and payout details.
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-1">
          <button
            className="
              flex items-center gap-2
              bg-green-50
              text-green-600
              px-4 py-1
              rounded-xl cursor-pointer
              font-semibold
              hover:bg-green-100
              transition-all
            "
          >
            <MdOutlineVerified size={20} />
            Verify Bank
          </button>

          <button
            className="
              flex items-center gap-2
              bg-red-50 cursor-pointer
              text-red-600
              px-4 py-1
              rounded-xl
              font-semibold
              hover:bg-red-100
              transition-all
            "
          >
            Reject Details
          </button>
        </div>
      </div>

      {/* bank details */}

      <div
        className="
          border border-gray-200
          rounded-3xl
          overflow-hidden
        "
      >

        {/* content */}

        <div className="p-6 bg-gray-50">
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-x-16
              gap-y-5
            "
          >
            {bankInfo.map((item, index) => (
              <div key={index} className="space-y-1">
                <p className="text-sm text-muted font-medium">{item.label}</p>

                <h3 className="text-base font-semibold text-text break-all">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsProvider;
