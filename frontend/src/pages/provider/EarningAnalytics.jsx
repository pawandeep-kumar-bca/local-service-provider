import { IoWallet, IoWalletOutline } from "react-icons/io5";
import { IoMdArrowRoundUp } from "react-icons/io";
import { MdOutlineCalendarMonth } from "react-icons/md";

import { IoCheckmarkCircle } from "react-icons/io5";

import { FaAngleRight, FaArrowTrendUp } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { PiHandWithdrawLight } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import MiniChart from "../../utils/MiniChart";
import { MdOutlinePayments } from "react-icons/md";
import EarningsOverviewChart from "../../utils/EarningsOverviewChart";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";
import PaymentMethodUsedChart from "../../utils/PaymentMethodUsedChart";

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
  const transactions = [
    {
      id: 1,

      image: "https://randomuser.me/api/portraits/women/44.jpg",

      name: "Priya Sharma",

      service: "AC Repair",

      date: "18 May 2025",

      amount: "₹1,200",

      payment: "UPI",

      status: "Paid",
    },

    {
      id: 2,

      image: "https://randomuser.me/api/portraits/men/32.jpg",

      name: "Amit Kumar",

      service: "Plumbing",

      date: "17 May 2025",

      amount: "₹850",

      payment: "Cash",

      status: "Paid",
    },

    {
      id: 3,

      image: "https://randomuser.me/api/portraits/women/68.jpg",

      name: "Neha Singh",

      service: "Home Cleaning",

      date: "16 May 2025",

      amount: "₹650",

      payment: "UPI",

      status: "Paid",
    },

    {
      id: 4,

      image: "https://randomuser.me/api/portraits/men/45.jpg",

      name: "Vikram Mehta",

      service: "Washing Machine",

      date: "15 May 2025",

      amount: "₹1,050",

      payment: "Card",

      status: "Paid",
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

              <p className="text-sm text-white/70 font-medium">vs last month</p>
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

                <h2 className="text-muted md:text-sm font-medium text-lg leading-5 ">
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

                  <p className="text-sm text-muted font-medium">
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

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-3 mt-5">
        <div>
          <EarningsOverviewChart />
        </div>

        <div
          className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-500 rounded-xl">
              <IoWalletOutline size={20} />
            </div>
            <h1 className="text-lg font-bold text-text">Available Balance</h1>
          </div>
          <div className="mt-3">
            <h1 className="text-3xl font-bold">₹24,500</h1>
            <p className="text-sm text-muted">
              You can withdraw your earnings anytime.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <Button fullWidth>
              <PiHandWithdrawLight size={24} /> Withdraw Now
            </Button>
            <Button fullWidth color="white" className="text-green-500">
              <CiBank size={24} />
              Add Bank Account
            </Button>
          </div>
          <div
            className="
      mt-6
      bg-green-100
      rounded-2xl
      px-4 py-2
    "
          >
            <h2 className="font-semibold text-text">Get Paid Faster 🚀</h2>

            <p className="text-xs text-muted  leading-6">
              Complete your KYC and add a verified bank account for instant
              payouts.
            </p>
            <Button className="mt-1 md:text-sm">Complete KYC</Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-3 mt-5">
        <div
          className="
    bg-white
    rounded-xl
    border border-slate-100
    md:p-5
    md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]
  "
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-text">Recent Transactions</h1>

            <Link
              className="
        text-sm
        font-semibold
        text-green-600
        hover:text-green-700
        transition-all
      "
            >
              View All
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-0">
            {transactions.map((item) => (
              <div
                key={item.id}
                className="
          rounded-2xl
          border border-slate-100
          p-4
          hover:shadow-[0_5px_20px_rgba(0,0,0,0.05)]
          transition-all duration-300
        "
              >
                {/* Desktop */}
                <div
                  className="
            hidden md:grid
            grid-cols-[2fr_1fr_1fr_1fr_auto]
            items-center
            gap-4
          "
                >
                  {/* User */}
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                w-12 h-12
                rounded-full
                object-cover
              "
                    />

                    <div>
                      <h2 className="font-semibold text-text">{item.name}</h2>

                      <p className="text-sm text-muted mt-1">{item.service}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex justify-center">
                    <p className="text-sm text-muted">{item.date}</p>
                  </div>

                  {/* Amount */}
                  <div className="flex justify-center">
                    <h2 className="font-bold text-text text-lg">
                      {item.amount}
                    </h2>
                  </div>

                  {/* Payment */}
                  <div className="flex justify-center">
                    <div
                      className="
                flex items-center gap-2
                px-3 py-1
                border border-muted
                rounded-lg
                bg-slate-50
              "
                    >
                      <MdOutlinePayments size={18} className="text-green-500" />

                      <p className="text-sm font-medium text-muted">
                        {item.payment}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex justify-end">
                    <div
                      className="
                px-4 py-1
                rounded-lg
                bg-green-100
                text-green-600
                text-xs
                font-semibold
              "
                    >
                      {item.status}
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                  w-12 h-12
                  rounded-full
                  object-cover
                "
                      />

                      <div>
                        <h2 className="font-semibold text-text">{item.name}</h2>

                        <p className="text-sm text-muted mt-1">
                          {item.service}
                        </p>
                      </div>
                    </div>

                    <h2 className="font-bold text-text text-lg">
                      {item.amount}
                    </h2>
                  </div>

                  {/* Bottom */}
                  <div
                    className="
              flex items-center justify-between
              mt-4
              flex-wrap gap-3
            "
                  >
                    <p className="text-sm text-muted">{item.date}</p>

                    <div className="flex items-center gap-2">
                      {/* Payment */}
                      <div
                        className="
                  flex items-center gap-2
                  px-3 py-1
                  border border-muted
                  rounded-lg
                  bg-slate-50
                "
                      >
                        <MdOutlinePayments
                          size={18}
                          className="text-green-500"
                        />

                        <p className="text-sm font-medium text-muted">
                          {item.payment}
                        </p>
                      </div>

                      {/* Status */}
                      <div
                        className="
                  px-4 py-1
                  rounded-lg
                  bg-green-100
                  text-green-600
                  text-xs
                  font-semibold
                "
                      >
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button color="white" fullWidth className="mt-4">
            View All Transactions <FaAngleRight />
          </Button>
        </div>
        <div>
          <div
            className="
        bg-white
        rounded-xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="
                w-11 h-11
                rounded-2xl
                bg-green-100
                text-green-600
                flex items-center justify-center
              "
                  >
                    <MdOutlineCalendarMonth size={24} />
                  </div>

                  <h1 className="text-2xl font-bold text-text">Next Payout</h1>
                </div>

                <p className="text-muted mt-3 text-base">
                  Your next payout will be processed on
                </p>

                <h2 className="text-2xl font-bold text-text mt-2">
                  25 May 2025
                </h2>
              </div>

              {/* Amount */}
              <div
                className="
            bg-slate-50
            rounded-xl
            px-5 py-2
            min-w-[180px]
          "
              >
                <p className="text-muted text-sm font-medium">
                  Estimated Amount
                </p>

                <h1 className="text-4xl font-bold text-text mt-3">₹2,000</h1>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4">
              {/* Line */}
              <div
                className="
            w-full
            h-2
            bg-slate-100
            rounded-full
            overflow-hidden
          "
              >
                <div
                  className="
              w-[72%]
              h-full
              bg-green-500
              rounded-full
            "
                />
              </div>

              {/* Steps */}
              <div
                className="
            flex items-center justify-between
            mt-4
            gap-4
          "
              >
                {/* Step */}
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircle size={24} className="text-green-500" />

                  <p className="font-medium text-muted">Request</p>
                </div>

                {/* Step */}
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircle size={24} className="text-green-500" />

                  <p className="font-medium text-muted">Processing</p>
                </div>

                {/* Step */}
                <div className="flex items-center gap-2">
                  <div
                    className="
                w-6 h-6
                rounded-full
                bg-slate-400
                text-white
                flex items-center justify-center
                text-xs
                font-bold
              "
                  >
                    3
                  </div>

                  <p className="font-medium text-muted">Payout</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <PaymentMethodUsedChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningAnalytics;
