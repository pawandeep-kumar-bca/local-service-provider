import React from "react";

import PaymentStatsSection from "./components/data/PaymentStatsSection";
import PaymentChartsSection from "./components/data/PaymentChartsSection";
import PaymentsTable from "./components/data/PaymentsTable";

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