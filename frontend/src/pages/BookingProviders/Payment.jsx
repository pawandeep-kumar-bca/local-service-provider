import React, { useState } from "react";
import {
  MdAccountBalance,
  MdOutlineCurrencyRupee,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import Button from "../../components/common/Button";
import {
  FaCreditCard,
  FaGooglePay,
  FaLock,
  FaStar,
  FaUniversity,
} from "react-icons/fa";
import { SiPaytm, SiPhonepe } from "react-icons/si";

import { RiMastercardLine, RiVisaLine } from "react-icons/ri";
import { PiBankFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { IoMdCash } from "react-icons/io";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("cod");
  // const navigate = useNavigate();
  const paymentMethods = [
    {
      id: "upi",
      value: "upi",
      name:"UPI",
      icons: (
        <div className="flex items-center gap-4">
          <FaGooglePay className="text-[#ED8F15]" size={28} />
          <SiPhonepe className="text-[#5F259F]" size={28} />
          <SiPaytm className="text-[#00BAF2]" size={28} />
        </div>
      ),
    },

    {
      id: "cod",
      value: "cod",
      name:'Cash On Delivery',
      icons: (
        <div className="flex items-center gap-4">
          <IoMdCash className="text-green-600" size={28} />
        </div>
      ),
    },
  ];

  const { state } = useLocation();

  const booking = state?.booking;

  const bookingId = state?.booking?._id;
  console.log(bookingId);

  const handlePayment = () => {
    if (selectedPayment === "Cash on Delivery") {
      console.log("Cash On Delivery");
    } else {
      // UPI Payment
      // Yahan Razorpay / PhonePe / Payment Gateway open hoga
      console.log("Open Payment Gateway");
    }
  };

  return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-4 rounded-lg">
      <div className="flex items-center  justify-end mb-2">
        <Button color="white">
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div>
            <h1 className="text-2xl font-semibold mb-5">Payment Summary</h1>

            <div className="bg-white border rounded-xl overflow-hidden shadow-md">
              {/* Provider Info */}

              <div className="flex items-center gap-4 p-5">
                <img
                  src={booking.providerSnapshot?.profileImage?.url}
                  alt={booking.providerSnapshot?.name}
                  className="w-16 h-16 rounded-full object-cover border"
                />

                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {booking.providerSnapshot?.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold text-lg">
                      {booking.providerSnapshot?.rating}
                    </span>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-sm text-gray-500 font-medium">
                      {booking.providerSnapshot?.totalReview} Reviews
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200"></div>

              {/* Summary Details */}

              <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg">Service</h3>

                  <p className="font-semibold text-gray-800 text-lg">
                    {booking.serviceSnapshot?.categoryName}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Date & Time
                  </h3>

                  <p className="font-semibold text-gray-800 text-sm text-right">
                    {new Date(booking?.bookingDate).toLocaleDateString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                    , {booking?.bookingSlot?.startTime} -{" "}
                    {booking?.bookingSlot?.endTime}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Duration
                  </h3>

                  <p className="font-semibold text-gray-800 text-lg">
                    {booking?.durationHours} Hours
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg flex items-center">
                    Price (
                    <MdOutlineCurrencyRupee />
                    {booking?.pricing?.price} × {booking?.durationHours})
                  </h3>

                  <p className="font-semibold text-gray-800 text-lg flex items-center">
                    <MdOutlineCurrencyRupee />
                    {booking?.pricing?.serviceCharge}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Platform Fee
                  </h3>

                  <p className="font-semibold text-gray-800 text-lg flex items-center">
                    <MdOutlineCurrencyRupee />
                    {booking?.pricing?.platformFee}
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200"></div>

              {/* Total */}

              <div className="p-5 flex justify-between items-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900">
                  Total Amount
                </h2>

                <h2 className="flex items-center text-2xl font-bold text-green-600">
                  <MdOutlineCurrencyRupee />
                  {booking?.pricing?.totalAmount}
                </h2>
              </div>
            </div>

            {/* Pay Button */}
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-2xl font-semibold mb-5">Payment Method</h1>

            <div className="bg-white md:border rounded-xl md:p-3 md:shadow-sm">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  htmlFor={method.id}
                  className={`flex items-center justify-between border rounded-xl px-4 py-4 mb-3 cursor-pointer transition-all duration-300 min-h-[70px]
                  
                  ${
                    selectedPayment === method.value
                      ? "border-green-500 bg-green-50 shadow-sm"
                      : "hover:border-green-400 hover:bg-gray-50"
                  }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id={method.id}
                      name="payment"
                      value={method.value}
                      checked={selectedPayment === method.value}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 accent-green-600"
                    />

                    <h2 className="font-semibold text-lg text-gray-800">
                      {method.name}
                    </h2>
                  </div>

                  {method.icons}
                </label>
              ))}
            </div>

            {/* Security Note */}
            <div className="flex items-center gap-2 mt-5 text-sm text-gray-500">
              <FaLock className="text-green-600" />
              <p>100% Secure Payments & Encrypted Transactions</p>
            </div>
            <Button fullWidth onClick={handlePayment}>
              {selectedPayment === "cod" ? (
                "Book Service"
              ) : (
                <>
                  Pay Now
                  <MdOutlineCurrencyRupee />
                  {booking?.pricing?.totalAmount}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
