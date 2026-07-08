import { FaCheckCircle, FaRegCalendarCheck, FaStar, FaWallet } from "react-icons/fa";
import Navbar from "../../components/common/NavBar";
import ProviderCard from "../../components/provider/ProviderCard";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Cards from "../../components/common/Cards";
import FilterProviders from "./FilterProviders";
import { useState } from "react";
import Button from "../../components/common/Button";
import { MdVerifiedUser } from "react-icons/md";
import { GoClock } from "react-icons/go";

import { LuLock } from "react-icons/lu";
import { FaHandshakeAngle, FaUserGroup } from "react-icons/fa6";
const UserDashboard = () => {
  const location = useLocation();

  const isAllProviders = location.pathname.includes("all-providers");
  const [filters, setFilters] = useState({
    category: "all",

    search: "",

    city: "",

    minRating: "",

    minExperience: "",

    availability: "",

    sort: "latest",

    page: 1,

    limit: 9,
  });
  return (
    <>
      <div className="w-full h-full">
        {!isAllProviders && (
          <>
    <div className="relative w-full h-[20rem] rounded-2xl overflow-hidden bg-gradient-to-r from-[#3B82F6] via-[#7EAEFC] to-[#97BEFD]">

  <img
    src="/assets/cleaning-service.svg"
    alt="Cleaning"
    className="absolute right-0 -bottom-4 h-full object-contain z-[2]"
  />
  {/* <img
    src="/assets/home.png"
    alt="Cleaning"
    className="absolute right-50 z-[1] -bottom-4 h-[80%] object-contain"
  /> */}

  <div className="relative px-10 py-8 z-10 ">
    <div>
      <h1 className="text-white text-3xl font-bold">
      Welcome Back, Shivam 👋
    </h1>
    <p>Find trusted professionals for your home services.</p>
    </div>
    <div className="flex">
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-200 text-green-600">
          <MdVerifiedUser size={20}/>
        </div>
        <div>
        <h3>250+</h3>
        <p>Verified Providers</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
<GoClock size={18}/>
        </div>
        <div>
        <h3>12 min</h3>
        <p>Avg. Response Time</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
       <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
          <LuLock size={18}/>
        </div>
        <div>
        <h3>100%</h3>
        <p>Secure Booking</p>
        </div>
      </div>
    </div>

    <div className="flex gap-3">
      <Button className="text-primary" color="white"><FaRegCalendarCheck  size={18}/>Book a Service</Button>
      <Button className="border-white text-white"><FaUserGroup size={20}/>Explore Providers</Button>
      <Button color="green"><FaHandshakeAngle size={20}/>Became a Provider</Button>
    </div>
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

              <FilterProviders url="user" filters={filters} setFilters={setFilters}/>
            </div>
          </>
        )}
        <Outlet context={{
        filters,
        setFilters
    }}/>
      </div> 
    </>
  );
};

export default UserDashboard;
