import { FaCheckCircle, FaStar, FaWallet } from "react-icons/fa";
import Navbar from "../../components/common/NavBar";
import ProviderCard from "../../components/provider/ProviderCard";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Cards from "../../components/common/Cards";
import FilterProviders from "./FilterProviders";
const UserDashboard = () => {
  const location = useLocation();

  const isAllProviders = location.pathname.includes("all-providers");

  return (
    <>
      <div className="w-full h-full">
        {!isAllProviders && (
          <>
            <div
              className="w-[100%]  rounded-2xl bg-[#3B82F6] shadow-[inset_0_0_3px_rgba(0,0,255,0.3)] flex justify-between items-start mt-3"
            >
              <div className="p-5">
                <h1 className="text-bg font-bold text-3xl pb-1">
                  Welcome Back , shivam 👋
                </h1>
                
              </div>
              
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 mb-6">
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
              <Cards
                icon={<FaStar className="text-warning text-2xl" />}
                value={3}
              >
                Reviewed
              </Cards>
            </div> */}
            <div className="px-3 mt-6 sticky top-21 bg-white z-[999]">
              <div className="flex justify-between items-center pb-1">
                <h1 className="text-2xl font-bold">Providers</h1>
                <Link to="all-providers" className="text-primary font-semibold">
                  View All
                </Link>
              </div>

             
              
               <FilterProviders url='user'/>
            </div>
          </>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default UserDashboard;
