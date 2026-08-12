import {
  FaCheckCircle,
  FaRegCalendarCheck,
  FaStar,
  FaWallet,
} from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Cards from "../../components/common/Cards";

import { useState } from "react";
import Button from "../../components/common/Button";
import { MdVerifiedUser } from "react-icons/md";
import { GoClock } from "react-icons/go";

import { LuLock } from "react-icons/lu";
import { FaHandshakeAngle, FaUserGroup } from "react-icons/fa6";
import PopularCategoriesSection from "./PopularCategoriesSection";
const UserDashboard = () => {
  const navigate = useNavigate();
  const savedLocation = JSON.parse(localStorage.getItem("location") || "null");
  const [filters, setFilters] = useState({
    categoryId: "",
    rating: "",
    experience: "",
    availability: "",
    trusted: "",
    minPrice: "",
    maxPrice: "",
    sort: [],
    // location
    lat: savedLocation?.latitude || "",
    lng: savedLocation?.longitude || "",
    radius: 200,
  });
  console.log(filters.lat, filters.lng);

  return (
    <>
      <div className="w-full h-full">
        <>
          
          <div
            className="
    relative
    hidden
    md:block
    w-full
    min-h-[360px]
    overflow-hidden
    rounded-2xl
    bg-gradient-to-r
    from-[#1447E6]
    via-[#2563EB]
    to-[#97BEFD]
  "
          >
            {/* Background glow */}
            <div
              className="
      absolute
      -right-20
      -bottom-32
      w-[500px]
      h-[500px]
      rounded-full
      bg-white/10
      blur-3xl
    "
            />

            {/* Service image */}
            <img
              src="/assets/cleaning-service.svg"
              alt="Cleaning service"
              className="
      absolute
      right-0
      bottom-0
      z-[1]
      h-[95%]
      w-auto
      max-w-[48%]
      object-contain
      object-right-bottom
      pointer-events-none
    "
            />

            {/* Content */}
            <div
              className="
      relative
      z-10
      flex
      min-h-[360px]
      w-[60%]
      flex-col
      justify-center
      px-7
      py-8
      lg:px-10
    "
            >
              {/* Heading */}
              <h1
                className="
        text-3xl
        lg:text-4xl
        font-bold
        leading-tight
        text-white
      "
              >
                Find Trusted
              </h1>

              <h2
                className="
        mt-1
        text-3xl
        lg:text-4xl
        font-bold
        leading-tight
        text-white
      "
              >
                Local <span className="text-green-300">Service Providers</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm lg:text-base text-white/85">
                Find trusted local professionals for reliable, quality services
                delivered right to your doorstep.
              </p>

              {/* Stats */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {/* Verified Providers */}
                <div
                  className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/15
          bg-white/10
          px-4
          py-3
          backdrop-blur-md
        "
                >
                  <div
                    className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-green-400/20
          "
                  >
                    <MdVerifiedUser className="text-xl text-green-300" />
                  </div>

                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-none">250+</h3>
                    <p className="mt-1 text-xs text-white/75">
                      Verified Providers
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div
                  className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/15
          bg-white/10
          px-4
          py-3
          backdrop-blur-md
        "
                >
                  <div
                    className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-blue-400/20
          "
                  >
                    <GoClock className="text-xl text-blue-200" />
                  </div>

                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-none">12 min</h3>
                    <p className="mt-1 text-xs text-white/75">
                      Avg. Response Time
                    </p>
                  </div>
                </div>

                {/* Secure Booking */}
                <div
                  className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/15
          bg-white/10
          px-4
          py-3
          backdrop-blur-md
        "
                >
                  <div
                    className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-indigo-400/20
          "
                  >
                    <LuLock className="text-xl text-indigo-200" />
                  </div>

                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-none">100%</h3>
                    <p className="mt-1 text-xs text-white/75">Secure Booking</p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Button color="success">
                  <FaRegCalendarCheck size={18} />
                  Book a Service
                </Button>

                <Button color="white">
                  <FaUserGroup size={18} />
                  Explore Providers
                </Button>

                <Button
                  color="blue"
                  onClick={() => navigate("/user/become-provider/basic-info")}
                >
                  <FaHandshakeAngle size={20} />
                  Become a Provider
                </Button>
              </div>
            </div>
          </div>

          {/* ================= MOBILE HERO ================= */}
          <div
            className="
    relative
    flex
    md:hidden
    min-h-[220px]
    w-full
    overflow-hidden
    rounded-2xl
    bg-gradient-to-br
    from-blue-50
    via-blue-100
    to-blue-200
  "
          >
            {/* Left overlay */}
            <div
              className="
      absolute
      inset-0
      z-[1]
      bg-gradient-to-r
      from-blue-50
      via-blue-50/90
      to-transparent
    "
            />

            {/* Image background circle */}
            <div
              className="
      absolute
      right-[-10%]
      bottom-[-25%]
      h-[250px]
      w-[250px]
      rounded-full
      bg-gradient-to-br
      from-blue-100
      via-blue-200
      to-blue-300
    "
            />

            {/* Plumber */}
            <div
              className="
      absolute
      right-0
      bottom-0
      z-[2]
      h-full
      w-[48%]
    "
            >
              <img
                src="/assets/Plumber.png"
                alt="Plumber"
                className="
        h-full
        w-full
        object-contain
        object-right-bottom
      "
              />
            </div>

            {/* Mobile Content */}
            <div
              className="
      relative
      z-[3]
      flex
      min-h-[220px]
      w-[68%]
      flex-col
      justify-center
      px-4
      py-5
    "
            >
              <h1
                className="
        text-[26px]
        font-bold
        leading-[1.05]
        text-brownness
      "
              >
                Find Trusted
              </h1>

              <h2
                className="
        mt-1
        text-[21px]
        font-bold
        leading-[1.1]
        text-brownness
      "
              >
                Local <span className="text-success">Service Providers</span>
              </h2>

              <p
                className="
        mt-2
        max-w-[190px]
        text-[11px]
        font-medium
        leading-4
        text-gray-600
      "
              >
                Find trusted local professionals for reliable, quality services
                delivered right to your doorstep.
              </p>

              <button
                type="button"
                onClick={() => navigate("/user/become-provider/basic-info")}
                className="
        mt-3
        w-fit
        rounded-lg
        border
        border-green-500
        bg-gradient-to-r
        from-green-50
        to-green-100
        px-4
        py-2
        text-xs
        font-bold
        text-green-600
        shadow-sm
        transition-all
        hover:shadow-md
        active:scale-95
      "
              >
                Become a Provider
              </button>
            </div>
          </div>
          <div className="md:px-3 mt-6">
            <PopularCategoriesSection />
          </div>
        </>

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
