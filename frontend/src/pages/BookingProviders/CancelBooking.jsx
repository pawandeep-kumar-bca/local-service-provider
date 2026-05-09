import React from "react";
import { MdClose } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";
import { IoMdTime } from "react-icons/io";
import { RiBillLine } from "react-icons/ri";
const CancelBooking = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className=" w-full h-full md:h-auto md:max-w-md bg-white px-5 py-7 md:rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] animate-in zoom-in-95 fade-in duration-200 relative overflow-y-auto">
        <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer">
          <MdClose className="text-2xl text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-center mb-7">
            Cancel Confirmed
          </h1>
          <div className="relative flex items-center justify-center mt-13 md:mt-0">
            {/* Decorative Dots */}

            <div className="absolute top-5 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>

            <div className="absolute top-2 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-70"></div>

            <div className="absolute bottom-0 left-15 w-2.5 h-2.5 bg-pink-500 rounded-full animate-ping opacity-70"></div>

            <div className="absolute -bottom-5 right-8 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70"></div>

            <div className="absolute top-0 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping opacity-60"></div>

            <div className="absolute top-12 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>

            {/* Glow Ring */}

            <div className="w-[5rem] h-[5rem] bg-red-300 rounded-full absolute animate-ping opacity-70"></div>

            <div className="absolute w-[6.5rem] h-[6.5rem] border-2 border-dashed border-red-200 rounded-full opacity-60"></div>

            {/* Main Icon */}

            <div className="w-[5rem] h-[5rem] text-white bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center z-10 shadow-[0_10px_30px_rgba(239,68,68,0.45)]">
              <MdClose size={50} />
            </div>
          </div>

          <div className="text-center mt-6">
            <h1 className="text-xl font-bold text-center mb-2">
              Booking Cancel{" "}
              <span className="text-red-500 text-2xl">Successfully</span> !
            </h1>
            <p className="w-[80%] mx-auto font-semibold text-muted">
              Your booking has been cancelled successfully.
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
                <StatusBadge badge="Cancelled" />
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

          <div className="w-full flex gap-4 flex-col md:flex-row font-semibold mt-7">
            <Button color="blue" fullWidth>
              Back to My Bookings
            </Button>
            <Button color="success" fullWidth>
              Book Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelBooking;
