import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["UPI", "Cash", "Card", "Wallet"],

  datasets: [
    {
      data: [14700, 4900, 3675, 1225],

      backgroundColor: [
        "#22c55e",
        "#3b82f6",
        "#f59e0b",
        "#8b5cf6",
      ],

      borderWidth: 0,

      cutout: "72%",
    },
  ],
};

const paymentData = [
  {
    label: "UPI",
    percent: "60%",
    amount: "₹14,700",
    color: "bg-green-500",
  },

  {
    label: "Cash",
    percent: "20%",
    amount: "₹4,900",
    color: "bg-blue-500",
  },

  {
    label: "Card",
    percent: "15%",
    amount: "₹3,675",
    color: "bg-orange-400",
  },

  {
    label: "Wallet",
    percent: "5%",
    amount: "₹1,225",
    color: "bg-purple-500",
  },
];

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      callbacks: {
        label: function (context) {
          return `₹${context.raw.toLocaleString()}`;
        },
      },
    },
  },
};

const PaymentMethodUsedChart = () => {
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
      {/* Heading */}
      <h1 className="text-xl font-bold text-text mb-6">
        Earnings by Payment Method
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Chart */}
        <div className="relative w-[140px] h-[140px]">
          
          <Doughnut data={data} options={options} />

          {/* Center Content */}
          <div
            className="
              absolute inset-0
              flex flex-col
              items-center justify-center
            "
          >
            <h1 className="text-xl font-bold text-text">
              ₹24,500
            </h1>

            <p className="text-sm text-muted mt-1">
              Total
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 w-full space-y-2">
          
          {paymentData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between"
            >
              {/* Left */}
              <div className="flex items-center gap-3 flex-1">
                
                <div
                  className={`
                    w-3 h-3 rounded-full
                    ${item.color}
                  `}
                />

                <p className="font-medium text-text">
                  {item.label}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6 flex-1">
                
                <p className="text-muted font-medium">
                  {item.percent}
                </p>

                <h2 className="font-semibold text-text">
                  {item.amount}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodUsedChart