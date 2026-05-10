import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose, MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { RiBillLine } from "react-icons/ri";
import { IoIosWarning, IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import StatusBadge from "../../components/common/StatusBadge";
const ConfirmReschedule = ({ setOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed flex items-center justify-center inset-0 bg-black/40 z-50 backdrop-blur-sm ">
      <div className="w-full h-full md:max-w-md md:h-auto bg-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] animate-in zoom-in-95 fade-in duration-200 relative overflow-y-auto px-5 py-7 md:rounded-2xl">
        <button
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <MdClose className="text-2xl text-gray-600" />
        </button>

        

     {/*  __________________________________*/} 

      <div>
            <h1 className="text-2xl font-bold text-center mb-7">
              Reschedule Confirmed
            </h1>
          <div className="relative flex items-center justify-center mt-12 mb-12">
          {/* Decorative Dots */}

          <div className="absolute -top-5 right-30 w-3 h-3 bg-green-500 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute -top-4 left-20 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute bottom-3 left-25 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute bottom-6 right-28 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute -bottom-4 right-20 w-2 h-2 bg-pink-500 rounded-full opacity-70 animate-ping"></div>
 <div className="absolute -bottom-4 left-20 w-2 h-2 bg-pink-500 rounded-full opacity-70 animate-ping"></div>
          <div className="absolute top-10 right-16 w-2.5 h-2.5 bg-purple-500 rounded-full opacity-60 animate-ping"></div>

          <div className="absolute bottom-15 left-16 w-2 h-2 bg-cyan-500 rounded-full opacity-60 animate-ping"></div>

          {/* Glow Ring */}

          <div className="absolute w-[9rem] h-[9rem] bg-green-200 rounded-full animate-ping opacity-20"></div>
          <div className="absolute w-[8rem] h-[8rem] border-2 border-dashed border-green-300 rounded-full animate-spin"></div>

          {/* Success Icon */}

          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-full w-[6rem] h-[6rem] flex items-center justify-center z-10 shadow-[0_10px_35px_rgba(34,197,94,0.45)]">
            <FaCheck className="text-white text-4xl" />
          </div>
        </div>

            <div className="text-center mt-8">
              <h1 className="  text-2xl font-bold text-center mb-2">
                Reschedule <span className="text-green-600">Confirmed</span>!
              </h1>
              <p className="font-semibold text-muted">
                Your booking has been reschedule successfully.
              </p>
            </div>

            <div className="bg-white shadow-[0_0_20px_rgba(255,255,255,0.9),0_8px_25px_rgba(0,0,0,0.12)] rounded-lg p-3 my-4 border border-muted">
              <div className="flex items-center">
                <img
                  src="/assets/profile.png"
                  alt="provider"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h1 className="text-lg font-semibold">Aman Gupta </h1>
                    <p className="text-sm font-semibold text-muted">
                      Electrician
                    </p>
                  </div>
                  <StatusBadge badge="upcoming" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <CiCalendarDate size={22} className="text-orange-500" />
                    <h1 className="text-semibold text-lg text-muted">Date</h1>
                  </div>
                  <h2 className="font-semibold">23 May 2026</h2>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <IoMdTime size={22} className="text-cyan-500" />
                    <h1 className="text-semibold text-lg text-muted">Time</h1>
                  </div>
                  <h2 className="font-semibold">01:23 PM - 03:00 PM</h2>
                </div>
                <div className="flex justify-between">
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

            <div className="w-full font-semibold mt-7">
              <Button
              fullWidth
            color="success"
            className="  text-2xl md:text-xl md:py-2 py-3 px-10"
            onClick={() => navigate("/user")}
          >
            <MdHome className="text-3xl md:text-2xl" /> Back to Home
          </Button>
            </div>
          </div>
     {/*  __________________________________*/} 




      </div>
    </div>
  );
};

export default ConfirmReschedule;
