import React from "react";
import Button from "../../../components/common/Button";
import UserInfo from "../../../components/common/admin/UserInfo";

import {
  MdOutlineChevronLeft,
  MdOutlineEmail,
  MdOutlineFileDownload,
  MdOutlinePhone,
  MdWorkOutline,
  MdOutlineReceipt,
  MdOutlinePayments,
} from "react-icons/md";

import { CiLocationOn } from "react-icons/ci";
const InfoRow = ({ label, value, last = false }) => (
  <div
    className={`flex items-center justify-between py-3 ${
      !last ? "border-b border-gray-100" : ""
    }`}
  >
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-sm font-semibold text-gray-800">{value}</p>
  </div>
);
const PaymentTransitionDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Transaction Details
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Complete payment and booking information
            </p>
          </div>

          <Button color="green">
            <MdOutlineChevronLeft size={20} />
            Back
          </Button>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">#TXN1023</h2>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-semibold text-green-600">
                  Paid
                </span>
              </div>
            </div>

            <div className=" mt-3">
             
              <p className="text-sm text-gray-500">May 12, 2024 at 10:20 AM</p>

             
            </div>
          </div>

          <Button color="purple">
            <MdOutlineFileDownload size={20} />
            View Invoice
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex  gap-3">
        {/* Transaction Information */}
        <div className="xl:col-span-4 flex-1">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-800">
                Transaction Information
              </h2>

              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <MdOutlineReceipt size={22} className="text-indigo-600" />
              </div>
            </div>

            <InfoRow label="Transaction ID" value="#TXN03423" />

            <InfoRow label="Booking ID" value="#BKO03423" />

            <InfoRow label="Service Category" value="Plumbing" />

            <InfoRow label="Payment Method" value="UPI" />

            <InfoRow label="Gateway ID" value="PAYTM24234" />

            <InfoRow label="Date & Time" value="May 12, 2024 at 12:30 PM" />

            <InfoRow label="Status" value="Successful" last />
          </div>
        </div>
        <div className="space-y-2 flex-1">
          {/* Customer */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Customer Details
              </h2>

              <UserInfo
                image="https://randomuser.me/api/portraits/women/34.jpg"
                name="Ram Sharma"
                id="#USR0934"
              />

              <div className="border-t border-gray-100 my-3"></div>
              <div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <MdOutlinePhone size={20} className="text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-700">+91 75343 23452</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <MdOutlineEmail size={20} className="text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-700">ram343@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <CiLocationOn size={20} className="text-orange-600" />
                  </div>
                  <p className="text-sm text-gray-700">
                    Block A, Sector 2, Noida
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Provider */}
          <div className="xl:col-span-3 ">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <h2 className="text-lg font-bold text-gray-800 mb-5">
                Provider Details
              </h2>

              <UserInfo
                image="https://randomuser.me/api/portraits/men/55.jpg"
                name="Manish Kumar"
                id="#PRO0934"
              />

              <div className="border-t border-gray-100 my-3"></div>

             <div>
               <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <MdOutlinePhone size={20} className="text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700">+91 75343 23452</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                    <MdOutlineEmail size={20} className="text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-700">manish@gmail.com</p>
                </div>

                
              </div>
              <div className="flex items-center gap-3 mt-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <MdWorkOutline size={20} className="text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700">5+ Years Experience</p>
                </div>
             </div>
            </div>
          </div>
        </div>
        {/* Payment Breakdown */}
        {/* Payment Breakdown */}
<div className="xl:col-span-2 flex-1">
  <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-2xl border border-green-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-bold text-gray-800">
        Payment Breakdown
      </h2>

      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
        <MdOutlinePayments size={22} className="text-green-600" />
      </div>
    </div>

    {/* Status */}
    <div className="mt-4">
      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
        Payment Successful
      </span>
    </div>

    {/* Total Amount */}
    <div className="text-center py-6">
      <h1 className="text-4xl font-bold text-green-600">
        ₹1,200
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Total Payment Received
      </p>
    </div>

    {/* Breakdown */}
    <div className="space-y-3">
      <div className="flex justify-between">
        <p className="text-gray-600">Service Amount</p>
        <p className="font-semibold">₹1,200</p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-600">Platform Fee</p>
        <p className="font-semibold text-red-500">
          ₹100
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-600">
          Provider Earnings
        </p>
        <p className="font-semibold text-green-600">
          ₹1,100
        </p>
      </div>

      <div className="flex justify-between">
        <p className="text-gray-600">Commission</p>
        <p className="font-semibold text-orange-500">
          8.3%
        </p>
      </div>
    </div>

   
    <div className="mt-auto">
      <div className="border-t border-green-200 pt-4 mt-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">
            Total Paid
          </h3>

          <p className="text-2xl font-bold text-green-600">
            ₹1,200
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>

          <span className="text-sm font-medium text-green-600">
            Paid Successfully
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Processed on 12 May 2024 at 10:20 AM
        </p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default PaymentTransitionDetails;
