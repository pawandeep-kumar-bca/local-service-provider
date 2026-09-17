import { IoMdArrowRoundUp } from "react-icons/io";
import MiniChart from "../../../../utils/MiniChart";
import { getGrowthData } from "../../../../utils/getGrowthData";

const EarningsStatCard = ({
  bgColor,
  textColor,
  borderColor,
  startBg,
  endBg,
  Icon,
  text,
  amount,
  growth,data
}) => {
const growthData = getGrowthData(growth)
  return (
    <div
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
          {Icon && <Icon size={24} />}
        </div>

        <h2 className="text-muted md:text-sm font-medium text-lg leading-5">
          {text}
        </h2>
      </div>

      <div className="mt-3">
        <h1 className="text-text text-3xl font-bold">
          ₹ {amount}
        </h1>

        <div className="flex items-center gap-1 mt-2 flex-wrap">
          <span
            className={`
              ${growthData?.color}
              flex items-center gap-1
              font-semibold
              text-sm
            `}
          >
            {growthData?.icon}
            {growthData?.value}
          </span>

          <p className="text-sm text-muted font-medium">
            vs last month
          </p>
        </div>
      </div>

      <div className="absolute right-2 bottom-2">
        <MiniChart
          borderColor={borderColor}
          gradientStart={startBg}
          gradientEnd={endBg}
          chartData={data}
        />
      </div>
    </div>
  );
};

export default EarningsStatCard;