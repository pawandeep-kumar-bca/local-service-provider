import React from "react";

const stats = [
  {
    title: "Total Jobs",
    value: 120,
  },
  {
    title: "Completed",
    value: 110,
  },
  {
    title: "Cancelled",
    value: 2,
  },
  {
    title: "Total Earnings",
    value: "₹12,353",
  },
];

const OverviewProvider = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-text">
        Statistics
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

        {stats.map((item, index) => (

          <div
            key={index}
            className="
              border border-gray-200
              rounded-2xl
              p-4
              text-center
              hover:shadow-sm
              transition-all duration-300
              bg-gray-50
            "
          >
            <h3 className="text-sm font-medium text-muted mb-2">
              {item.title}
            </h3>

            <span className="text-2xl font-bold text-text">
              {item.value}
            </span>
          </div>

        ))}
      </div>
    </div>
  );
};

export default OverviewProvider;