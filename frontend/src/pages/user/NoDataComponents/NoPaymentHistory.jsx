import React from "react";

const NoPaymentHistory = ({ filters }) => {
  const search = filters?.search?.trim();
  const status = filters?.status?.toLowerCase() || "all";

  const statusLabel = {
    all: "Payment History",
    pending: "Pending Payments",
    success: "Successful Payments",
    failed: "Failed Payments",
    refund: "Refunded Payments",
  };

  const getTitle = () => {
    if (search && status !== "all") {
      return `No ${statusLabel[status]} Found`;
    }

    if (search) {
      return "No Payment History Found";
    }

    return `No ${statusLabel[status]} Found`;
  };

  const getDescription = () => {
    if (search && status !== "all") {
      return `We couldn't find any ${status} payments matching "${search}".`;
    }

    if (search) {
      return `We couldn't find any payments matching "${search}".`;
    }

    switch (status) {
      case "pending":
        return "You don't have any pending payments right now.";

      case "success":
        return "You don't have any successful payments yet.";

      case "failed":
        return "You don't have any failed payments.";

      case "refund":
        return "You don't have any refunded payments.";

      default:
        return "Your payment history will appear here once you make a payment.";
    }
  };

  return (
    <div className="min-h-[450px] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl text-center">

        {/* Illustration */}
        <div
          className="mx-auto mb-7 w-48 h-48 md:w-56 md:h-56
                     rounded-full
                     bg-gradient-to-br from-blue-50 via-white to-indigo-50
                     flex items-center justify-center
                     border border-blue-100
                     shadow-sm"
        >
          <img
            src="/assets/payment.svg"
            alt="No payment"
            className="w-[72%] h-[72%] object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {getTitle()}
          </h1>

          <p className="max-w-md mx-auto text-sm md:text-base text-gray-500 leading-6">
            {getDescription()}
          </p>
        </div>

        {/* Search indicator */}
        {search && (
          <div
            className="inline-flex items-center gap-2 mt-5 px-4 py-2
                       rounded-full bg-gray-50 border border-gray-200
                       text-sm text-gray-600"
          >
            <span className="text-gray-400">Search:</span>
            <span className="font-medium text-gray-800">
              "{search}"
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoPaymentHistory;