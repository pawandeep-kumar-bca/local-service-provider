
import Cards from "../../components/common/Cards";
import { FaBook, FaChevronRight, FaStar, FaWallet } from "react-icons/fa";
import NavBar from "../../components/common/NavBar";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import EarningAnalytics from "./EarningAnalytics";

const ProviderDashboard = () => {
  return (
    <>
      <div className="w-full p-3">
        <div
          className="w-[100%] rounded-2xl 
  bg-[#3B82F6]
  shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex justify-between items-start mt-3"
        >
          <div className="p-5">
            <h1 className="text-bg font-bold text-2xl pb-1">Hi, shivam </h1>
            <p className="text-bg text-lg font-medium md:font-normal">
              Welcome to your dashboard
            </p>
          </div>
          <img
            src="/assets/service.png"
            alt="image"
            className="w-[20%] hidden md:block "
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 mb-6">
          <Cards
            icon={<FaWallet className="text-success text-2xl" />}
            value={3}
          >
            Total Earning
          </Cards>
          <Cards
            icon={<FaWallet className="text-primary text-2xl" />}
            value={3}
          >
            Today Earning
          </Cards>
          <Cards icon={<FaBook className="text-divider text-2xl" />} value={3}>
            Booking
          </Cards>
          <Cards icon={<FaStar className="text-warning text-2xl" />} value={3}>
            Total Earning
          </Cards>
        </div>
       
        <EarningAnalytics/>
       
        <div className="flex flex-col gap-3 md:hidden">
          <Link className="shadow-[0_3px_34px_rgba(0,0,0,0.19)] rounded-xl p-6 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <MdDateRange className="text-2xl text-primary"/>
          <h1 className="text-xl font-semibold">Incoming Booking</h1>
          </div>
          <FaChevronRight className="text-xl text-muted"/>
        </Link>
        <Link className="shadow-[0_3px_34px_rgba(0,0,0,0.19)] rounded-xl p-6 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <IoBarChart className="text-2xl text-primary"/>
          <h1 className="text-xl font-semibold">Earning Analytics</h1>
          </div>
          <FaChevronRight className="text-xl text-muted"/>
        </Link>
        </div>
      </div>
    </>
  );
};

export default ProviderDashboard;
