import ProviderListCard from "./ProviderListCard";
import {  IoMdCall } from "react-icons/io";
import Button from "../../components/common/Button";
import {Link} from 'react-router-dom'
import { BiMessageRoundedDetail } from "react-icons/bi";
import StatusBadge from "../../components/common/StatusBadge";
import ProviderBookingChart from "../../utils/ProviderBookingChart";
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

      <div className="flex gap-2 flex-col md:flex-row">
        <div
          className="flex-1 bg-gradient-to-r from-white/20 to-white/40 shadow-[0_0_20px_rgba(0,0,0,0.20)]
          px-3 pt-4 pb-5 rounded-xl"
        >
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-semibold text-muted">Today's Bookings</h1>
            <Link
  className="
    text-sm
    font-semibold
    text-primary
    border-b-2
    border-transparent
    hover:border-primary
    transition-all
    duration-200
  "
>
  View all
</Link>
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex gap-3 items-center">
              {/* Profile */}
              <div className="relative">
                <img
                  src='https://randomuser.me/api/portraits/men/11.jpg'
                  alt="profile"
                  className="w-14 h-14 min-w-14 rounded-full object-cover
            border-3 border-white shadow-md ring-2 ring-primary/10"
                />

                {/* Online Dot */}
                <div
                  className="absolute bottom-0 right-1 w-4 h-4 rounded-full
            bg-green-500 border-2 border-white"
                />
              </div>

              {/* Customer Info */}
              <div >
                <h1 className="text-lg md:text-xl font-semibold text-text">
                  Priya Sharma
                </h1>
               <h2 className="text-sm  font-semibold text-blue-500">10:00 AM</h2>

               
              </div>
            </div>

            
       <div>
              <h3 className="text-lg md:text-xl font-semibold text-text">
                AC Repair
              </h3>
              <p className="text-sm font-medium text-muted">
                Malviya Nagar , Jaipur
              </p>
              </div>
            <div>
              <StatusBadge badge='accepted' />
            </div>
            <div className="flex gap-2">
  
  {/* Call */}
  <button
    className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-green-50 border border-green-300 text-green-600
      hover:bg-green-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
  >
    <IoMdCall size={22} />
  </button>

  {/* Chat */}
  <button
    className="
      flex items-center justify-center
      w-11 h-11 rounded-xl cursor-pointer
      bg-blue-50 border border-blue-300 text-blue-600
      hover:bg-blue-100
      hover:-translate-y-0.5
      transition-all duration-300
    "
  >
    <BiMessageRoundedDetail size={22} />
  </button>

</div>
          </div>
          <div className='mt-5'>
            <Button fullWidth color='white' className="text-green-500">View All Booking</Button>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-white/20 to-white/40 shadow-[0_0_20px_rgba(0,0,0,0.20)]
          px-3 pt-4 pb-5 rounded-xl">
          <ProviderBookingChart/>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
