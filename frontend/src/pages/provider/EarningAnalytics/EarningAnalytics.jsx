import EarningsSummary from "./components/EarningsSummary";
import EarningsOverview from "./components/EarningsOverview";
import RecentTransactions from "./components/RecentTransactions";
import PayoutSection from "./components/PayoutSection";


const EarningAnalytics = () => {
  
  return (
    <div>
      <EarningsSummary />

      <EarningsOverview />

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-3 mt-5">
        <RecentTransactions />
        <PayoutSection />
      </div>
    </div>
  );
};

export default EarningAnalytics;