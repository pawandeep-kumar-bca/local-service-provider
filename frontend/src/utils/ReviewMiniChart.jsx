import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const ReviewMiniChart = ({
  data = [],
  borderColor = "#22c55e",
  gradientStart = "rgba(34,197,94,0.35)",
  gradientEnd = "rgba(34,197,94,0)",
}) => {
  const labels = data.map((item) => item?.month ?? "");

  const ratings = data.map(
    (item) => item?.averageRating ?? 0
  );

  const chartData = {
    labels,
    datasets: [
      {
        data: ratings,
        borderColor,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;

          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            120
          );

          gradient.addColorStop(0, gradientStart);
          gradient.addColorStop(1, gradientEnd);

          return gradient;
        },
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: false,
      },
    },

    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        display: false,
        min: 0,
        max: 5,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  if (!data.length) {
    return (
      <div className="w-full h-20 flex items-center justify-center">
        <span className="text-xs text-muted">
          No rating trend available
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-20">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ReviewMiniChart;