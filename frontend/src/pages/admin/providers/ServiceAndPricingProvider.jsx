import React from "react";

import {
  MdOutlineConstruction,
  MdOutlineEdit,
  MdOutlineVerified,
} from "react-icons/md";

import { FaIndianRupeeSign, FaClock } from "react-icons/fa6";

import StatusBadge from "../../../components/common/StatusBadge";

const services = [
  {
    id: 1,

    category: "Plumbing",

    price: "₹499",

    duration: "45 mins",

    status: "active",

    bookings: 42,
  },

  {
    id: 2,

    category: "Plumbing",

    price: "₹899",

    duration: "1 hr 30 mins",

    status: "active",

    bookings: 28,
  },

  {
    id: 3,

    category: "Plumbing",

    price: "₹699",

    duration: "1 hr",

    status: "inactive",

    bookings: 11,
  },
];

const ServiceAndPricingProvider = () => {
  return (
    <div className="space-y-6">
      {/* top */}

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Service & Pricing</h1>

          <p className="text-sm text-muted mt-1">
            Review provider services, pricing and booking performance.
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
          <MdOutlineVerified size={20} />
          Verify Pricing
        </button>
      </div>

      {/* services */}

      <div
        className="
          border border-gray-200
          rounded-2xl
          overflow-hidden
        "
      >
        {/* rows */}
        <div>
          <div className="grid grid-cols-6 bg-gray-100 p-3 justify-items-center items-center border-b border-gray-300">
            <span className="test-sm font-bold">Service Name</span>
            <span className="test-sm font-bold">Price(₹)</span>
            <span className="test-sm font-bold">Duration</span>
            <span className="test-sm font-bold">Total Bookings</span>
            <span className="test-sm font-bold">Status</span>
            <span className="test-sm font-bold">Action</span>
          </div>

          <div>
            {services.map((items) => (
              <div className="grid grid-cols-6 justify-items-center items-center p-3 transition-all duration-300 hover:bg-gray-100">
                <span className="text-sm text-muted font-semibold">{items.category}</span>
                <span className="text-sm text-muted font-semibold">{items.price}</span>
                <span className="text-sm text-muted font-semibold">{items.duration}</span>
                <span className="text-sm text-muted font-semibold">{items.bookings}</span>
                <div>
                  <StatusBadge badge="active" />
                </div>
                <button className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-lg border border-gray-300 cursor-pointer text-gray-400 transition-all duration-300 hover:bg-gray-200 ">
                  <MdOutlineEdit size={24} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAndPricingProvider;
