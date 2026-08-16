import ProviderListCard from "./ProviderListCard";

import ProviderBookingChart from "../../utils/ProviderBookingChart";
import ProviderTodayBookings from "./ProviderTodayBookings";
import { useSelector } from "react-redux";

const ProviderDashboard = () => {
 

  const user = useSelector((state)=>state.auth.user)


 
  
  return (
    <div className="w-full h-full">
      {/* Welcome Banner */}
    <div
  className="
    relative w-full min-h-[280px] mt-4
    rounded-3xl overflow-hidden
    bg-gradient-to-br from-white via-blue-50 to-blue-100
    border border-blue-100
    shadow-[0_10px_35px_rgba(37,99,235,0.10)]
    px-6 md:px-10 lg:px-12
    flex items-center
  "
>
  {/* Subtle Grid Background */}
  <div
    className="
      absolute inset-0
      opacity-[0.35]
      pointer-events-none
      bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,200,255,0.10))]
      bg-[size:32px_32px]
    "
  />

  {/* Soft Decorative Circle */}
  <div
    className="
      absolute
      -right-24 -top-24
      w-80 h-80
      rounded-full
      bg-blue-200/40
      blur-3xl
    "
  />

  <div
    className="
      absolute
      left-[35%] -bottom-32
      w-72 h-72
      rounded-full
      bg-blue-300/20
      blur-3xl
    "
  />

  {/* Left Content */}
  <div className="relative z-10 py-10 max-w-[560px]">

   
   

    {/* Heading */}
    <h1
      className="
        mt-4
        text-slate-900
        font-bold
        text-3xl md:text-4xl lg:text-[42px]
        leading-tight
        tracking-tight
      "
    >
      Hi, {user?.fullname}👋
    </h1>

    {/* Description */}
    <p
      className="
        mt-3
        text-slate-600
        text-sm md:text-base lg:text-lg
        leading-relaxed
        max-w-[500px]
      "
    >
      Welcome back! Stay on top of your bookings, connect with
      customers, and grow your service business.
    </p>

    {/* Actions */}
    <div className="flex flex-wrap items-center gap-3 mt-6">

      {/* Primary Button */}
      <button
        className="
          group
          inline-flex items-center gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5 py-2.5
          rounded-xl
          font-semibold
          text-sm md:text-base
          shadow-[0_6px_18px_rgba(37,99,235,0.25)]
          cursor-pointer
          hover:-translate-y-0.5
          active:scale-95
          transition-all duration-300
        "
      >
        View Bookings

        <span
          className="
            text-lg
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </button>

      {/* Secondary Button */}
      <button
        className="
          inline-flex items-center gap-2
          bg-white/80
          hover:bg-white
          text-slate-700
          border border-slate-200
          px-5 py-2.5
          rounded-xl
          font-semibold
          text-sm md:text-base
          cursor-pointer
          hover:-translate-y-0.5
          shadow-sm
          transition-all duration-300
        "
      >
        Manage Services
      </button>
    </div>

    {/* Small Meaningful Info */}
    <div
      className="
        mt-6
        flex items-center gap-2
        text-xs md:text-sm
        text-slate-500
      "
    >
      <span
        className="
          flex items-center justify-center
          w-6 h-6
          rounded-full
          bg-green-100
          text-green-600
          font-bold
        "
      >
        ✓
      </span>

      <span>
        Keep your profile updated to get more customer requests
      </span>
    </div>
  </div>

  {/* Right Illustration */}
  <div
    className="
      relative z-10
      hidden md:flex
      ml-auto
      self-end
      items-end justify-end
      h-full
      min-w-[360px]
      lg:min-w-[430px]
    "
  >
    {/* Illustration Glow */}
    <div
      className="
        absolute
        bottom-0 right-10
        w-[280px] h-[220px]
        rounded-full
        bg-blue-200/40
        blur-3xl
      "
    />

    <img
      src="/assets/clean.svg"
      alt="Service provider"
      className="
        relative
        w-[330px]
        lg:w-[390px]
        xl:w-[430px]
        max-h-[290px]
        object-contain
        object-bottom
        drop-shadow-[0_20px_25px_rgba(37,99,235,0.12)]
        translate-y-2
      "
    />
  </div>
</div>

      {/* Stats Cards */}
      <ProviderListCard />

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <div
          className="
      flex-1
      md:min-h-[500px]
      bg-gradient-to-r from-white/20 to-white/40
      md:shadow-[0_0_20px_rgba(0,0,0,0.20)]
      md:px-3 md:pt-4
      rounded-xl
    "
        >
          <ProviderBookingChart />
        </div>

        <div
          className="
      flex-1
      md:min-h-[500px]
      bg-gradient-to-r from-white/20 to-white/40
      md:shadow-[0_0_20px_rgba(0,0,0,0.20)] mt-5 md:mt-0
      md:px-3 md:pt-4 pb-5
      rounded-xl
    "
        >
          <ProviderTodayBookings />
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
