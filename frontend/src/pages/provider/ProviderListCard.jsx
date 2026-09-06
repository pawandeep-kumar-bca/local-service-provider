import React from "react";

import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";
import { TfiWallet } from "react-icons/tfi";
import { LuClipboardList } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";

import { useProviderDashboardOverview } from "../../hooks/useProvider";

const ProviderListCard = () => {
  const { data, isLoading } = useProviderDashboardOverview();

  const dashboardOverview = data?.dashboardOverview;

  const getGrowthData = (growth) => {
    const percentage = Number(growth) || 0;

    if (percentage > 0) {
      return {
        value: `${percentage}%`,
        icon: <IoMdArrowRoundUp size={18} />,
        color: "text-white",
      };
    }

    if (percentage < 0) {
      return {
        value: `${Math.abs(percentage)}%`,
        icon: <IoMdArrowRoundDown size={18} />,
        color: "text-white",
      };
    }

    return {
      value: "0%",
      icon: null,
      color: "text-white",
    };
  };

  const statsData = [
    {
      id: 1,
      title: "Total Bookings",
      value: dashboardOverview?.totalBookings ?? 0,
      growth: dashboardOverview?.percentage?.totalBookings ?? 0,
      icon: <LuClipboardList size={24} />,
      iconBg: "bg-white/20",
      iconColor: "text-white",
      bgColor:
        "bg-gradient-to-r from-emerald-500 to-green-600 border-green-500",
    },
    {
      id: 2,
      title: "Pending Bookings",
      value: dashboardOverview?.pendingBookings ?? 0,
      growth: dashboardOverview?.percentage?.pendingBookings ?? 0,
      icon: <GiSandsOfTime size={24} />,
      iconBg: "bg-white/20",
      iconColor: "text-white",
      bgColor:
        "bg-gradient-to-r from-amber-400 to-orange-500 border-orange-400",
    },
    {
      id: 3,
      title: "Completed Services",
      value: dashboardOverview?.completedBookings ?? 0,
      growth: dashboardOverview?.percentage?.completedBookings ?? 0,
      icon: <FaRegCircleCheck size={24} />,
      iconBg: "bg-white/20",
      iconColor: "text-white",
      bgColor: "bg-gradient-to-r from-sky-500 to-blue-600 border-blue-500",
    },
    {
      id: 4,
      title: "Total Earnings",
      value: `₹ ${dashboardOverview?.totalEarnings ?? 0}`,
      growth: dashboardOverview?.percentage?.totalEarnings ?? 0,
      icon: <TfiWallet size={24} />,
      iconBg: "bg-white/20",
      iconColor: "text-white",
      bgColor:
        "bg-gradient-to-r from-violet-500 to-purple-600 border-purple-500",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 mb-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-40 rounded-2xl bg-gray-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4 mb-6">
      {statsData.map((item) => {
        const growthData = getGrowthData(item.growth);

        return (
          <div
            key={item.id}
            className={`
              ${item.bgColor}
              border
              rounded-2xl
              p-5
              text-white
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              hover:-translate-y-1
              hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
              transition-all duration-300
              cursor-pointer
              relative
              overflow-hidden
            `}
          >
            {/* Background Blur Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />

            <div className="relative flex items-center gap-4">
              {/* Icon */}
              <div
                className={`
                  ${item.iconBg}
                  ${item.iconColor}
                  w-14 h-14
                  rounded-2xl
                  flex items-center justify-center
                  shrink-0
                  backdrop-blur-md
                `}
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h1 className="text-sm text-white/80 font-medium">
                  {item.title}
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold mt-1">
                  {item.value}
                </h2>

                <div className="flex items-center gap-1 mt-2 flex-wrap">
                  <span
                    className={`
                      ${growthData.color}
                      flex items-center gap-1
                      font-semibold
                      text-sm
                    `}
                  >
                    {growthData.icon}
                    {growthData.value}
                  </span>

                  <p className="text-xs md:text-sm text-white/70 font-medium">
                    from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProviderListCard;