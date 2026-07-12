import {
  FaCheckCircle,
  FaRegCalendarCheck,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import Navbar from "../../components/common/NavBar";
import ProviderCard from "../../components/provider/ProviderCard";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  const navigate = useNavigate();
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
            {/* <div className="relative w-full h-[20rem] rounded-2xl overflow-hidden bg-gradient-to-r from-[#1447E6]  to-[#97BEFD]">
              <img
                src="/assets/cleaning-service.svg"
                alt="Cleaning"
                className="absolute right-0 -bottom-7 h-full object-contain z-[2]"
              />

              <div className="relative px-10 py-8 z-10 flex flex-col h-full justify-between">
                <div>
                  <h1 className="text-white text-3xl font-bold">
                    Welcome Back, Shivam 👋
                  </h1>
                  <p className="text-white text-lg font-light mt-2">
                    Find trusted professionals for your home services.
                  </p>
                </div>
                <div className="flex">
                  {/* Verified Providers */}
            {/* <div
                    className="flex items-center gap-3 pl-5 pr-8 py-3 -ml-4  rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg "
                  >
                    <div className="w-11 h-11 rounded-full bg-green-400/20 flex items-center justify-center">
                      <MdVerifiedUser className="text-green-300 text-2xl" />
                    </div>

                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-none">250+</h3>
                      <p className="text-sm text-white/80">
                        Verified Providers
                      </p>
                    </div>
                  </div> */}

            {/* Response Time */}
            {/* <div
                    className="flex items-center gap-3 pl-5 pr-8 py-3 -ml-4  rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg "
                  >
                    <div className="w-11 h-11 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <GoClock className="text-blue-200 text-2xl" />
                    </div>

                    <div className="text-white" >
                      <h3 className="text-xl font-bold leading-none">
                        12 min
                      </h3>
                      <p className="text-sm text-white/80">
                        Avg. Response Time
                      </p>
                    </div>
                  </div>

                  {/* Secure Booking */}
            {/* <div
                    className="flex items-center gap-3 pl-5 pr-8 py-3 -ml-4  rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg "
                  >
                    <div className="w-11 h-11 rounded-full bg-indigo-400/20 flex items-center justify-center">
                      <LuLock className="text-indigo-200 text-2xl" />
                    </div>

                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-none">100%</h3>
                      <p className="text-sm text-white/80">Secure Booking</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 max-w-md md:w-auto">
                  <Button color="success">
                    <FaRegCalendarCheck size={18} />
                    Book a Service
                  </Button>
                  <Button color="white">
                    <FaUserGroup size={18} />
                    Explore Providers
                  </Button>
                  <Button color="blue" onClick={()=>navigate('/user/become-provider/basic-info')}>
                    <FaHandshakeAngle size={20} />
                    Became a Provider
                  </Button>
                </div>
              </div>
            </div> */}

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1447E6] to-[#97BEFD] min-h-[600px] md:min-h-[320px]">
              {/* Background Image */}
              <img
                src="/assets/cleaning-service.svg"
                alt="Cleaning"
                className=" w-60 mx-auto mt-6 absolute right-0 -bottom-7 h-full w-auto object-contain z-[1] hidden md:flex pointer-events-none
    "
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:px-10 md:py-8">
                {/* Heading */}
                <div className="text-center md:text-left">
                  <h1 className="text-white text-2xl md:text-3xl font-bold">
                    Welcome Back, Shivam 👋
                  </h1>

                  <p className="text-white/90 text-sm md:text-lg mt-2">
                    Find trusted professionals for your home services.
                  </p>
                </div>

                <div className="flex mt-8 flex-col gap-3 md:gap-0 md:flex-row">
                  {/* Verified Providers */}
                  <div className="flex items-center gap-3 pl-5 pr-8 py-3   rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg ">
                    <div className="w-11 h-11 rounded-full bg-green-400/20 flex items-center justify-center">
                      <MdVerifiedUser className="text-green-300 text-2xl" />
                    </div>

                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-none">250+</h3>
                      <p className="text-sm text-white/80 mt-1">
                        Verified Providers
                      </p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-3 pl-5 pr-8 py-3 md:-ml-4  rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg ">
                    <div className="w-11 h-11 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <GoClock className="text-blue-200 text-2xl" />
                    </div>

                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-none">12 min</h3>
                      <p className="text-sm text-white/80 mt-1">
                        Avg. Response Time
                      </p>
                    </div>
                  </div>

                  {/* Secure Booking */}
                  <div className="flex items-center gap-3 pl-5 pr-8 py-3 md:-ml-4  rounded-xl bg-transparent backdrop-blur-xs border border-white/15 shadow-lg ">
                    <div className="w-11 h-11 rounded-full bg-indigo-400/20 flex items-center justify-center">
                      <LuLock className="text-indigo-200 text-2xl" />
                    </div>

                    <div className="text-white">
                      <h3 className="text-xl font-bold leading-none">100%</h3>
                      <p className="text-sm text-white/80 mt-1">Secure Booking</p>
                    </div>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-3 mt-8">
                  <Button className="w-full md:w-auto" color="success">
                    <FaRegCalendarCheck size={18} />
                    Book a Service
                  </Button>

                  <Button className="w-full md:w-auto" color="white">
                    <FaUserGroup size={18} />
                    Explore Providers
                  </Button>

                  <Button
                    className="w-full md:w-auto"
                    color="blue"
                    onClick={() => navigate("/user/become-provider/basic-info")}
                  >
                    <FaHandshakeAngle size={20} />
                    Become a Provider
                  </Button>
                </div>
                
              </div>
            </div>
            <div className="md:px-3 mt-6 sticky top-21 bg-white z-[999]">
              <div className="flex justify-between items-center pb-1">
                <h1 className="text-2xl font-bold">Providers</h1>
                <Link to="all-providers" className="text-primary font-semibold">
                  View All
                </Link>
              </div>

              <FilterProviders
                url="user"
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </>
        )}
        <Outlet
          context={{
            filters,
            setFilters,
          }}
        />
      </div>
    </>
  );
};

export default UserDashboard;
