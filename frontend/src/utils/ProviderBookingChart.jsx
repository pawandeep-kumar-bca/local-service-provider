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

import { useProviderBookingAnalytics } from "../hooks/useProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const ProviderBookingChart = () => {
  const [option, setOption] = useState("This Week");

  const periodMap = {
    "This Week": "week",
    "This Month": "month",
    "This Year": "year",
  };

  const period = periodMap[option];

  const { data, isLoading } = useProviderBookingAnalytics({
    period,
  });

  // =========================
  // Get Period Specific Data
  // =========================

  let currentData = [];
  let previousData = [];
  let currentTotal = 0;
  // let previousTotal = 0;
  let growth = null;
  let labelKey = "";

  if (data?.period === "week") {
    currentData = data?.currentWeek || [];
    previousData = data?.previousWeek || [];

    currentTotal = data?.currentTotal ?? 0;
    // previousTotal = data?.previousTotal ?? 0;
    growth = data?.growthPercentage;

    labelKey = "day";
  }

  if (data?.period === "month") {
    currentData = data?.currentMonth || [];
    previousData = data?.previousMonth || [];

    currentTotal = data?.currentMonthTotal ?? 0;
    // previousTotal = data?.previousMonthTotal ?? 0;
    growth = data?.monthGrowthPercentage;

    labelKey = "week";
  }

  if (data?.period === "year") {
    currentData = data?.currentYear || [];
    previousData = data?.previousYear || [];

    currentTotal = data?.currentYearTotal ?? 0;
    // previousTotal = data?.previousYearTotal ?? 0;
    growth = data?.yearGrowthPercentage;

    labelKey = "month";
  }

  // =========================
  // Chart Data
  // =========================

  const labels = currentData.map(
    (item) => item?.[labelKey]
  );

  const currentBookings = currentData.map(
    (item) => item?.bookings ?? 0
  );

  const previousBookings = previousData.map(
    (item) => item?.bookings ?? 0
  );

  const chartData = {
    labels,

    datasets: [
      {
        label: "Current",
        data: currentBookings,

        borderColor: "#22c55e",

        backgroundColor: (context) => {
          const ctx = context.chart.ctx;

          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            300
          );

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
        data: previousBookings,

        borderColor: "#d1d5db",

        tension: 0.4,

        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: "#d1d5db",
      },
    ],
  };

  // =========================
  // Chart Options
  // =========================

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

      {/* Loading */}
      {isLoading ? (
        <div className="h-[350px] flex items-center justify-center">
          <p className="text-muted">
            Loading analytics...
          </p>
        </div>
      ) : (
        <>
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
                {growth !== null && growth !== undefined ? (
                  <>
                    <span
                      className={`
                        flex
                        items-center
                        gap-1
                        font-semibold
                        text-sm
                        ${growth >= 0
                          ? "text-green-500"
                          : "text-red-500"
                        }
                      `}
                    >
                      <IoMdArrowRoundUp
                        size={18}
                        className={
                          growth < 0
                            ? "rotate-180"
                            : ""
                        }
                      />

                      {Math.abs(growth)}%
                    </span>

                    <p className="text-sm text-muted">
                      compared to last period
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-muted">
                    No previous period data
                  </p>
                )}
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
            data={chartData}
            options={options}
            className="
              shadow-[0_0_20px_rgba(0,0,0,0.10)]
              p-1
              rounded-xl
            "
          />
        </>
      )}
    </div>
  );
};

export default ProviderBookingChart;