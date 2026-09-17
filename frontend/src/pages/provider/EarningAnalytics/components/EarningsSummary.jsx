import TotalEarningsCard from "./TotalEarningsCard";
import EarningsStatCard from "./EarningsStatCard";
import { GiSandsOfTime } from "react-icons/gi";
import { PiHandWithdrawLight } from "react-icons/pi";
import { IoMdTrendingUp } from "react-icons/io";

import { useProviderEarningSummary } from "../../../../hooks/useProvider";

const EarningsSummary = () => {
  const {data}= useProviderEarningSummary()
  const summary = data?.data

  const cardsContent = [
  {
    bgColor: "bg-green-100",
    textColor: "text-green-500",
    borderColor: "#22c55e",
    startBg: "rgba(34, 197, 94, 0.35)",
    endBg: "rgba(34, 197, 94, 0.07)",
    Icon: IoMdTrendingUp,
    text: "This month earning",
    amount: summary?.thisMonthEarnings || 0,
    growth:summary?.thisMonthGrowth,
    data:summary?.thisMonthEarningsChart
  },

  {
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-500",
    borderColor: "#eab308",
    startBg: "rgba(234,179,8,0.35)",
    endBg: "rgba(234,179,8,0)",
    Icon: GiSandsOfTime,
    text: "Pending Amount",
    amount: summary?.pendingAmount ||0,
    growth:summary?.pendingAmountGrowth,
    data:summary?.pendingAmountChart

  },

  {
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
    borderColor: "#a855f7",
    startBg: "rgba(168,85,247,0.35)",
    endBg: "rgba(168,85,247,0)",
    Icon: PiHandWithdrawLight,
    text: "Withdrawn Amount",
    amount: summary?.withdrawnAmount ||0,
    growth:summary?.withdrawnAmountGrowth,
    data:summary?.withdrawnAmountChart

  },
];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <TotalEarningsCard summary={summary}/>

      {cardsContent.map((item, idx) => (
        <EarningsStatCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default EarningsSummary;