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
    name: "UPI",
    value: 45,
    count: 3842,
    color: "#3B82F6",
  },
  {
    name: "Cards",
    value: 35,
    count: 2987,
    color: "#22C55E",
  },
  {
    name: "Wallet",
    value: 15,
    count: 1285,
    color: "#F59E0B",
  },
  {
    name: "Net Banking",
    value: 5,
    count: 428,
    color: "#EF4444",
  },
  {
    name: "Cash",
    value: 5,
    count: 428,
    color: "#800080",
  },
];

const UpiStatus = () => {
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
     
        <div>
          <h3 className="text-xl font-bold text-slate-800">
           Payment Status
          </h3>
        </div>
      
     

      {/* Chart + Status */}
      <div className="flex items-center justify-between gap-3 mt-10">
        
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
              Transition
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="space-y-4">
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

export default UpiStatus;