import React from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import Button from "../../../components/common/Button";

const InvoiceDownloadModal = ({ close }) => {
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
          w-full max-w-2xl
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
            <div className="rounded-xl bg-blue-100 p-3">
              <HiOutlineDocumentText className="text-2xl text-blue-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Invoice
              </h2>
              <p className="text-sm text-slate-500">
                Invoice Preview & Download
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

        {/* Invoice Card */}
        <div className="rounded-2xl border border-slate-200 p-5">
          {/* Top */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Invoice #INV-2026-001
              </h3>
              <p className="text-sm text-slate-500">
                Issued on 29 May 2026
              </p>
            </div>

            <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Paid
            </div>
          </div>

          {/* Customer & Provider */}
          <div className="grid gap-4 py-5 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-slate-800">
                Customer
              </h4>

              <p className="text-sm text-slate-600">
                John Doe
              </p>

              <p className="text-sm text-slate-600">
                john@example.com
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-800">
                Provider
              </h4>

              <p className="text-sm text-slate-600">
                Aman Sharma
              </p>

              <p className="text-sm text-slate-600">
                Plumbing Service
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="border-t border-slate-200 py-4">
            <h4 className="mb-3 font-semibold text-slate-800">
              Service Details
            </h4>

            <div className="flex justify-between py-2">
              <span className="text-slate-600">
                Plumbing Service
              </span>

              <span className="font-medium">
                ₹1,000
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-slate-600">
                Service Fee
              </span>

              <span className="font-medium">
                ₹100
              </span>
            </div>

            <div className="flex justify-between py-2">
              <span className="text-slate-600">
                GST (18%)
              </span>

              <span className="font-medium">
                ₹180
              </span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-slate-200 pt-4">
            <div className="flex justify-between text-lg font-bold text-slate-800">
              <span>Total Amount</span>
              <span>₹1,280</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button color="white">Close</Button>

          <Button color="success">Download PDF</Button>

          
          <Button color="blue">Print Invoice </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDownloadModal;