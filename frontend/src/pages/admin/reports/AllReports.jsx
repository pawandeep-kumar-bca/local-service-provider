import React from "react";
import Button from "../../../components/common/Button";
import UserInfo from "../../../components/common/admin/UserInfo";

import {
  MdOutlineChevronLeft,
  MdOutlineReportProblem,
  MdOutlineAssignment,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdOutlineCheckCircle,
  MdOutlineBlock,
  MdOutlineWarningAmber,
  MdOutlineCalendarToday,
} from "react-icons/md";

const ReportDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">
                Report #RPT1023
              </h1>

              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
                Pending Investigation
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Created on May 12, 2024 at 10:20 AM
            </p>
          </div>

          <Button color="green">
            <MdOutlineChevronLeft size={20} />
            Back
          </Button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Report Info */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold">
              Report Information
            </h2>

            <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center">
              <MdOutlineReportProblem
                size={24}
                className="text-red-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Report ID
              </p>
              <p className="font-semibold mt-1">
                #RPT1023
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Priority
              </p>
              <p className="font-semibold text-red-500 mt-1">
                High
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Category
              </p>
              <p className="font-semibold mt-1">
                Fraud Activity
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Status
              </p>
              <p className="font-semibold text-yellow-600 mt-1">
                Pending
              </p>
            </div>
          </div>

          <div className="mt-5 bg-gray-50 rounded-2xl p-4">
            <p className="text-xs text-gray-500 mb-2">
              Description
            </p>

            <p className="text-sm text-gray-700 leading-6">
              Customer reported that the provider
              collected payment outside the platform
              and did not complete the requested
              plumbing service.
            </p>
          </div>
        </div>

        {/* Booking Info */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold">
              Booking Information
            </h2>

            <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
              <MdOutlineAssignment
                size={24}
                className="text-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Booking ID
              </p>
              <p className="font-semibold mt-1">
                #BK2034
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Service
              </p>
              <p className="font-semibold mt-1">
                Plumbing
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Amount
              </p>
              <p className="font-semibold mt-1">
                ₹1,200
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-500">
                Payment
              </p>
              <p className="font-semibold text-green-600 mt-1">
                Paid
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-gray-500">
            <MdOutlineCalendarToday />
            <span className="text-sm">
              12 May 2024
            </span>
          </div>
        </div>
      </div>

      {/* Reporter & Provider */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Reporter */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
          <h2 className="text-lg font-bold mb-5">
            Reporter Details
          </h2>

          <UserInfo
            image="https://randomuser.me/api/portraits/women/44.jpg"
            name="Priya Sharma"
            id="#USR2034"
          />

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <MdOutlinePhone className="text-blue-600" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineEmail className="text-purple-600" />
              <p>priya@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineLocationOn className="text-orange-600" />
              <p>Noida Sector 2</p>
            </div>
          </div>
        </div>

        {/* Provider */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
          <h2 className="text-lg font-bold mb-5">
            Reported Provider
          </h2>

          <UserInfo
            image="https://randomuser.me/api/portraits/men/55.jpg"
            name="Manish Kumar"
            id="#PRO2034"
          />

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3">
              <MdOutlinePhone className="text-blue-600" />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineEmail className="text-purple-600" />
              <p>manish@gmail.com</p>
            </div>

            <div className="flex items-center justify-between bg-green-50 rounded-xl px-4 py-3">
              <span className="text-sm">
                Verification Status
              </span>

              <span className="text-green-600 font-semibold">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Evidence */}
      <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
        <h2 className="text-lg font-bold mb-5">
          Evidence Attachments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group overflow-hidden rounded-2xl border"
            >
              <img
                src={`https://picsum.photos/400/300?random=${item}`}
                alt=""
                className="w-full h-44 object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Admin Notes */}
      <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
        <h2 className="text-lg font-bold mb-4">
          Admin Notes
        </h2>

        <textarea
          rows={5}
          placeholder="Write investigation notes..."
          className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-indigo-500 resize-none"
        />
      </div>

      {/* Actions */}
      <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
        <div className="flex flex-wrap justify-end gap-3">
          <Button color="red">
            <MdOutlineBlock />
            Suspend Provider
          </Button>

          <Button color="yellow">
            <MdOutlineWarningAmber />
            Reject Report
          </Button>

          <Button color="green">
            <MdOutlineCheckCircle />
            Resolve Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;