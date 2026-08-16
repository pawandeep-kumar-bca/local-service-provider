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
  Tooltip
);

const chartData = {
  "This Week": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    current: [4, 7, 6, 9, 5, 8, 3],

    previous: [3, 5, 6, 5, 4, 6, 4],
  },

  "This Month": {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

    current: [42, 58, 67, 75],

    previous: [35, 48, 55, 62],
  },

  "This Year": {
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
      32,
      45,
      52,
      61,
      68,
      75,
      82,
      91,
      87,
      96,
      105,
      118,
    ],

    previous: [
      27,
      38,
      45,
      50,
      56,
      62,
      68,
      73,
      71,
      78,
      86,
      94,
    ],
  },
};

const ProviderBookingChart = () => {
  const [option, setOption] = useState("This Week");

  const selectedData = chartData[option];

  const currentTotal = selectedData.current.reduce(
    (total, value) => total + value,
    0
  );

  const previousTotal = selectedData.previous.reduce(
    (total, value) => total + value,
    0
  );

  const growth =
    previousTotal > 0
      ? Math.round(
          ((currentTotal - previousTotal) / previousTotal) * 100
        )
      : 0;

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

          gradient.addColorStop(
            0,
            "rgba(34,197,94,0.25)"
          );

          gradient.addColorStop(
            1,
            "rgba(34,197,94,0)"
          );

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

      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.parsed.y} bookings`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          precision: 0,

          callback: function (value) {
            return `${value}`;
          },
        },

        title: {
          display: true,
          text: "Bookings",
        },

        grid: {
          display: false,
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
      {/* Header */}
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
      <div
        className="
          flex
          md:items-center
          md:flex-row
          flex-col
          justify-between
          gap-4
          mb-6
          relative
        "
      >
        {/* Total Bookings */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {currentTotal}
          </h1>

          <p className="text-sm text-muted mt-1">
            Total Bookings
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span
              className={`
                flex
                items-center
                gap-1
                font-semibold
                text-sm
                ${
                  growth >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              `}
            >
              <IoMdArrowRoundUp
                size={18}
                className={
                  growth < 0 ? "rotate-180" : ""
                }
              />

              {Math.abs(growth)}%
            </span>

            <p className="text-sm text-muted">
              compared to last period
            </p>
          </div>
        </div>

        {/* Chart Labels */}
        <div
          className="
            flex
            items-center
            gap-5
            absolute
            right-0
            text-sm
            font-medium
            text-muted
          "
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <p>Current</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-300" />

            <p>Previous</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <Line
        data={data}
        options={options}
        className="
          shadow-[0_0_20px_rgba(0,0,0,0.10)]
          p-1
          rounded-xl
        "
      />
    </div>
  );
};

export default ProviderBookingChart;