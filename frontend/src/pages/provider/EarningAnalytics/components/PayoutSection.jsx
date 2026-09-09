import NextPayoutCard from "./NextPayoutCard";
import PaymentMethodUsedChart from "../../../utils/PaymentMethodUsedChart";

const PayoutSection = () => {
  return (
    <div>
      <NextPayoutCard />

      <div className="mt-3">
        <PaymentMethodUsedChart />
      </div>
    </div>
  );
};

export default PayoutSection;