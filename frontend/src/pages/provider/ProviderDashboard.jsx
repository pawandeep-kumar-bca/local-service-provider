import ProviderListCard from "./ProviderListCard";

import ProviderBookingChart from "../../utils/ProviderBookingChart";
import ProviderTodayBookings from "./ProviderTodayBookings";
const ProviderDashboard = () => {
  return (
    <div className="w-full h-full">
      {/* Welcome Banner */}
      <div
        className="
          w-full
          min-h-[220px]
          rounded-3xl
          bg-[#3B82F6]
          shadow-[inset_0_0_3px_rgba(0,0,0,0.3)]
          flex items-center justify-between
          mt-3
          overflow-hidden
          px-6 md:px-8
        "
      >
        {/* Left Content */}
        <div className="py-8">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            Hi, Shivam 👋
          </h1>

          <p className="text-white/90 text-base md:text-xl mt-2 font-medium">
            Welcome back to your provider dashboard
          </p>

          <button
            className="
              mt-5
              bg-white
              text-[#3B82F6]
              px-5
              py-2.5 cursor-pointer
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all duration-300
            "
          >
            View Bookings
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-end justify-end h-full flex-1">
          <img
            src="/assets/service.png"
            alt="service"
            className="
              w-[380px] lg:w-[420px] object-contain
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
