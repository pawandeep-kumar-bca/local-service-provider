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

const MiniChart = ({borderColor = "#22c55e",
  gradientStart = "rgba(34,197,94,0.35)",
  gradientEnd = "rgba(34,197,94,0)"}) => {
    
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],

    datasets: [
      {
        data: [20, 19, 21, 20, 19, 21,20, 15, 18, 25, 28, 21],

        borderColor:borderColor ,

        backgroundColor: (context) => {
          const ctx = context.chart.ctx;

          const gradient = ctx.createLinearGradient(0, 0, 0, 120);

          gradient.addColorStop(0, gradientStart);
          gradient.addColorStop(1, gradientEnd);

          return gradient;
        },

        fill: true,
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
      },
    },

    elements: {
      point: {
        radius: 0,
      },

      line: {
        tension: 0.4,
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="w-full h-20">
      <Line data={data} options={options} />
    </div>
  );
};

export default MiniChart;