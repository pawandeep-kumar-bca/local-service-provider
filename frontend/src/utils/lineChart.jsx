import { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const BookingChart = () => {
  const chartRef = useRef();
  const [gradient, setGradient] = useState(null);
  const [active, setActive] = useState("today");

  // 🔥 Different Data
  const chartDataMap = {
    today: [80, 120, 100, 300, 150, 200, 400],
    week: [200, 250, 300, 280, 350, 400, 450],
    month: [500, 600, 550, 700, 800, 750, 900],
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const chartArea = chart.chartArea;

    if (!chartArea) return;

    const gradientFill = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );

    gradientFill.addColorStop(0, "rgba(59,130,246,0.4)");
    gradientFill.addColorStop(1, "rgba(59,130,246,0)");

    setGradient(gradientFill);
  }, [active]); // 🔥 re-render on toggle

  const data = {
    labels,
    datasets: [
      {
        data: chartDataMap[active],
        borderColor: "#3B82F6",
        backgroundColor: gradient || "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Booking Analytics</h2>

        {/* TOGGLE BUTTONS */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {["today", "week", "month"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-1 rounded-md text-sm ${
                active === item
                  ? "bg-blue-500 text-white"
                  : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="h-[250px]">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default BookingChart;