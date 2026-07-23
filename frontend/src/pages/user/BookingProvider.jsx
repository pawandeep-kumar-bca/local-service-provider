import React from "react";
import { CiCalendar, CiCalendarDate, CiClock2 } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoLocationOutline, IoStarHalf } from "react-icons/io5";
import { MdOutlinePlumbing, MdOutlineStarPurple500 } from "react-icons/md";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { useNavigate } from "react-router-dom";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { LuDot } from "react-icons/lu";
const BookingProvider = ({ data }) => {
  const navigate = useNavigate();
  const { name, profession, date, image, status } = data;
  return (
    <div className="bg-bg backdrop-blur-sm border border-muted bg-white hover:scale-[1.02] ease-in-out shadow-[0_5px_15px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] transition-all duration-300  rounded-lg p-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-success">#bkooo</h1>

        <StatusBadge badge={status} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 md:gap-3 items-center">
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
            <h3 className="text-sm md:text-xl font-semibold ">{name}</h3>
            <div className="flex gap-1 items-center text-sm font-semibold">
              <FaRegStarHalfStroke className="text-orange-500" />
              <p>4.5</p>

              <p>-</p>
              <p>120 Reviews</p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePlumbing className=" text-xl text-muted " />
              <p className="text-text text-sm  font-semibold">{profession}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Call */}
          <button
            className="
              flex items-center justify-center w-10 h-10 
              md:w-11 md:h-11 text-xl
 md:text-2xl rounded-xl cursor-pointer
              bg-green-50 border border-green-300 text-green-600
              hover:bg-green-100
              hover:-translate-y-0.5
              transition-all duration-300             "
          >
            <IoMdCall />
          </button>

          {/* Chat */}
          <button
            className="
              flex items-center justify-center
              w-10 h-10 
              md:w-11 md:h-11 text-xl
 md:text-2xl rounded-xl cursor-pointer
              bg-blue-50 border border-blue-300 text-blue-600
              hover:bg-blue-100
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            <BiMessageRoundedDetail size={22} />
          </button>
        </div>
      </div>
      <div className="w-full border-t border-gray-200 my-3"></div>
      <div
        className="flex flex-col
      gap-3 mb-4"
      >
        <div className="flex gap-2 items-center">
          <CiCalendar size={22} className="text-muted mt-0.5 shrink-0" />

          <span
            className="flex flex-wrap items-center
               text-sm md:text-base font-medium text-gray-700"
          >
            <p>{date}</p>

            <LuDot size={18} />

            <p>3:00 PM - 4:00 PM</p>
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <IoLocationOutline size={22} className="text-muted mt-0.5 shrink-0" />

          <div>
            <p className="text-sm md:text-base font-medium text-gray-700">
              Vaishali Nagar, Jaipur
            </p>

            <p className="text-xs text-muted mt-1">2.5 KM away from you</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-200 my-3"></div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Total Amount</span>
       <div className="text-center">
        <div >
          {/* <span className="text-xs bg-green-50 py-1 px-2 border text-green-500 border-green-200 rounded mb-1 inline-block">Online Paid</span> */}
          <span className="text-xs bg-blue-50 py-1 px-2 border text-blue-500 border-blue-200 rounded mb-1 inline-block md:font-semibold">Cash on Delivery</span>
        </div>
         <span className="text-sm font-semibold text-green-600">₹ 500</span>
       </div>
      </div>
      <div className="flex gap-2 items-center w-full mb-4 mt-5">
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
