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

const MiniChart = ({
  borderColor = "#22c55e",
  gradientStart = "rgba(34,197,94,0.35)",
  gradientEnd = "rgba(34,197,94,0)",
  chartData = [],
}) => {
  const values = Array.isArray(chartData)
    ? chartData.slice(0, 6)
    : [];

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],

    datasets: [
      {
        data: values,

        borderColor: borderColor,

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

        // Visible dots
        pointRadius: 3,
        pointHoverRadius: 4,

        // Dot color
        pointBackgroundColor: borderColor,

        // White border around dots
        pointBorderColor: "#ffffff",
        pointBorderWidth: 1,

        // Line
        borderWidth: 2,
        tension: 0.4,
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

        grid: {
          display: false,
        },

        border: {
          display: false,
        },

        beginAtZero: true,
      },
    },

    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="w-28 h-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default MiniChart;