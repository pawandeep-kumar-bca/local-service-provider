import React from "react";
import StatusBadge from "../../../components/common/StatusBadge";
import UserInfo from "../../../components/common/admin/UserInfo";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const BookingDetails = () => {
  return (
    <div className="p-6">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">
          Booking Details
        </h1>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

        {/* Booking Information */}
        <div className="shadow-[0_0_20px_rgba(0,0,0,0.10)] p-5 rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-5">
            Booking Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-500">Booking Id</span>
              <span className="font-medium">#BK04443</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Service</span>
              <span className="font-medium">Plumbing</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Date & Time</span>
              <span className="font-medium">
                May 12, 2023, 10:30 AM
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500">Status</span>
              <StatusBadge badge="completed" />
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Payment Status</span>
              <span className="text-green-600 font-medium">
                Paid
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Amount</span>
              <span className="font-semibold text-lg">
                ₹ 1,200
              </span>
            </div>
          </div>
        </div>

        {/* Customer */}
        <div className="shadow-[0_0_20px_rgba(0,0,0,0.10)] p-5 rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-5">
            Customer
          </h2>

          <UserInfo
            name="John"
            image="https://randomuser.me/api/portraits/men/30.jpg"
            id="#USE4943"
          />

          <div className="mt-5 space-y-4">

            <div className="flex items-center gap-3 text-gray-700">
              <IoCallOutline className="text-xl" />
              <p>+91 98453 24423</p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MdOutlineEmail className="text-xl" />
              <p>john.doe@example.com</p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">Address</p>

              <div className="flex gap-3 text-gray-700">
                <CiLocationOn className="text-2xl" />

                <p>
                  132, Green Park, New Delhi, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Provider */}
        <div className="shadow-[0_0_20px_rgba(0,0,0,0.10)] p-5 rounded-xl bg-white">
          <h2 className="text-xl font-semibold mb-5">
            Provider
          </h2>

          <UserInfo
            name="John"
            image="https://randomuser.me/api/portraits/men/30.jpg"
            id="#USE4943"
          />

          <div className="mt-5 space-y-4">

            <div className="flex items-center gap-3 text-gray-700">
              <IoCallOutline className="text-xl" />
              <p>+91 98453 24423</p>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <MdOutlineEmail className="text-xl" />
              <p>john.doe@example.com</p>
            </div>

            <div>
              <p className="text-gray-500 mb-2">Address</p>

              <div className="flex gap-3 text-gray-700">
                <CiLocationOn className="text-2xl" />

                <p>
                  132, Green Park, New Delhi, India
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingDetails;