import React from "react";

const PaymentTableHeader = () => {
  return (
    <div
      className="
        grid
        grid-cols-[1fr_1.5fr_1.5fr_1.1fr_1fr_1fr_1.2fr_0.5fr]
        items-center
        mt-3
        text-sm
        font-bold
        text-black/80
        px-3
      "
    >
      <span>Transaction ID</span>
      <span className="pl-7">Customer</span>
      <span className="pl-7">Provider</span>
      <span className="text-center">Payment Method</span>
      <span className="text-center">Amount</span>
      <span className="text-center">Status</span>
      <span className="text-center">Date & Time</span>
      <span>Action</span>
    </div>
  );
};

export default PaymentTableHeader;