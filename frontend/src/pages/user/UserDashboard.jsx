import { FaCheckCircle, FaStar, FaWallet } from "react-icons/fa";
import Navbar from "../../components/common/NavBar";
import ProviderCard from "../../components/provider/ProviderCard";
import { Link } from "react-router-dom";
import Cards from "../../components/common/Cards";
const UserDashboard = () => {
  return (
    <>
      <div className="w-full h-full my-5 px-3">
        <div
          className="w-[100%] p-6 rounded-2xl 
  bg-[#3B82F6]
  shadow-[inset_0_0_3px_rgba(0,0,0,0.3)] flex justify-between items-start mt-3"
        >
          <div>
            <h1 className="text-bg font-bold text-2xl pb-1">Hi, shivam </h1>
            <p className="text-bg text-lg font-medium md:font-normal">
              Welcome to your dashboard
            </p>
          </div>
          <img
            src="/assets/man.png"
            alt="image"
            className="w-[15%] hidden md:block "
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
            icon={<FaCheckCircle className="text-primary text-2xl" />}
            value={3}
          >
            Completed
          </Cards>
          <Cards
            icon={<FaCheckCircle className="text-divider text-2xl" />}
            value={3}
          >
            Active
          </Cards>
          <Cards icon={<FaStar className="text-warning text-2xl" />} value={3}>
            Reviewed
          </Cards>
        </div>
        <div className="px-3">
          <div className="flex justify-between items-center pb-5">
            <h1 className="text-2xl font-bold">Providers</h1>
            <Link to="/providers" className="text-primary font-semibold">
              View All
            </Link>
          </div>
          <div className="grid grid-col-1 gap-2 md:grid-cols-3">
            <ProviderCard />
            <ProviderCard />
            <ProviderCard />
            <ProviderCard />
            <ProviderCard />
            <ProviderCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
