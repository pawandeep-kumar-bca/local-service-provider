import React from "react";
import RevenueOverview from "../../../../utils/providerCharts/RevenueOverview";
import UpiStatus from "../../../../utils/providerCharts/UpiStatus";

const PaymentChartsSection = () => {
  return (
    <div className="flex gap-3 my-4">
      <div
        className="
          flex-[1.76]
          bg-white
          rounded-[28px]
          border border-slate-200
          p-5
          shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        "
      >
        <RevenueOverview />
      </div>

      <div>
        <UpiStatus />
      </div>
    </div>
  );
};

export default PaymentChartsSection;