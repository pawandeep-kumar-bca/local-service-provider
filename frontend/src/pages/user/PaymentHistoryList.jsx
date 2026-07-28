import React from "react";
import UserPaymentHistoryPageRow from "./UserPaymentHistoryPageRow";
import UserPaymentHistoryPageHeader from "./UserPaymentHistoryPageHeader";

const PaymentHistoryList = () => {
  return (
    <>
      <UserPaymentHistoryPageHeader />
      <UserPaymentHistoryPageRow />
    </>
  );
};

export default PaymentHistoryList;
