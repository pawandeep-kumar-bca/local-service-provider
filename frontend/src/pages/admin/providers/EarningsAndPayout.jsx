import React from "react";

import { MdOutlinePayments, MdPayments, MdTrendingUp } from "react-icons/md";

import {
  FaIndianRupeeSign,
  FaWallet,
  FaClock,
  FaClockRotateLeft,
} from "react-icons/fa6";

import StatusBadge from "../../../components/common/StatusBadge";
import { IoWalletOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";

const earningStats = [
  {
    title: "Total Earnings",
    value: "₹48,500",
    Icon: <IoWalletOutline size={26} />,
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },

  {
    title: "Pending Payout",
    value: "₹6,200",
    Icon: <FaClockRotateLeft size={26} />,
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
  },

  {
    title: "Completed Payouts",
    value: "₹42,300",
    Icon: <MdPayments size={26} />,
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
  },

  {
    title: "Total Transactions",
    value: 32,
    Icon: <CiBank size={26} />,
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
  },
];

const EarningsAndPayout = () => {
  return (
    <div className="space-y-6">
      {/* top */}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Earnings & Payouts</h1>

          <p className="text-sm text-muted mt-1">
            Track provider earnings and payout history.
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            bg-green-50
            text-green-600
            px-4 py-2
            rounded-xl
            font-semibold
            hover:bg-green-100
            transition-all
            h-fit
          "
        >
          <MdOutlinePayments size={20} />
          Process Payout
        </button>
      </div>

      {/* stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {earningStats.map((item, index) => (
          <div
            key={index}
            className="
              border border-white
              rounded-xl
              p-5
              bg-white shadow-sm
              hover:shadow-sm
              transition-all
            "
          >
            <div className="flex gap-4">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bgColor} ${item.textColor}`}
              >
                {item.Icon}
              </div>
              <div>
                <p className="text-sm text-muted font-medium">{item.title}</p>

                <h2 className="text-3xl font-bold text-text mt-1 text-start">
                  {item.value}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* payout history */}

      <div
        className="
          border border-gray-200
          rounded-3xl
          overflow-hidden
        "
      >
        {/* heading */}

        <div
          className="
            flex justify-between items-center
            px-6 py-4
            bg-gray-50
            border-b border-gray-200
          "
        >
          <div>
            <h2 className="text-xl font-bold text-text">Payout History</h2>

            <p className="text-sm text-muted mt-1">
              Recent provider payout transactions
            </p>
          </div>

          <select
            className="
              border border-gray-300
              px-3 py-2
              rounded-xl
              text-sm font-medium
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >
            <option>All Transactions</option>

            <option>Completed</option>

            <option>Pending</option>

            <option>Failed</option>
          </select>
        </div>

        <div>
          <div className="border-b border-gray-300 p-3 grid grid-cols-5 justify-items-center">
            <span className="text-lg font-bold">Transaction Id</span>
            <span className="text-lg font-bold">Amount</span>
            <span className="text-lg font-bold">Date</span>
            <span className="text-lg font-bold">Status</span>
            <span className="text-lg font-bold">Method</span>
          </div>
          <div className=" p-3 grid grid-cols-5 justify-items-center transition-all duration-300 hover:bg-gray-50">
            <span className="text-sm font-semibold text-blue-500">
              #TRA3322
            </span>
            <span className="text-sm font-semibold text-muted">₹4,300</span>
            <span className="text-sm font-semibold text-muted">
              May 20 ,2025
            </span>

            <div>
              <StatusBadge badge="completed" />
            </div>
            <span className="text-sm font-semibold text-muted">
              Bank Transfer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsAndPayout;
