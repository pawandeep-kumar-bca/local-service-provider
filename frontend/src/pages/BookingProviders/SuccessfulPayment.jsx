import React from "react";
import { FaCalendarAlt, FaCheck, FaCreditCard, FaLock, FaStar } from "react-icons/fa";
import { MdHome, MdOutlineCurrencyRupee } from "react-icons/md";
import Button from "../../components/common/Button";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const SuccessfulPayment = () => {
    const navigate = useNavigate()
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
            #BK10234
          </h1>
        </div>
        <div className="text-center mt-6 text-lg">
          <p>A confirmation email has been sent to</p>
          <strong>aman.gupta@esx.com</strong>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3 text-lg text-gray-500">
          <FaLock className="text-green-600" />
          <p>100% Secure Payment</p>
        </div>
        <div className="flex justify-center mt-15 md:mt-3">
          <Button
            color="success"
            className="  text-2xl md:text-xl md:py-2 py-3 px-10"
           onClick={()=>navigate('/user')}>
            <MdHome className="text-3xl md:text-2xl" /> Back to Home
          </Button>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 hidden md:block shadow-[0_0_24px_rgba(0,0,0,0.24)] md:px-5 rounded-lg py-5">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <FaCalendarAlt className="text-green-600"/> Booking Details
        </h1>
        <div className="h-px flex-1 bg-muted my-4"></div>

        <div className="flex gap-1 items-center">
          <img
            src="/assets/profile.png"
            alt="provider"
            className="w-[5rem] h-[5rem] rounded-full object-cover"
          />
          <div className="flex justify-between w-full">
            <div>
              <h1>Aman Gupta</h1>
              <div className="flex gap-1 items-center" >
                <FaStar className="text-xl text-yellow-500"/>
                <h3 className="text-green-600 font-bold text-xl">4.8</h3>
                <h3 className="text-sm font-semibold text-muted">(400 Reviews)</h3>
              </div>
            </div>
            
            <h3 className="bg-green-50  py-2 px-3 font-semibold rounded-md text-green-600 border h-min">Home Cleaning</h3>
          </div>
        </div>

        <div className="h-px flex-1 bg-muted my-4"></div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted">
              <FaCalendarAlt />
              <h3>Date & Time</h3>
            </div>
            <p className="text-text font-semibold text-lg">21 May 2025 , 11:00 AM - 01:20PM</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted">
              <AiFillClockCircle />
              <h3>Duration</h3>
            </div>
            <p className="text-text font-semibold text-lg">2 Hours</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted">
              <FaLocationDot />
              <h3>Address</h3>
            </div>
            <p className="text-text font-semibold text-lg max-w-[18rem] text-right">211B Baker Street, London, Uk</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted">
              <FaCreditCard />
              <h3>Payment Method</h3>
            </div>
            <p className="text-text font-semibold text-lg">UPI</p>
          </div>
        </div>
        <div className="h-px flex-1 bg-muted my-4"></div>
        <div>
          <h1 className="text-text font-semibold text-2xl mb-4">Payment Summary</h1>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 font-medium text-lg flex items-center">
                Price (
                <MdOutlineCurrencyRupee />
                250 × 2)
              </h3>

              <p className="font-semibold text-gray-800 text-lg flex items-center">
                <MdOutlineCurrencyRupee />
                500
              </p>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 font-medium text-lg">
                Platform Fee
              </h3>

              <p className="font-semibold text-gray-800 text-lg flex items-center">
                <MdOutlineCurrencyRupee />
                20
              </p>
            </div>
            <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-green-600">Total Amount</h2>

              <h2 className="flex items-center text-2xl font-bold text-green-600">
                <MdOutlineCurrencyRupee />
                520
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
