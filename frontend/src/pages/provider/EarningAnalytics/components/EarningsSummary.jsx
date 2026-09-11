import TotalEarningsCard from "./TotalEarningsCard";
import EarningsStatCard from "./EarningsStatCard";
import { cardsContent } from "../data/earningsData";

const EarningsSummary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <TotalEarningsCard />

      {cardsContent.map((item, idx) => (
        <EarningsStatCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default EarningsSummary;