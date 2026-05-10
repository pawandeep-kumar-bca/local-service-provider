import React, { useState } from "react";
import { RiBillLine, RiErrorWarningLine } from "react-icons/ri";
import StatusBadge from "../../components/common/StatusBadge";
import Input from "../../components/common/Input";
import Button from '../../components/common/Button'
import { CiCalendar, CiCalendarDate } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaCalendarCheck ,FaRegCalendarCheck} from "react-icons/fa";
import ConfirmReschedule from "./ConfirmReschedule";
const RescheduleBooking = () => {
    const [open,setOpen] = useState(false)
  const timeSlots = [
    "12:00 AM - 1:00 AM",
    "1:00 AM - 2:00 AM",
    "2:00 AM - 3:00 AM",
    "3:00 AM - 4:00 AM",
    "4:00 AM - 5:00 AM",
    "5:00 AM - 6:00 AM",
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM",
    "9:00 PM - 10:00 PM",
    "10:00 PM - 11:00 PM",
    "11:00 PM - 12:00 AM",
  ];
  return (
    <>
    <div className="md:shadow-[inset_0_0_4px_rgba(0,0,0,0.56)] md:p-4 rounded-xl">
      <div>
        <h1 className="text-2xl font-semibold">Reschedule Booking</h1>
        <p className="text-sm text-muted">Change your booking date and time</p>
      </div>
      <div className="flex items-center gap-2 border border-green-500 p-3 rounded-lg bg-green-50 my-4">
        <RiErrorWarningLine size={20} className="text-green-500"/>
        <p className="text-green-500 text-sm">
          You are rescheduling an existing booking. Only date and time can be
          changed.
        </p>
      </div>
      <div>
        <div>
          <h1 className="text-xl font-semibold flex gap-2 items-center my-5"><FaRegCalendarCheck size={24} className="text-green-500"/>
            Current Booking <span className="text-sm text-muted">(Will be changed)</span>
          </h1>
          <div className="bg-white shadow-[0_0_20px_rgba(255,255,255,0.9),0_8px_25px_rgba(0,0,0,0.12)] rounded-lg md:px-3 p-3 md:py-0 my-4 border border-muted md:flex md:justify-between md:gap-4">
            <div className="flex items-center md:flex-1">
              <img
                src="/assets/profile.png"
                alt="provider"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex items-center justify-between w-full md:justify-start md:gap-7">
                <div>
                  <h1 className="text-lg font-semibold">Aman Gupta </h1>
                  <p className="text-sm font-semibold text-muted">
                    Electrician
                  </p>
                </div>
                <StatusBadge badge="upcoming" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-2 mt-3 md:flex-2 md:justify-between">
              <div className="flex justify-between md:flex-col md:items-center md:justify-start">
                <div className="flex items-center gap-1">
                  <CiCalendarDate size={22} className="text-orange-500" />
                  <h1 className="text-semibold text-lg text-muted">Date</h1>
                </div>
                <h2 className="font-semibold">23 May 2026</h2>
              </div>
              <div className="flex justify-between md:flex-col md:items-center md:justify-start">
                <div className="flex items-center gap-1">
                  <IoMdTime size={22} className="text-cyan-500" />
                  <h1 className="text-semibold text-lg text-muted">Time</h1>
                </div>
                <h2 className="font-semibold">01:23 PM - 03:00 PM</h2>
              </div>
              <div className="flex justify-between md:justify-start md:flex-col md:items-center">
                <div className="flex items-center gap-1">
                  <RiBillLine className="text-green-600" size={22} />

                  <h1 className="text-semibold text-lg text-muted">
                    Booking ID
                  </h1>
                </div>
                <h2 className="font-semibold">#BKD12342</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold flex gap-2 items-center my-5"><FaCalendarCheck size={24} className="text-green-500"/>Select New Date & Time</h1>
          <div className="flex md:gap-4 flex-col md:flex-row">
            <div className="flex-1">
                <Input id="date" type="date" label="Date" required />
            </div>
            <div className="flex flex-col relative flex-1">
              <label
                htmlFor="time"
                className="font-medium text-lg md:text-sm mb-2"
              >
                Time Slot <span className="text-red-500">*</span>
              </label>
              <IoMdTime className="absolute md:right-3 right-3 bottom-3 md:bottom-7 text-xl" />
              <select
                name="time"
                id="time"
                className="border px-3 py-2 text-lg rounded-lg w-full bg-white focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none appearance-none transition-all duration-300 cursor-pointer "
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map((time, idx) => (
                  <option value={time} key={idx}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 md:mt-0">
            <label htmlFor="notes" className="font-medium text-lg md:text-sm ">
              Reason for Reschedule (Optional)
            </label>
            <textarea
              rows={2}
              id="notes"
              name="notes"
              placeholder="Additional instructions..."
              className="border rounded-lg p-3 w-full resize-none focus:ring focus:ring-blue-500 focus:outline-none mt-2"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row  gap-3 md:gap-7 mt-5 md:mt-4">
        <Button color="gray" fullWidth>Cancel</Button>
        <Button color="success" fullWidth onClick={()=>setOpen(true)}><CiCalendar size={20} />Confirm Reschedule</Button>

      </div>
    </div>
    {
        open && <ConfirmReschedule setOpen={setOpen}/>
    }
    </>
  );
};

export default RescheduleBooking;
