import React from "react";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePlumbing } from "react-icons/md";
import Button from '../../components/common/Button'
import StatusBadge from '../../components/common/StatusBadge'
const BookingProvider = () => {
  return (
    <div className="bg-bg shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] rounded-lg p-3">
      <div className="relative">
        <div className="absolute right-0">
            <StatusBadge badge="completed">Upcoming</StatusBadge>
        </div>
        <div className="flex gap-1 items-center">
            <img
          src="/assets/profile.png"
          alt="profile"
          className="object-cover w-[5rem] h-[5rem] rounded-full"
        />
        <div>
            <h3 className="text-xl font-semibold mb-2">Aman  Gupta</h3>
            <div className="flex items-center gap-1">
                <MdOutlinePlumbing className="text-xl text-muted "/>
                <p className="text-text font-semibold">Electrician</p>
            </div>
        </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-muted my-3"></div>
      <div className="flex flex-col
      gap-3 mb-5">
        <div className="flex gap-2 items-center">
            <CiCalendarDate className="text-2xl text-muted "/>
            <h3 className="text-lg font-semibold">23 May , 2026</h3>
        </div>
        <div className="flex gap-2 items-center">
            <CiClock2 className="text-2xl text-muted "/>
            <p className="text-sm font-semibold">02:00 PM - 04:30 PM </p>
        </div>
        <div className="flex gap-2 items-center">
        <IoLocationOutline className="text-2xl text-muted "/>
        <p className="text-sm font-semibold">343 apc,new delhi</p>
      </div>
      </div>
      
      <div className="flex gap-2 items-center w-full mb-4">
        <Button color="white" fullWidth>Reschedule</Button>
        <Button color="success" fullWidth>View</Button>
      </div>
    </div>
  );
};

export default BookingProvider;
