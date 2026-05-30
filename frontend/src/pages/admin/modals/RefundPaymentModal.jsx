import React, { useState } from "react";
import Button from "../../../components/common/Button";
import { IoClose } from "react-icons/io5";

const RefundPaymentModal = ({ close }) => {
  const [refundMethod, setRefundMethod] = useState("original");

  return (
    <div
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/40 backdrop-blur-sm
        p-4
        overflow-y-auto
      "
      onClick={close}
    >
      <div
        className="
          w-full max-w-md
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white
          p-5 md:p-6
          shadow-[0_0_25px_rgba(0,0,0,0.12)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            Refund Payment
          </h1>

          <button
            onClick={close}
            className="
              rounded-full p-2 cursor-pointer
              transition-all duration-200
              hover:bg-slate-100
              cursor-pointer
            "
          >
            <IoClose className="text-2xl text-slate-700" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Amount Paid */}
          <div className="rounded-xl border border-green-100 bg-green-50 p-4">
            <p className="text-sm font-medium text-slate-600">
              Amount Paid
            </p>
            <h3 className="mt-1 text-3xl font-bold text-green-600">
              ₹1,200
            </h3>
          </div>

          {/* Refund Amount */}
          <div>
            <label
              htmlFor="refundAmount"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Refund Amount
            </label>

            <div className="flex overflow-hidden rounded-xl border border-slate-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <div className="flex items-center bg-slate-100 px-4 text-lg font-semibold text-slate-600">
                ₹
              </div>

              <input
                type="number"
                id="refundAmount"
                placeholder="Enter refund amount"
                className="w-full px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Refund Reason */}
          <div>
            <label
              htmlFor="reason"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Refund Reason
            </label>

            <textarea
              id="reason"
              rows={4}
              placeholder="Enter refund reason..."
              className="
                w-full resize-none
                rounded-xl border border-slate-300
                px-4 py-3
                text-sm text-slate-700
                outline-none
                transition-all duration-200
                focus:border-primary
                focus:ring-2 focus:ring-primary/20
              "
            />
          </div>

          {/* Refund Method */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-700">
              Refund Method
            </p>

            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="refundMethod"
                  value="original"
                  checked={refundMethod === "original"}
                  onChange={(e) => setRefundMethod(e.target.value)}
                  className="h-4 w-4"
                />

                <span className="text-sm text-slate-700">
                  Original Payment Method
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="refundMethod"
                  value="bank"
                  checked={refundMethod === "bank"}
                  onChange={(e) => setRefundMethod(e.target.value)}
                  className="h-4 w-4"
                />

                <span className="text-sm text-slate-700">
                  Bank Transfer
                </span>
              </label>
            </div>

            {/* Bank Details */}
            {refundMethod === "bank" && (
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  className="
                    w-full rounded-xl border border-slate-300
                    px-4 py-3 outline-none
                    focus:border-primary
                    focus:ring-2 focus:ring-primary/20
                  "
                />

                <input
                  type="text"
                  placeholder="Account Number"
                  className="
                    w-full rounded-xl border border-slate-300
                    px-4 py-3 outline-none
                    focus:border-primary
                    focus:ring-2 focus:ring-primary/20
                  "
                />

                <input
                  type="text"
                  placeholder="IFSC Code"
                  className="
                    w-full rounded-xl border border-slate-300
                    px-4 py-3 outline-none
                    focus:border-primary
                    focus:ring-2 focus:ring-primary/20
                  "
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            color="white"
            onClick={close}
            className="min-w-[110px]"
          >
            Cancel
          </Button>

          <Button
            color="success"
            className="min-w-[150px]"
          >
            Process Refund
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RefundPaymentModal;