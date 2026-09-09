import EarningsOverviewChart from "../../../utils/EarningsOverviewChart";
import AvailableBalanceCard from "./AvailableBalanceCard";

const EarningsOverview = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-3 mt-5">
      <div>
        <EarningsOverviewChart />
      </div>

      <AvailableBalanceCard />
    </div>
  );
};

export default EarningsOverview;