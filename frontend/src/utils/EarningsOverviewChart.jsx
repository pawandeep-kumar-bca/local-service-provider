import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

import { useProviderEarningOverview } from "../hooks/useProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const EarningsOverviewChart = () => {
  const [activeTab, setActiveTab] = useState("week");

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useProviderEarningOverview({ period: activeTab });

  const result = response?.result;



  if (isLoading) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 md:p-6 p-4">
        <div className="h-[320px] flex items-center justify-center text-slate-500">
          Loading...
        </div>
      </div>
    );
  }



  if (isError) {
    return (
      <div className="bg-white rounded-xl border border-slate-100 md:p-6 p-4">
        <div className="h-[320px] flex flex-col items-center justify-center">
          <p className="text-red-500 font-medium">
            Failed to load earnings overview
          </p>

          <p className="text-sm text-slate-500 mt-2">
            {error?.response?.data?.message ||
              error?.message ||
              "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }



  const labels = result?.labels || [];

  const currentAmounts = result?.current || [];

  const previousAmounts = result?.previous || [];



  const data = {
    labels: labels,

    datasets: [


      {
        label:
          activeTab === "week"
            ? "This Week"
            : activeTab === "month"
              ? "This Month"
              : "This Year",

        data: currentAmounts,

        borderColor: "#22c55e",

        backgroundColor: (context) => {
          const chart = context.chart;

          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return "rgba(34, 197, 94, 0.15)";
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );

          gradient.addColorStop(
            0,
            "rgba(34, 197, 94, 0.25)"
          );

          gradient.addColorStop(
            1,
            "rgba(34, 197, 94, 0)"
          );

          return gradient;
        },

        fill: true,

        tension: 0.4,

        borderWidth: 2,

        pointRadius: 4,

        pointHoverRadius: 7,

        pointBackgroundColor: "#22c55e",

        pointBorderColor: "#ffffff",

        pointBorderWidth: 2,
      },


      {
        label:
          activeTab === "week"
            ? "Last Week"
            : activeTab === "month"
              ? "Last Month"
              : "Last Year",

        data: previousAmounts,

        borderColor: "#cbd5e1",

        borderDash: [6, 6],

        borderWidth: 2,

        tension: 0.4,

        pointRadius: 0,

        pointHoverRadius: 4,

        fill: false,
      },
    ],
  };



  const options = {
    responsive: true,

    maintainAspectRatio: false,

    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },

    interaction: {
      intersect: false,
      mode: "index",
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#ffffff",

        titleColor: "#64748b",

        bodyColor: "#22c55e",

        borderColor: "#e2e8f0",

        borderWidth: 1,

        padding: 14,

        displayColors: false,

        titleFont: {
          size: 12,
        },

        bodyFont: {
          size: 18,
          weight: "bold",
        },

        callbacks: {
          label: (context) => {
            const value = Number(context.raw || 0);

            return `₹${value.toLocaleString("en-IN")}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: "#64748b",

          callback: (value) => {
            if (value === 0) {
              return "₹0";
            }

            if (value >= 100000) {
              return `₹${(value / 100000).toFixed(1)}L`;
            }

            if (value >= 1000) {
              return `₹${(value / 1000).toFixed(1)}K`;
            }

            return `₹${value}`;
          },
        },

        grid: {
          color: "#f1f5f9",
        },

        border: {
          display: true,
        },
      },

      x: {
        ticks: {
          color: "#64748b",

          maxRotation: 0,

          minRotation: 0,

          autoSkip: false,
        },

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
    <div
      className="
        bg-white
        rounded-xl
        border border-slate-100
        md:p-6
        p-4
        md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >


      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          Earnings Overview
        </h1>



        <div className="flex items-center gap-2">
          {/* Week */}

          <button
            type="button"
            onClick={() => setActiveTab("week")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm
              cursor-pointer
              font-medium
              transition-all
              duration-300
              ${activeTab === "week"
                ? "bg-green-100 text-green-600"
                : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Week
          </button>

          {/* Month */}

          <button
            type="button"
            onClick={() => setActiveTab("month")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm
              cursor-pointer
              font-medium
              transition-all
              duration-300
              ${activeTab === "month"
                ? "bg-green-100 text-green-600"
                : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Month
          </button>

          {/* Year */}

          <button
            type="button"
            onClick={() => setActiveTab("year")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm
              cursor-pointer
              font-medium
              transition-all
              duration-300
              ${activeTab === "year"
                ? "bg-green-100 text-green-600"
                : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Year
          </button>
        </div>
      </div>



      <div

        className="md:h-[320px] h-[220px]"
      >
        <Line
          updateMode="default"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default EarningsOverviewChart;