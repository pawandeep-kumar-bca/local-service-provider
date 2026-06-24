import React from "react";
import Button from "../../../components/common/Button";
import UserInfo from "../../../components/common/admin/UserInfo";
import {
  MdOutlineChevronLeft,
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineReport,
  MdOutlineCalendarToday,
  MdOutlineAssignment,
  MdOutlineWarningAmber,
  MdOutlineCheckCircle,
  MdOutlineBlock,
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

const ReportDetails = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-gray-900">
                Report #RPT1023
              </h1>

              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                Pending Investigation
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Created on 12 May 2024 at 10:20 AM
            </p>
          </div>

          <Button color="green">
            <MdOutlineChevronLeft size={20} />
            Back
          </Button>
        </div>
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-5">
        {/* Report Information */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold">
              Report Information
            </h2>

            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
              <MdOutlineReport
                size={22}
                className="text-red-600"
              />
            </div>
          </div>

          <InfoRow
            label="Report ID"
            value="#RPT1023"
          />
          <InfoRow
            label="Category"
            value="Fraud Activity"
          />
          <InfoRow
            label="Priority"
            value="High"
          />
          <InfoRow
            label="Status"
            value="Pending"
          />
          <InfoRow
            label="Booking ID"
            value="#BK2034"
            last
          />

          <div className="mt-5">
            <h3 className="font-semibold mb-2">
              Description
            </h3>

            <p className="text-sm text-gray-600 leading-6">
              Customer reported that the provider
              collected payment outside the platform
              and failed to complete the service.
            </p>
          </div>
        </div>

        {/* Reporter Details */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-5">
            Reporter Details
          </h2>

          <UserInfo
            image="https://randomuser.me/api/portraits/women/44.jpg"
            name="Priya Sharma"
            id="#USR2034"
          />

          <div className="border-t border-gray-100 my-4"></div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdOutlinePhone size={20} />
              <p>+91 9876543210</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineEmail size={20} />
              <p>priya@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <CiLocationOn size={20} />
              <p>Noida Sector 2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-5">
        {/* Reported Provider */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-5">
            Reported Provider
          </h2>

          <UserInfo
            image="https://randomuser.me/api/portraits/men/55.jpg"
            name="Manish Kumar"
            id="#PRO1023"
          />

          <div className="border-t border-gray-100 my-4"></div>

          <InfoRow
            label="Phone"
            value="+91 9876543210"
          />
          <InfoRow
            label="Email"
            value="manish@gmail.com"
          />
          <InfoRow
            label="Experience"
            value="5 Years"
          />
          <InfoRow
            label="Verification"
            value="Verified"
            last
          />
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold">
              Booking Details
            </h2>

            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <MdOutlineAssignment
                size={22}
                className="text-blue-600"
              />
            </div>
          </div>

          <InfoRow
            label="Booking ID"
            value="#BK2034"
          />
          <InfoRow
            label="Service"
            value="Plumbing"
          />
          <InfoRow
            label="Amount"
            value="₹1,200"
          />
          <InfoRow
            label="Payment Status"
            value="Paid"
          />
          <InfoRow
            label="Booking Date"
            value="12 May 2024"
            last
          />
        </div>
      </div>

      {/* Evidence */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-5">
          Evidence Attachments
        </h2>

        <div className="grid grid-cols-4 gap-4">
          <img
            src="https://picsum.photos/300/200?1"
            alt=""
            className="w-full h-40 rounded-xl object-cover border hover:scale-105 transition-all cursor-pointer"
          />

          <img
            src="https://picsum.photos/300/200?2"
            alt=""
            className="w-full h-40 rounded-xl object-cover border hover:scale-105 transition-all cursor-pointer"
          />

          <img
            src="https://picsum.photos/300/200?3"
            alt=""
            className="w-full h-40 rounded-xl object-cover border hover:scale-105 transition-all cursor-pointer"
          />

          <img
            src="https://picsum.photos/300/200?4"
            alt=""
            className="w-full h-40 rounded-xl object-cover border hover:scale-105 transition-all cursor-pointer"
          />
        </div>
      </div>

      {/* Admin Notes */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">
          Admin Notes
        </h2>

        <textarea
          rows={5}
          placeholder="Write investigation notes..."
          className="w-full border border-gray-200 rounded-xl p-4 outline-none focus:border-indigo-500 resize-none"
        />
      </div>

      {/* Actions */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
        <div className="flex justify-end gap-3">
          <Button color="red">
            <MdOutlineBlock size={20} />
            Suspend Provider
          </Button>

          <Button color="yellow">
            <MdOutlineWarningAmber size={20} />
            Reject Report
          </Button>

          <Button color="green">
            <MdOutlineCheckCircle size={20} />
            Resolve Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;