import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { useState } from "react";

import { Line } from "react-chartjs-2";

import { IoMdArrowRoundUp } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const chartData = {
  "This Week": {
    amount: "₹ 22,550",

    growth: "15%",

    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    current: [4000, 5800, 6300, 7400, 5600, 7500, 7200],

    previous: [2800, 3900, 5000, 4700, 3500, 5700, 5200],
  },

  "This Month": {
    amount: "₹ 85,420",

    growth: "22%",

    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

    current: [22000, 26000, 32000, 38000],

    previous: [18000, 21000, 28000, 30000],
  },

  "This Year": {
    amount: "₹ 4,82,000",

    growth: "35%",

    labels: [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
],

    current: [
  40000,
  58000,
  72000,
  85000,
  92000,
  110000,
  118000,
  125000,
  132000,
  145000,
  152000,
  168000,
],

previous: [
  32000,
  45000,
  55000,
  70000,
  76000,
  90000,
  98000,
  105000,
  112000,
  120000,
  128000,
  140000,
],
  },
};

const ProviderBookingChart = () => {
  const [option, setOption] = useState("This Week");

  const selectedData = chartData[option];

  const data = {
    labels: selectedData.labels,

    datasets: [
      {
        label: "Current",

        data: selectedData.current,

        borderColor: "#22c55e",

        backgroundColor: (context) => {
          const ctx = context.chart.ctx;

          const gradient = ctx.createLinearGradient(0, 0, 0, 300);

          gradient.addColorStop(0, "rgba(34,197,94,0.25)");
          gradient.addColorStop(1, "rgba(34,197,94,0)");

          return gradient;
        },

        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#22c55e",
      },

      {
        label: "Previous",

        data: selectedData.previous,

        borderColor: "#d1d5db",

        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#d1d5db",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          callback: function (value) {
            if (value >= 1000) {
              return "₹" + value / 1000 + "K";
            }

            return value;
          },
        },

        grid: {
          display: false,
          color: "#f1f5f9",
        },

        border: {
          display: true,
        },
      },

      x: {
        grid: {
          display: false,
        },

        border: {
          display: true,
        },
      },
    },
  };

  return (
    <div>
      
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-semibold text-muted">
            Booking Analytics
          </h1>

          <p className="text-sm text-muted mt-1">
            Track your booking performance
          </p>
        </div>

        {/* Filter */}
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
          className="
            border border-slate-200
            rounded-lg
            font-medium
            text-gray-700
            px-4 py-2.5
            text-sm
            outline-none
            bg-white
          "
        >
          <option value="This Week">This Week</option>

          <option value="This Month">This Month</option>

          <option value="This Year">This Year</option>
        </select>
      </div>

      {/* Analytics */}
      <div className="flex md:items-center md:flex-row flex-col justify-between  gap-4 mb-6 relative">
        {/* Revenue */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {selectedData.amount}
          </h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center gap-1 text-green-500 font-semibold text-sm">
              <IoMdArrowRoundUp size={18} />
              {selectedData.growth}
            </span>

            <p className="text-sm text-muted">
              compared to last period
            </p>
          </div>
        </div>

        {/* Chart Labels */}
        <div className="flex items-center gap-5 absolute right-0  text-sm font-medium text-muted">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p>Current</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <p>Previous</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <Line data={data} options={options} className="shadow-[0_0_20px_rgba(0,0,0,0.10)] p-1 rounded-xl"/>
    </div>
  );
};

export default ProviderBookingChart;