import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const data = [
  {
    name: "Confirmed",
    value: 45,
    count: 3842,
    color: "#3B82F6",
  },
  {
    name: "Completed",
    value: 35,
    count: 2987,
    color: "#22C55E",
  },
  {
    name: "Pending",
    value: 15,
    count: 1285,
    color: "#F59E0B",
  },
  {
    name: "Cancelled",
    value: 5,
    count: 428,
    color: "#EF4444",
  },
];

const AppointmentsStatusChart = () => {
  return (
    <div
      className="
        bg-white
        rounded-[28px]
        border border-slate-200
        p-5
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
        h-full
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            Bookings by Status
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Current booking performance overview
          </p>
        </div>

        <button
          className="
            px-4 py-2
            rounded-xl
            border border-slate-200
            text-sm font-medium
            text-slate-700
            hover:bg-slate-50
            transition
          "
        >
          This Month
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 mt-6 ">
        
        {/* Total Growth */}
        <div
          className="
            rounded-2xl
            border border-blue-100
            bg-blue-50
            p-4
          "
        >
          <div className="flex items-center  gap-3 mb-1">
            <div
              className="
                w-12 h-12
                rounded-xl
                bg-blue-100
                flex items-center justify-center
              "
            >
              <FiTrendingUp className="text-blue-600 text-lg" />
            </div>
 <div>
          <h4 className="text-2xl font-bold text-slate-900">
            8,542
          </h4>

          <p className="text-sm text-slate-600 mt-1">
            Total Bookings
          </p>
          </div>
            
          </div>
   
        </div>

        {/* Completed */}
        <div
          className="
            rounded-2xl
            border border-green-100
            bg-gradient-to-br
            from-green-50
            to-emerald-100
            p-4
          "
        >
          <div className="flex items-center gap-3 mb-1">
            <div
              className="
                w-12 h-12
                rounded-xl
                bg-green-200
                flex items-center justify-center
              "
            >
              <FiCheckCircle className="text-green-900 text-lg" />
            </div>
<div>
<h4 className="text-2xl font-bold text-slate-900">
            2,987
          </h4>

          <p className="text-sm text-slate-600 mt-1">
            Completed
          </p>
</div>
            
          </div>
  
          
        </div>
      </div>

      {/* Chart + Status */}
      <div className="flex items-center justify-between gap-3">
        
        {/* Chart */}
        <div className="relative w-[220px] h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={item.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-slate-900">
              8,542
            </h2>

            <p className="text-sm text-slate-500">
              Total
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-5">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="
                flex items-center
                justify-between
                gap-8
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="text-sm font-medium text-slate-700">
                  {item.name}
                </span>
              </div>

              <div className="text-sm text-slate-600">
                {item.value}% (
                {item.count.toLocaleString()})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsStatusChart;