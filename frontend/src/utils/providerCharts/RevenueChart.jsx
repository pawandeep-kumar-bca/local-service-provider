import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "May 12", revenue: 3200 },
  { day: "May 14", revenue: 3800 },
  { day: "May 16", revenue: 3500 },
  { day: "May 18", revenue: 4200 },
  { day: "May 20", revenue: 4600 },
  { day: "May 22", revenue: 5200 },
  { day: "May 24", revenue: 5800 },
  { day: "May 26", revenue: 3000 },
  { day: "May 28", revenue: 4700 },
  { day: "Jun 02", revenue: 6500 },
  { day: "Jun 04", revenue: 5900 },
  { day: "Jun 06", revenue: 6800 },
  { day: "Jun 09", revenue: 3100 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Revenue Overview
          </h3>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            $45,678
          </h2>

          <p className="text-sm text-green-500 mt-1">
            ↑ 20.4% from last month
          </p>
        </div>

        <select className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none">
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#f1f5f9" />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;