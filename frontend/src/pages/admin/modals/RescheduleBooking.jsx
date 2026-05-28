import { useState } from "react";
import DatePicker from "react-datepicker";

import { IoClose } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

import Button from "../../../components/common/Button";

import "react-datepicker/dist/react-datepicker.css";

const RescheduleBooking = ({ close }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
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
          w-full max-w-md
          rounded-2xl bg-white
          p-5 md:p-6
          shadow-[0_0_25px_rgba(0,0,0,0.12)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Reschedule Booking
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Update booking date and time.
            </p>
          </div>

          <button
            onClick={close}
            className="
              rounded-full p-2
              transition-all duration-200
              hover:bg-slate-100
              cursor-pointer
            "
          >
            <IoClose className="text-2xl text-slate-700" />
          </button>
        </div>

        {/* Form */}
        <div className="mt-3 space-y-5">
          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              New Date
            </label>

            <div className="relative w-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select new date..."
                wrapperClassName="w-full"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className="
                  w-full rounded-xl border border-slate-300
                  px-4 py-3 pr-11
                  text-sm text-slate-700
                  outline-none
                  transition-all duration-200
                  focus:border-primary
                  focus:ring-2 focus:ring-primary/20
                "
              />

              <CiCalendar
                className="
                  pointer-events-none
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-xl text-slate-500
                "
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label
              htmlFor="time"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              New Time
            </label>

            <div className="relative">
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="
                  w-full appearance-none
                  rounded-xl border border-slate-300
                  bg-white
                  px-4 py-3 pr-11
                  text-sm text-slate-700
                  outline-none
                  transition-all duration-200
                  focus:border-primary
                  focus:ring-2 focus:ring-primary/20
                  cursor-pointer
                "
              >
                <option value="">Select Time Slot</option>

                {timeSlots.map((time, idx) => (
                  <option value={time} key={idx}>
                    {time}
                  </option>
                ))}
              </select>

              <IoMdTime
                className="
                  pointer-events-none
                  absolute right-3 top-1/2
                  -translate-y-1/2
                  text-xl text-slate-500
                "
              />
            </div>
          </div>

          {/* Reason */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Reason (Optional)
            </label>

            <textarea
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Write reschedule reason..."
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
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-end gap-3">
          <Button
            color="white"
            onClick={close}
            className="min-w-[110px]"
          >
            Cancel
          </Button>

          <Button
            color="blue"
            className="min-w-[140px]"
          >
            Reschedule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RescheduleBooking;