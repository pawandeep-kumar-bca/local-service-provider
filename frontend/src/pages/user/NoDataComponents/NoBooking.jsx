import React from "react";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

const NoBooking = ({ status }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[500px] flex items-center justify-center px-4 md:py-10">
      <div className="w-full max-w-xl text-center">

        {/* Illustration */}
        <div
          className="mx-auto mb-7 w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center border border-blue-100 shadow-sm"
        >
          <img
            src="/assets/booking.svg"
            alt="No booking"
            className="w-[75%] h-[75%] object-contain"
          />
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            No {status} Booking Found
          </h1>

          <p className="max-w-md mx-auto text-sm md:text-base
                        text-gray-500 leading-6">
            You don't have any {status?.toLowerCase()} bookings right now.
            Explore our services and book a service that suits your needs.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <Button
            color="blue"
            size="md"
            onClick={() => navigate("/user/our-services")}
          >
            Explore Our Services
          </Button>
        </div>

        {/* Hint */}
        <p className="mt-4 text-xs text-gray-400">
          Find trusted professionals and book a service in just a few clicks.
        </p>
      </div>
    </div>
  );
};

export default NoBooking;