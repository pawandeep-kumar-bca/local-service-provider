import React from "react";

const UserPaymentHistoryPageHeader = () => {
  return (
    <div className="grid bg-gray-100 grid-cols-[1fr_1.2fr_1fr_0.3fr] md:grid-cols-6  p-3 text-sm md:text-base font-semibold text-brownness rounded-t-xl">
      <span className="text-center">Provider</span>
      <span className="hidden md:block text-center">Date</span>
      <span className="hidden md:block text-center">Payment Method</span>
      <span className="text-center">Payment Status</span>
      <span className="text-center">Amount</span>
      <span className="text-center">Action</span>
    </div>
  );
};

export default UserPaymentHistoryPageHeader;
