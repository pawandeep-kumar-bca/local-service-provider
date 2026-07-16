import React from "react";

import PaymentStatsSection from "./components/PaymentStatsSection";
import PaymentChartsSection from "./components/PaymentChartsSection";
import PaymentsTable from "./components/PaymentsTable";

const AllPayments = () => {
  
  const handleDownloadInvoice = (payment) => {
    console.log("download invoice for", payment.transactionId);
  };

  return (
    <div>
      <PaymentStatsSection />

      <PaymentChartsSection />

      <PaymentsTable onDownloadInvoiceClick={handleDownloadInvoice} />
    </div>
  );
};

export default AllPayments;