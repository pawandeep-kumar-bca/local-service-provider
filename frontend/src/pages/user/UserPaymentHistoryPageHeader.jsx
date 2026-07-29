import React from "react";

const UserPaymentHistoryPageHeader = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 items-center justify-items-center pb-3 text-sm md:text-base font-semibold text-gray-700">
      <span>Provider</span>
      <span>Date</span>
      <span className="hidden md:block">Payment Method</span>
      <span className="hidden md:block">Payment Status</span>
      <span>Amount</span>
      <span>Action</span>
    </div>
  );
};

export default UserPaymentHistoryPageHeader;
