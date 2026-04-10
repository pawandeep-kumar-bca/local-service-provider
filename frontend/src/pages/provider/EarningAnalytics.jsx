
import EarningsChart from "../../utils/chart";
import { MdCurrencyRupee } from "react-icons/md";
import Button from '../../components/common/Button'
const EarningAnalytics = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="px-4 md:w-[50%] py-2 rounded-lg  shadow-[0_3px_34px_rgba(0,0,0,0.19)]">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl mb-3 font-bold">Earning Analytics</h1>

        <div className="flex items-center gap-1 mb-4">
          <h1 className="text-lg text-success font-semibold flex items-center">
            Total Earnings :
          </h1>
          <div className="flex items-center">
            <MdCurrencyRupee className="text-xl " />
            <h2 className="text-lg">18000</h2>
          </div>
        </div>
        </div>
        <EarningsChart />
        
      </div>

      <div className="rounded-lg md:w-[50%] shadow-[0_3px_34px_rgba(0,0,0,0.19)] py-2 px-4">
        
        <div className="px-4 py-2 ">
            <h1 className="text-lg font-bold">Bookings</h1>
           <div className="flex justify-around mt-4">
            <Button>Incoming</Button>
            <Button>completed</Button>
            <Button>Pending</Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EarningAnalytics;
