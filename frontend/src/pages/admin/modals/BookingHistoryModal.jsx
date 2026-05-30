import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../../components/common/Button";

const BookingHistoryModal = ({ close }) => {
  const history = [
    {
      title: "Booking Created",
      description: "Customer booked the service.",
      date: "12 May 2026",
      time: "10:00 AM",
    },
    {
      title: "Provider Assigned",
      description: "Aman Sharma assigned to this booking.",
      date: "12 May 2026",
      time: "10:15 AM",
    },
    {
      title: "Payment Received",
      description: "Payment of ₹1,200 received successfully.",
      date: "12 May 2026",
      time: "10:20 AM",
    },
    {
      title: "Service Started",
      description: "Provider started the service.",
      date: "13 May 2026",
      time: "09:00 AM",
    },
    {
      title: "Service Completed",
      description: "Booking marked as completed.",
      date: "13 May 2026",
      time: "11:30 AM",
    },
  ];

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
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Booking History
            </h2>
            <p className="text-sm text-slate-500">
              Complete timeline of booking activities
            </p>
          </div>

          <button
            onClick={close}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <IoClose className="text-2xl text-slate-700" />
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {history.map((item, index) => (
            <div key={index} className="relative flex gap-4 pb-5">
              {/* Line */}
              {index !== history.length - 1 && (
                <div className="absolute left-[11px] top-6 h-full w-[2px] bg-slate-200"></div>
              )}

              {/* Dot */}
              <div className="relative z-10 mt-1 h-6 w-6 rounded-full border-4 border-white bg-green-500 shadow"></div>

              {/* Content */}
              <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <span className="text-xs text-slate-500">
                    {item.date} • {item.time}
                  </span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-end">
          <Button color="white">Close</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryModal;