import React from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import Button from "../../../components/common/Button";

const PaymentDetailsModal = ({ close }) => {
  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        p-4
      "
      onClick={close}
    >
      <div
        className="
          w-full max-w-lg
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3">
              <MdOutlinePayments className="text-2xl text-green-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Payment Details
              </h2>
              <p className="text-sm text-slate-500">
                Transaction Information
              </p>
            </div>
          </div>

          <button
            onClick={close}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <IoClose className="text-2xl text-slate-700" />
          </button>
        </div>

        {/* Payment Status */}
        <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">
              Payment Status
            </span>

            <span
              className="
                rounded-full
                bg-green-100
                px-3 py-1
                text-xs font-semibold
                text-green-700
              "
            >
              Paid
            </span>
          </div>

          <h3 className="mt-2 text-3xl font-bold text-green-600">
            ₹1,200
          </h3>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Transaction ID</span>
            <span className="font-medium text-slate-800">
              TXN-45872913
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Booking ID</span>
            <span className="font-medium text-slate-800">
              BK-10234
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Payment Method</span>
            <span className="font-medium text-slate-800">
              UPI
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Payment Date</span>
            <span className="font-medium text-slate-800">
              29 May 2026
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Payment Time</span>
            <span className="font-medium text-slate-800">
              10:45 AM
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-3">
            <span className="text-slate-500">Customer</span>
            <span className="font-medium text-slate-800">
              John Doe
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-500">Provider</span>
            <span className="font-medium text-slate-800">
              Aman Sharma
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          

          <Button color="white">Close</Button>
          <Button color="blue">Download Receipt</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsModal;