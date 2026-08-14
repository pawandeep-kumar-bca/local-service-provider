import React from "react";
import Button from "../../../components/common/Button";
import { useNavigate } from "react-router-dom";

const NoReviewHistory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[500px] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl text-center">

        {/* Illustration */}
        <div className="mx-auto mb-7  w-64 h-64 md:w-70 md:h-70 rounded-full bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center border border-blue-300 shadow-sm">

          <img
            src="/assets/review.svg"
            alt="No reviews"
            className="w-[75%] h-[75%] object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-brownness">
            No Reviews Yet
          </h1>

          <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto leading-6">
            You haven't written any reviews yet. Your feedback helps other
            users choose the right service provider.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center">
          <Button
            color="blue"
            size="md"
            onClick={() => navigate("/user/dashboard")}
          >
            Book a Service
          </Button>
        </div>

        {/* Small hint */}
        <p className="mt-4 text-xs text-gray-400">
          After completing a service, you can share your experience here.
        </p>
      </div>
    </div>
  );
};

export default NoReviewHistory;