import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { useProviderPaymentMethod } from "../hooks/useProvider";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const methodColors = {
  upi: {
    chart: "#22c55e",
    tailwind: "bg-green-500",
  },
  cod: {
    chart: "#3b82f6",
    tailwind: "bg-blue-500",
  },
  card: {
    chart: "#f59e0b",
    tailwind: "bg-orange-400",
  },
  wallet: {
    chart: "#8b5cf6",
    tailwind: "bg-purple-500",
  },
};

const PaymentMethodUsedChart = () => {
  const { data, isLoading, isError } =useProviderPaymentMethod()

  const result = data?.result;

  const paymentMethods = result?.paymentMethods || [];

  const chartData = {
    labels: paymentMethods.map((item) => item.label),

    datasets: [
      {
        data: paymentMethods.map((item) => item.amount),

        backgroundColor: paymentMethods.map(
          (item) =>
            methodColors[item.method]?.chart || "#94a3b8"
        ),

        borderWidth: 0,
        cutout: "72%",
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
          label: function (context) {
            return `₹${Number(
              context.raw
            ).toLocaleString("en-IN")}`;
          },
        },
      },
    },
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
        <h1 className="text-xl font-bold text-text mb-6">
          Earnings by Payment Method
        </h1>

        <div className="flex items-center justify-center h-[180px]">
          <p className="text-muted">
            Loading payment data...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
        <h1 className="text-xl font-bold text-text mb-6">
          Earnings by Payment Method
        </h1>

        <div className="flex items-center justify-center h-[180px]">
          <p className="text-red-500">
            Failed to load payment data
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-100
        p-5
        shadow-[0_5px_20px_rgba(0,0,0,0.06)]
      "
    >
      <h1 className="text-xl font-bold text-text mb-6">
        Earnings by Payment Method
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">

        {/* Chart */}
        <div className="relative w-[140px] h-[140px]">
          <Doughnut
            data={chartData}
            options={options}
          />

          {/* Center Content */}
          <div
            className="
              absolute inset-0
              flex flex-col
              items-center justify-center
            "
          >
            <h1 className="text-xl font-bold text-text">
              ₹{Number(
                result?.totalAmount || 0
              ).toLocaleString("en-IN")}
            </h1>

            <p className="text-sm text-muted mt-1">
              Total
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 w-full space-y-2">
          {paymentMethods.map((item) => (
            <div
              key={item.method}
              className="flex items-center justify-between"
            >
              {/* Left */}
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`
                    w-3 h-3 rounded-full
                    ${
                      methodColors[item.method]?.tailwind ||
                      "bg-slate-400"
                    }
                  `}
                />

                <p className="font-medium text-text">
                  {item.label}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6 flex-1">
                <p className="text-muted font-medium">
                  {item.percent}%
                </p>

                <h2 className="font-semibold text-text">
                  ₹{Number(item.amount).toLocaleString("en-IN")}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PaymentMethodUsedChart;