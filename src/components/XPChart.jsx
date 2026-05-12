import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const data = {
  labels: [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ],

  datasets: [
    {
      data: [20, 35, 40, 60, 55, 75, 90],

      borderColor: "#f4b6c2",

      backgroundColor: "rgba(200, 182, 255, 0.2)",

      tension: 0.4,

      fill: true,

      pointBackgroundColor: "#c8b6ff",

      pointBorderColor: "#fff",

      pointRadius: 5,
    },
  ],
};

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    x: {
      ticks: {
        color: "#f8f1e7",
        font: {
          family: "VT323",
          size: 16,
        },
      },

      grid: {
        display: false,
      },
    },

    y: {
      ticks: {
        color: "#f8f1e7",

        font: {
          family: "VT323",
          size: 16,
        },
      },

      grid: {
        color: "rgba(255,255,255,0.05)",
      },
    },
  },
};

export default function XPChart() {
  return (
    <section className="chart-card">
      <h2>Weekly XP 📈</h2>

      <Line
        data={data}
        options={options}
      />
    </section>
  );
}