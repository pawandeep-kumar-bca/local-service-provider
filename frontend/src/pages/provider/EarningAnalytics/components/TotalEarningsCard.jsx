import { IoWallet } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";

const TotalEarningsCard = () => {
  return (
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
      <div className="relative z-10 pl-1 pt-3">
        <h2 className="text-white/80 sm:text-sm text-lg font-medium">
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

          <p className="text-sm text-white/70 font-medium">
            vs last month
          </p>
        </div>
      </div>

      <div className="absolute -right-4 -top-2">
        <IoWallet size={150} className="text-green-700" />
      </div>
    </div>
  );
};

export default TotalEarningsCard;