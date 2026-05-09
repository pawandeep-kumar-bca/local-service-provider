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
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("Cash on Delivery");
const navigate = useNavigate()
  const paymentMethods = [
    {
      id: "upi",
      value: "UPI",
      icons: (
        <div className="flex items-center gap-4">
          <FaGooglePay className="text-[#ED8F15]" size={28} />
          <SiPhonepe className="text-[#5F259F]" size={28} />
          <SiPaytm className="text-[#00BAF2]" size={28} />
        </div>
      ),
    },

    {
      id: "card",
      value: "Credit / Debit Card",
      icons: (
        <div className="flex items-center gap-4">
          <RiVisaLine className="text-blue-700" size={30} />
          <RiMastercardLine className="text-[#FD9618]" size={28} />
          <FaCreditCard className="text-gray-700" size={26} />
        </div>
      ),
    },

    {
      id: "banking",
      value: "Net Banking",
      icons: (
        <MdAccountBalance className="text-green-600" size={28} />
      ),
    },

    {
      id: "cash",
      value: "Cash on Delivery",
    },
  ];

  return (
    <div className="md:shadow-[inset_0_0_3px_rgba(0,0,0,0.4)] md:p-4 rounded-lg">
      <div className="flex items-center  justify-end mb-2">
        
        <Button color="white">
          <MdOutlineKeyboardArrowLeft size={24} />
          Back
        </Button>
      </div>

      <div className="flex md:gap-5 flex-col md:flex-row">
       <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-5">
              Payment Method
            </h1>

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
                      onChange={(e) =>
                        setSelectedPayment(e.target.value)
                      }
                      className="w-4 h-4 accent-green-600"
                    />

                    <h2 className="font-semibold text-lg text-gray-800">
                      {method.value}
                    </h2>
                  </div>

                  {method.icons}
                </label>
              ))}
            </div>

            {/* Security Note */}

            <div className="flex items-center gap-2 mt-5 text-sm text-gray-500">
              <FaLock className="text-green-600" />
              <p >100% Secure Payments & Encrypted Transactions</p>
            </div>
          </div>


       <div className=" flex-1 mt-4 md:mt-0">
            <h1 className="text-2xl font-semibold mb-5">
              Payment Summary
            </h1>

            <div className="bg-white border rounded-xl overflow-hidden shadow-md">
              
              {/* Provider Info */}

              <div className="flex items-center gap-4 p-5">
                <img
                  src="/assets/profile.png"
                  alt="provider"
                  className="w-16 h-16 rounded-full object-cover border"
                />

                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Aman Gupta
                  </h2>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold text-lg">4.5</span>

                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-sm text-gray-500 font-medium">
                      (400 Reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-gray-200"></div>

              {/* Summary Details */}

              <div className="p-5 flex flex-col gap-4">
                
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Service
                  </h3>

                  <p className="font-semibold text-gray-800 text-lg">
                    Home Cleaning
                  </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Date & Time
                  </h3>

                  <p className="font-semibold text-gray-800 text-sm text-right">
                    21 May 2025, 11:00 AM - 01:00 PM
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-gray-500 font-medium text-lg">
                    Duration
                  </h3>

                  <p className="font-semibold text-gray-800 text-lg">
                    2 Hours
                  </p>
                </div>

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

              <div className="h-[1px] bg-gray-200"></div>

              {/* Total */}

              <div className="p-5 flex justify-between items-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900">
                  Total Amount
                </h2>

                <h2 className="flex items-center text-2xl font-bold text-green-600">
                  <MdOutlineCurrencyRupee />
                  520
                </h2>
              </div>
            </div>

            {/* Pay Button */}

            

            <Button fullWidth className="mt-4 py-3 text-lg rounded-xl" onClick={()=>navigate('/user/provider-details/booking-details/payment/success-payment')}>Pay Now
              <MdOutlineCurrencyRupee />
              520</Button>
          </div>
      </div>
    </div>
  );
};

export default Payment;
