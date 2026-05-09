import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { FaCalendarAlt, FaCreditCard, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosArrowBack, IoMdClock } from "react-icons/io";
import Button from "../../components/common/Button";

const ViewProviderBookingDetails = ({ layout = "row" }) => {
  return (
    <div>
      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          <FaCalendarAlt className="text-green-600" />
          Booking Details
        </h1>

        <Button color="white">
          <IoIosArrowBack />
          Back
        </Button>
      </div>

      <div className="h-px flex-1 bg-muted my-3"></div>

      {/* Provider */}

      <div className="flex gap-2 items-center">
        <img
          src="/assets/profile.png"
          alt="provider"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div className="flex justify-between w-full items-center">
          <div>
            <h1 className="text-xl font-semibold">Aman Gupta</h1>

            <div className="flex gap-1 items-center">
              <FaStar className="text-xl text-yellow-500" />

              <h3 className="text-green-600 font-bold text-xl">4.8</h3>

              <h3 className="text-sm font-semibold text-muted">
                (400 Reviews)
              </h3>
            </div>
          </div>

          <h3 className="bg-green-50 md:py-2 md:px-3 md:text-xl font-semibold rounded-md text-green-600 border h-min text-sm py-1 px-2">
            Home Cleaning
          </h3>
        </div>
      </div>

      <div className="h-px w-full bg-muted my-4"></div>

      {/* Main Layout */}

      <div
        className={`flex flex-col gap-3 ${
          layout === "row" ? "md:flex-row" : "md:flex-col"
        }`}
      >
        {/* Details Card */}

        <div className="flex flex-col gap-4 flex-1 md:shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl p-4">
          <h1 className="text-text font-semibold text-2xl mb-2">Details</h1>

          {/* Time */}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted min-w-[120px]">
              <IoMdClock />
              <h3>Time</h3>
            </div>

            <p className="text-text font-semibold text-sm md:text-lg text-right">
              11:00 AM - 01:20PM
            </p>
          </div>

          {/* Date */}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted min-w-[120px]">
              <FaCalendarAlt />
              <h3>Date</h3>
            </div>

            <p className="text-text font-semibold text-sm md:text-lg text-right">
              21 May 2025
            </p>
          </div>

          {/* Duration */}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted min-w-[120px]">
              <AiFillClockCircle />
              <h3>Duration</h3>
            </div>

            <p className="text-text font-semibold text-sm md:text-lg text-right">
              2 Hours
            </p>
          </div>

          {/* Address */}

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted min-w-[120px]">
              <FaLocationDot className="shrink-0" />
              <h3>Address</h3>
            </div>

            <div className="text-right max-w-[180px] md:max-w-[260px]">
              <p className="text-text font-semibold text-sm md:text-lg leading-5 md:leading-7 break-words">
                Rajgangapur
              </p>

              <p className="text-muted text-sm md:text-base">
                Primary School, Sultanganj
              </p>
            </div>
          </div>

          {/* Payment */}

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-muted min-w-[120px]">
              <FaCreditCard />
              <h3>Payment Method</h3>
            </div>

            <p className="text-text font-semibold text-sm md:text-lg text-right">
              UPI
            </p>
          </div>
        </div>

        {/* Mobile Divider */}

        <div className="h-px w-full bg-gray-300 md:hidden"></div>

        {/* Payment Summary */}

        <div className="flex-1 md:shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl overflow-hidden flex flex-col justify-between">
          {/* Top */}

          <div className="p-4">
            <h1 className="text-text font-semibold text-2xl mb-4">
              Payment Summary
            </h1>

            <div className="flex flex-col gap-5">
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
            </div>
          </div>

          {/* Bottom */}

          <div className="bg-gray-50 border-t border-gray-200 px-4 py-5 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-green-600">Total Amount</h2>

            <h2 className="flex items-center text-2xl font-bold text-green-600">
              <MdOutlineCurrencyRupee />
              520
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProviderBookingDetails;
