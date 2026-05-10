import React from "react";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePlumbing } from "react-icons/md";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { useNavigate } from "react-router-dom";
const BookingProvider = ({ data }) => {
  const navigate = useNavigate();
  const { name, profession, date, image, time, location, status } = data;
  return (
    <div
      className="bg-bg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02] ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300  rounded-lg p-3"
    >
      <div className="relative">
        <div className="absolute right-0">
          <StatusBadge badge={status}>{status}</StatusBadge>
        </div>
        <div className="flex gap-1 items-center">
          <div className="relative">
            <img
              src={image}
              alt="profile"
              className=" w-16 h-16 min-w-16 rounded-full object-cover border-4 border-white shadow-[0_10px_25px_rgba(0, 0.15)] ring-2 ring-primary/20 flex-shrink-0
    "
            />

            {/* Online Dot */}
            <div
              className=" absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-3 border-white shadow-sm
    "
            ></div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <div className="flex items-center gap-1">
              <MdOutlinePlumbing className="text-xl text-muted " />
              <p className="text-text font-semibold">{profession}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-muted my-3"></div>
      <div
        className="flex flex-col
      gap-3 mb-5"
      >
        <div className="flex gap-2 items-center">
          <CiCalendarDate className="text-2xl text-muted " />
          <h3 className="text-lg font-semibold">{date}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <CiClock2 className="text-2xl text-muted " />
          <p className="text-sm font-semibold">{time}</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoLocationOutline className="text-2xl text-muted " />
          <p className="text-sm font-semibold">{location}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center w-full mb-4">
        <Button
          color="white"
          fullWidth
          onClick={() => navigate("/user/my-bookings/reschedule-booking")}
        >
          Reschedule
        </Button>
        <Button
          color="success"
          fullWidth
          onClick={() => navigate("/user/my-bookings/booking-details")}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default BookingProvider;
