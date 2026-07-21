import React from "react";
import { FaCalendarAlt, FaCheck, FaCreditCard, FaLock, FaStar } from "react-icons/fa";
import { MdHome, MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../../components/common/Button";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import ViewProviderBookingDetails from "./ViewProviderBookingDetails";
const SuccessfulPayment = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const bookingData = state?.booking
    
    return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-4 rounded-lg md:flex md:gap-3">
      {/* left side */}
      <div className="flex-1 md:shadow-[0_0_24px_rgba(0,0,0,0.24)] md:px-3 rounded-lg pb-7 pt-3">
        <div className="relative flex items-center justify-center mt-12 mb-12">
          {/* Decorative Dots */}

          <div className="absolute -top-5 right-32 w-3 h-3 bg-red-500 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute top-2 left-28 w-2.5 h-2.5 bg-blue-500 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute bottom-3 left-32 w-3 h-3 bg-orange-400 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute bottom-6 right-28 w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute -bottom-4 right-40 w-2 h-2 bg-pink-500 rounded-full opacity-70 animate-ping"></div>

          <div className="absolute top-10 right-16 w-2.5 h-2.5 bg-purple-500 rounded-full opacity-60 animate-ping"></div>

          <div className="absolute bottom-10 left-16 w-2 h-2 bg-cyan-500 rounded-full opacity-60 animate-ping"></div>

          {/* Glow Ring */}

          <div className="absolute w-[9rem] h-[9rem] bg-green-200 rounded-full animate-ping opacity-20"></div>
    <div className="absolute w-[8rem] h-[8rem] border-2 border-dashed border-green-300 rounded-full animate-spin"></div>
          

          {/* Success Icon */}

          <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-full w-[6rem] h-[6rem] flex items-center justify-center z-10 shadow-[0_10px_35px_rgba(34,197,94,0.45)]">
            <FaCheck className="text-white text-4xl" />
          </div>
        </div>

        <div className="text-center mt-5 mb-4">
          <h1 className="text-4xl font-bold mb-3">
            Payment <span className="text-green-700">Successful!</span>
          </h1>
          <p className="text-lg font-semibold text-muted">
            Your booking has been confirmed
          </p>
        </div>

        <div className="shadow-[0_3px_25px_rgba(0,0,0,0.24)] py-6 px-7 md:py-3 mx-auto w-min rounded-2xl flex flex-col items-center">
          <p className="text-xl font-semibold mb-1">Booking ID</p>
          <h1 className="text-green-700 font-bold text-3xl md:text-2xl">
            #{bookingData?.bookingId}
          </h1>
        </div>
        <div className="text-center mt-6 text-lg">
          <p>A confirmation email has been sent to</p>
          <strong>{bookingData?.userSnapshot?.email}</strong>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 text-lg text-gray-500">
          <FaLock className="text-green-600" />
          <p>100% Secure Payment</p>
        </div>
        <div className="flex justify-center mt-15 md:mt-10">
          <Button
            color="success"
            className="  text-2xl md:text-xl md:py-2 py-3 px-10"
           onClick={()=>navigate('/user/dashboard')}>
            <MdHome className="text-3xl md:text-2xl" /> Back to Home
          </Button>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 hidden md:block shadow-[0_0_24px_rgba(0,0,0,0.24)] md:px-5 rounded-lg py-5">
        <ViewProviderBookingDetails layout="col" bookingData={bookingData}/>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
