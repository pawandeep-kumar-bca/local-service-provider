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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const chartData = {
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    current: [4000, 6500, 8000, 12000, 10000, 14500, 13000],

    previous: [2500, 4000, 5500, 9000, 8500, 10000, 10500],
  },

  month: {
    labels: [
      "1 May",
      "4 May",
      "7 May",
      "10 May",
      "13 May",
      "16 May",
      "19 May",
    ],

    current: [4000, 7800, 9500, 12000, 11800, 12450, 14500],

    previous: [2500, 5000, 5500, 9000, 8500, 10000, 10500],
  },

  year: {
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
      12000,
      18000,
      24000,
      28000,
      35000,
      42000,
      48000,
      52000,
      60000,
      68000,
      74000,
      82000,
    ],

    previous: [
      8000,
      12000,
      18000,
      22000,
      28000,
      34000,
      39000,
      44000,
      50000,
      56000,
      62000,
      70000,
    ],
  },
};

const EarningsOverviewChart = () => {
  const [activeTab, setActiveTab] = useState("month");

  const selected = chartData[activeTab];

  const data = {
    labels: selected.labels,

    datasets: [
      {
        label: "This Month",

        data: selected.current,

        borderColor: "#22c55e",

        backgroundColor: (context) => {
          const ctx = context.chart.ctx;

          const gradient = ctx.createLinearGradient(0, 0, 0, 350);

          gradient.addColorStop(0, "rgba(34,197,94,0.25)");

          gradient.addColorStop(1, "rgba(34,197,94,0)");

          return gradient;
        },

        fill: true,

        tension: 0.4,

        pointRadius: 4,

        pointHoverRadius: 7,

        pointBackgroundColor: "#22c55e",

        pointBorderColor: "#ffffff",

        pointBorderWidth: 2,
      },

      {
        label: "Last Month",

        data: selected.previous,

        borderColor: "#cbd5e1",

        borderDash: [6, 6],

        tension: 0.4,

        pointRadius: 0,

        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

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
          label: function (context) {
            return `₹${context.raw.toLocaleString()}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,

        ticks: {
          color: "#64748b",

          callback: function (value) {
            if (value === 0) {
              return "₹0";
            }

            return `₹${value / 1000}K`;
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
         md:p-6 p-1 
        md:shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        
        <h1 className="text-xl font-bold text-gray-800">
          Earnings Overview
        </h1>

        {/* Filters */}
        <div className="flex items-center gap-2">
          
          <button
            onClick={() => setActiveTab("week")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm cursor-pointer
              font-medium
              transition-all duration-300

              ${
                activeTab === "week"
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Week
          </button>

          <button
            onClick={() => setActiveTab("month")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm cursor-pointer
              font-medium
              transition-all duration-300

              ${
                activeTab === "month"
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Month
          </button>

          <button
            onClick={() => setActiveTab("year")}
            className={`
              px-4 py-2
              rounded-xl
              text-sm cursor-pointer
              font-medium
              transition-all duration-300

              ${
                activeTab === "year"
                  ? "bg-green-100 text-green-600"
                  : "bg-slate-100 text-slate-600"
              }
            `}
          >
            This Year
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="md:h-[320px] h-[200px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default EarningsOverviewChart;