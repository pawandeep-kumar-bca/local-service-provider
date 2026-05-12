import { IoWallet } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";

import { FaArrowTrendUp } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { PiHandWithdrawLight } from "react-icons/pi";

import MiniChart from "../../utils/MiniChart";

const EarningAnalytics = () => {
  const cardsContent = [
    {
      bgColor: "bg-green-100",
      textColor: "text-green-500",

      borderColor: "#22c55e",
      startBg: "rgba(34,197,94,0.35)",
      endBg: "rgba(34,197,94,0)",

      Icon: FaArrowTrendUp,

      text: "This Month Earning",

      amount: "27,300",

      growthColor: "text-green-500",
    },

    {
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",

      borderColor: "#eab308",
      startBg: "rgba(234,179,8,0.35)",
      endBg: "rgba(234,179,8,0)",

      Icon: GiSandsOfTime,

      text: "Pending Amount",

      amount: "20,300",

      growthColor: "text-yellow-500",
    },

    {
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",

      borderColor: "#a855f7",
      startBg: "rgba(168,85,247,0.35)",
      endBg: "rgba(168,85,247,0)",

      Icon: PiHandWithdrawLight,

      text: "Withdrawn Amount",

      amount: "22,400",

      growthColor: "text-green-500",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Total Earnings Card */}
        <div
          className="
            bg-gradient-to-r from-green-500 to-green-600
            rounded-xl
            relative
            overflow-hidden
            p-5
            shadow-[0_10px_30px_rgba(34,197,94,0.25)]
            hover:-translate-y-1
                transition-all duration-300
          "
        >
          {/* Content */}
          <div className="relative z-10 pl-1 pt-3">
            <h2 className="text-white/80 text-sm font-medium">
              Total Earnings
            </h2>

            <h1 className="text-white text-3xl md:text-4xl font-bold mt-3">
              ₹24,500
            </h1>

            <div className="flex items-center gap-1 mt-3 flex-wrap">
              <span
                className="
                  text-white
                  flex items-center gap-1
                  font-semibold
                  text-sm
                "
              >
                <IoMdArrowRoundUp size={18} />
                18.5%
              </span>

              <p className="text-xs md:text-sm text-white/70 font-medium">
                vs last month
              </p>
            </div>
          </div>

          {/* Wallet Icon */}
          <div className="absolute -right-4 -top-2">
            <IoWallet size={150} className="text-green-700" />
          </div>

          {/* Mini Chart */}
        </div>

        {/* Other Cards */}
        {cardsContent.map((item, idx) => {
          const {
            bgColor,
            startBg,
            endBg,
            textColor,
            borderColor,
            Icon,
            text,
            amount,
            growthColor,
          } = item;

          return (
            <div
              key={idx}
              className="
                bg-white
                rounded-xl
                relative
                overflow-hidden
                p-5
                border border-slate-100
                shadow-[0_5px_20px_rgba(0,0,0,0.06)]
                hover:-translate-y-1
                transition-all duration-300
                
              "
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-14 h-14
                    flex items-center justify-center
                    ${textColor}
                    ${bgColor}
                    rounded-2xl
                    shrink-0
                  `}
                >
                  <Icon size={24} />
                </div>

                <h2 className="text-muted text-sm font-medium leading-5">
                  {text}
                </h2>
              </div>

              {/* Content */}
              <div className="mt-3">
                <h1 className="text-text text-3xl font-bold">₹{amount}</h1>

                <div className="flex items-center gap-1 mt-2 flex-wrap">
                  <span
                    className={`
                      ${growthColor}
                      flex items-center gap-1
                      font-semibold
                      text-sm
                    `}
                  >
                    <IoMdArrowRoundUp size={18} />
                    18.5%
                  </span>

                  <p className="text-xs md:text-sm text-muted font-medium">
                    vs last month
                  </p>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="absolute right-2 bottom-2">
                <MiniChart
                  borderColor={borderColor}
                  gradientStart={startBg}
                  gradientEnd={endBg}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarningAnalytics;
