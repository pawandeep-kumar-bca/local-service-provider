import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const monthlyData = [
  {
    day: "May 12",
    totalRevenue: 700,
    platformFees: 250,
    providerEarnings: 450,
  },
  {
    day: "May 19",
    totalRevenue: 1050,
    platformFees: 520,
    providerEarnings: 530,
  },
  {
    day: "May 26",
    totalRevenue: 820,
    platformFees: 300,
    providerEarnings: 520,
  },
  {
    day: "Jun 02",
    totalRevenue: 1400,
    platformFees: 760,
    providerEarnings: 640,
  },
  {
    day: "Jun 05",
    totalRevenue: 1100,
    platformFees: 600,
    providerEarnings: 500,
  },
  {
    day: "Jun 07",
    totalRevenue: 1450,
    platformFees: 850,
    providerEarnings: 600,
  },
  {
    day: "Jun 09",
    totalRevenue: 1080,
    platformFees: 500,
    providerEarnings: 580,
  },
];

const weeklyData = [
  {
    day: "Mon",
    totalRevenue: 1500,
    platformFees: 1300,
    providerEarnings: 200,
  },
  {
    day: "Tue",
    totalRevenue: 450,
    platformFees: 280,
    providerEarnings: 170,
  },
  {
    day: "Wed",
    totalRevenue: 1000,
    platformFees: 880,
    providerEarnings: 120,
  },
  {
    day: "Thu",
    totalRevenue: 620,
    platformFees: 400,
    providerEarnings: 220,
  },
  {
    day: "Fri",
    totalRevenue: 2000,
    platformFees: 1900,
    providerEarnings: 100,
  },
  {
    day: "Sat",
    totalRevenue: 690,
    platformFees: 470,
    providerEarnings: 220,
  },
  {
    day: "Sun",
    totalRevenue: 540,
    platformFees: 330,
    providerEarnings: 210,
  },
];

const RevenueOverview = () => {
  const [filter, setFilter] = useState("month");

  const data = filter === "month" ? monthlyData : weeklyData;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">
            Revenue Overview
          </h3>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="
            border border-slate-200
            rounded-xl
            px-4 py-2.5
            text-sm
            outline-none
            bg-white
            text-slate-700
            shadow-sm
          "
        >
          <option value="month">This Month</option>
          <option value="week">This Week</option>
        </select>
      </div>

      <div className="flex gap-4 lg:flex-row flex-col">
        {/* Chart */}
        <div
          className="
            
            flex-1
            p-4
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            rounded-2xl
            bg-white
          "
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              {/* Gradients */}
              <defs>
                {/* Blue */}
                <linearGradient
                  id="blueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#3B82F6"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor="#3B82F6"
                    stopOpacity={0}
                  />
                </linearGradient>

                {/* Green */}
                <linearGradient
                  id="greenGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#22C55E"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor="#22C55E"
                    stopOpacity={0}
                  />
                </linearGradient>

                {/* Purple */}
                <linearGradient
                  id="purpleGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#9333EA"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="95%"
                    stopColor="#9333EA"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#64748b" }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              />

              {/* Total Revenue */}
              <Area
                type="monotone"
                dataKey="totalRevenue"
                stroke="#3B82F6"
                strokeWidth={3}
                fill="url(#blueGradient)"
              />

              {/* Platform Fees */}
              <Area
                type="monotone"
                dataKey="platformFees"
                stroke="#22C55E"
                strokeWidth={3}
                fill="url(#greenGradient)"
              />

              {/* Provider Earnings */}
              <Area
                type="monotone"
                dataKey="providerEarnings"
                stroke="#9333EA"
                strokeWidth={3}
                fill="url(#purpleGradient)"
              />

              {/* Smooth lines */}
              <Line
                type="monotone"
                dataKey="totalRevenue"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{
                  r: 4,
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="platformFees"
                stroke="#22C55E"
                strokeWidth={3}
                dot={{
                  r: 4,
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="providerEarnings"
                stroke="#9333EA"
                strokeWidth={3}
                dot={{
                  r: 4,
                  strokeWidth: 2,
                  fill: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Right Side Stats */}
        <div
          className="
            flex flex-col
            gap-2
          "
        >
          {/* Total Revenue */}
          <div
            className="
              p-4
              rounded-2xl
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />

              <div>
                <span className="text-sm text-slate-500">
                  Total Revenue
                </span>

                <h1 className="text-xl font-bold text-slate-800 mt-1">
                  ₹ 24,45,000
                </h1>
              </div>
            </div>
          </div>

          {/* Provider Earnings */}
          <div
            className="
              p-4
              rounded-2xl
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 mt-2" />

              <div>
                <span className="text-sm text-slate-500">
                  Provider Earnings
                </span>

                <h1 className="text-xl font-bold text-slate-800 mt-1">
                  ₹ 20,45,000
                </h1>
              </div>
            </div>
          </div>

          {/* Platform Fees */}
          <div
            className="
              p-4
              rounded-2xl
              bg-white
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 mt-2" />

              <div>
                <span className="text-sm text-slate-500">
                  Platform Fees
                </span>

                <h1 className="text-xl font-bold text-slate-800 mt-1">
                  ₹ 4,45,000
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueOverview;