import { FaBook, FaUser, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlinePlumbing } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { IoMdArrowRoundUp } from "react-icons/io";

import BookingOverviewChart from "../../utils/providerCharts/BookingsOverviewChart";
import BookingStatusChart from "../../utils/providerCharts/BookingsStatusChart";
import RevenueChart from "../../utils/providerCharts/RevenueChart";

const ProviderDashboard = () => {
  const statsData = [
    {
      id: 1,
      title: "Total Users",
      value: "12,835",
      growth: "12%",
      icon: <FaUser size={24} />,
      iconBg: "bg-sky-100",
      iconColor: "text-sky-500",
      growthColor: "text-green-500",
      bgColor: "bg-white border-white/50",
    },

    {
      id: 2,
      title: "Total Providers",
      value: "12,345",
      growth: "5%",
      icon: <FaUserFriends size={24} />,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-500",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },

    {
      id: 3,
      title: "Total Bookings",
      value: "89,543",
      growth: "18%",
      icon: <FaBook size={24} />,
      iconBg: "bg-pink-200",
      iconColor: "text-pink-600",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },

    {
      id: 4,
      title: "Total Revenue",
      value: "₹24,400",
      growth: "10%",
      icon: <TfiWallet size={24} />,
      iconBg: "bg-green-200",
      iconColor: "text-green-500",
      growthColor: "text-green-500",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="w-full h-full p-3">

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 mb-6">
        {statsData.map((item) => (
          <div
            key={item.id}
            className={`
              ${item.bgColor}
              border
              rounded-2xl
              p-5
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]
              transition-all duration-300
              cursor-pointer
            `}
          >
            <div className="flex items-center gap-4">

              {/* Icon */}
              <div
                className={`
                  ${item.iconBg}
                  ${item.iconColor}
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  shrink-0
                `}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h1 className="text-sm text-black/80 font-medium">
                  {item.title}
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-1">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span
                    className={`
                      ${item.growthColor}
                      flex items-center gap-1
                      font-semibold
                      text-sm
                    `}
                  >
                    <IoMdArrowRoundUp size={18} />
                    {item.growth}
                  </span>

                  <p className="text-xs md:text-sm text-black/60 font-medium">
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHART SECTION */}
      <div className="flex flex-col xl:flex-row gap-5 items-stretch">
        
        {/* Booking Overview */}
        <div
          className="
            flex-[1.76]
            bg-white
            rounded-[28px]
            border border-slate-200
            p-5
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <BookingOverviewChart />
        </div>

        {/* Booking Status */}
        <div className="flex-[1.25]">
          <BookingStatusChart />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col xl:flex-row gap-5 items-stretch mt-6">

        {/* LEFT SIDE */}
        <div className="flex-[1.76] flex flex-col md:flex-row gap-2">

          {/* Recent Users */}
          <div
            className="
              flex-1 flex flex-col
              bg-white
              rounded-[28px]
              border border-slate-200
              p-5
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl font-semibold text-black/80">
                Recent Users
              </h1>

              <Link className="text-sm text-primary font-semibold">
                View All
              </Link>
            </div>

            {/* Users */}
            <div className="flex-1 space-y-5">

              {[
                {
                  name: "John Doe",
                  email: "john.doe@gmail.com",
                  time: "2 min ago",
                  image:
                    "https://randomuser.me/api/portraits/women/34.jpg",
                },

                {
                  name: "Aman Verma",
                  email: "aman@gmail.com",
                  time: "10 min ago",
                  image:
                    "https://randomuser.me/api/portraits/men/22.jpg",
                },

                {
                  name: "Priya Sharma",
                  email: "priya@gmail.com",
                  time: "25 min ago",
                  image:
                    "https://randomuser.me/api/portraits/women/45.jpg",
                },
              ].map((user, idx) => (
                <div
                  key={idx}
                  className="
                    flex justify-between items-center
                    pb-4 border-b border-slate-100
                    last:border-none last:pb-0
                  "
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={user.image}
                      alt="profile"
                      className="
                        w-12 h-12 min-w-12
                        rounded-full
                        object-cover
                        ring-2 ring-primary/10
                      "
                    />

                    <div>
                      <h1 className="text-base font-bold text-black/90">
                        {user.name}
                      </h1>

                      <p className="text-sm text-muted">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted whitespace-nowrap">
                    {user.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Services */}
          <div
            className="
              flex-1 flex flex-col
              bg-white
              rounded-[28px]
              border border-slate-200
              p-5
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-xl font-semibold text-black/80">
                Top Services
              </h1>

              <Link className="text-sm text-primary font-semibold">
                View All
              </Link>
            </div>

            {/* Services */}
            <div className="flex-1 space-y-2">

              {[
                {
                  title: "Plumbing",
                  total: "2,346",
                  progress: "75%",
                  icon: <MdOutlinePlumbing size={24} />,
                  bg: "bg-green-100",
                  color: "text-green-500",
                },

                {
                  title: "Electrician",
                  total: "1,875",
                  progress: "60%",
                  icon: <FaBook size={22} />,
                  bg: "bg-blue-100",
                  color: "text-blue-500",
                },

                {
                  title: "Cleaning",
                  total: "1,240",
                  progress: "45%",
                  icon: <FaUsers size={22} />,
                  bg: "bg-pink-100",
                  color: "text-pink-500",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="
                    border border-slate-100
                    rounded-2xl
                    p-4
                  "
                >
                  <div className="flex items-center justify-between">

                    <div className="flex gap-3 items-center">
                      <div
                        className={`
                          w-12 h-12 rounded-xl
                          flex items-center justify-center
                          ${service.bg}
                          ${service.color}
                        `}
                      >
                        {service.icon}
                      </div>

                      <div>
                        <h1 className="text-base font-semibold text-black/80">
                          {service.title}
                        </h1>

                        <p className="text-sm text-muted">
                          {service.total} bookings
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-slate-600">
                      {service.progress}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="mt-4 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`
                        h-full rounded-full
                        ${
                          idx === 0
                            ? "bg-green-500 w-[75%]"
                            : idx === 1
                            ? "bg-blue-500 w-[60%]"
                            : "bg-pink-500 w-[45%]"
                        }
                      `}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-[1.17] flex">
          <div className="w-full">
            <RevenueChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;