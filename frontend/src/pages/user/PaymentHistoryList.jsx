import React from "react";
import UserPaymentHistoryPageRow from "./UserPaymentHistoryPageRow";
import UserPaymentHistoryPageHeader from "./UserPaymentHistoryPageHeader";
import { useUserPaymentHistory } from "../../hooks/usePayment";

const PaymentHistoryList = () => {
  const {data} = useUserPaymentHistory()

  const allPaymentsHistory = data?.paymentHistory || []
  return (
    <>
      <UserPaymentHistoryPageHeader />
      {
       allPaymentsHistory.map((paymentHistory)=>(

         <UserPaymentHistoryPageRow key={paymentHistory._id} paymentHistory={paymentHistory}/>
       )) 
      }
    </>
  );
};

export default PaymentHistoryList;
