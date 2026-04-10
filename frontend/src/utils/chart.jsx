import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const EarningsChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Earnings",
        data: [200, 300, 400, 50, 500, 150, 350],
        backgroundColor: "#3B82F6",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
    x: {
      ticks: {
        font: {
          size: 10, // 👈 X-axis label size
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10, // 👈 Y-axis label size
        },
      },
    },
  }
  };

  return <Bar data={data} options={options} />;
};

export default EarningsChart;