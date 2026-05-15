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
    bookings: 700,
    completed: 250,
  },
  {
    day: "May 19",
    bookings: 1050,
    completed: 520,
  },
  {
    day: "May 26",
    bookings: 820,
    completed: 300,
  },
  {
    day: "Jun 02",
    bookings: 1400,
    completed: 760,
  },
  {
    day: "Jun 05",
    bookings: 1100,
    completed: 600,
  },
  {
    day: "Jun 07",
    bookings: 1450,
    completed: 850,
  },
  {
    day: "Jun 09",
    bookings: 1080,
    completed: 500,
  },
];

const weeklyData = [
  {
    day: "Mon",
    bookings: 220,
    completed: 120,
  },
  {
    day: "Tue",
    bookings: 450,
    completed: 280,
  },
  {
    day: "Wed",
    bookings: 380,
    completed: 200,
  },
  {
    day: "Thu",
    bookings: 620,
    completed: 400,
  },
  {
    day: "Fri",
    bookings: 780,
    completed: 520,
  },
  {
    day: "Sat",
    bookings: 690,
    completed: 470,
  },
  {
    day: "Sun",
    bookings: 540,
    completed: 330,
  },
];

const AppointmentsOverviewChart = () => {
  const [filter, setFilter] = useState("month");

  const data = filter === "month" ? monthlyData : weeklyData;

  return (
    <div
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">
            Bookings Overview
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Booking analytics and completed services
          </p>
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

      {/* Legends */}
      <div className="flex items-center gap-4 mb-6 flex-wrap">
        {/* Bookings */}
        <div
          className="
            flex items-center gap-3
          "
        >
          <div className="w-3 h-3 rounded-full bg-blue-500" />

          <span className="text-sm font-medium text-blue-700">
            Bookings
          </span>
        </div>

        {/* Completed */}
        <div
          className="
            flex items-center gap-3
          "
        >
          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="text-sm font-medium text-green-700">
            Completed
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[320px] p-3
        shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Gradient */}
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

            {/* Bookings */}
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#blueGradient)"
            />

            {/* Completed */}
            <Area
              type="monotone"
              dataKey="completed"
              stroke="#22C55E"
              strokeWidth={3}
              fill="url(#greenGradient)"
            />

            {/* Extra smooth lines */}
            <Line
              type="monotone"
              dataKey="bookings"
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
              dataKey="completed"
              stroke="#22C55E"
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
    </div>
  );
};

export default AppointmentsOverviewChart;