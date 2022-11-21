import * as React from "react";
import Box from "@mui/material/Box";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  type: "line",
  showScale: false,
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022"],

    datasets: [
      {
        label: "Revenue",
        showScale: false,
        fill: false,
        data: ["5000", "8000", "10000", "14000", "17000"],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        stack: "Stack 0",
        barThickness: 20,
      },
    ],
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export default function SalesChart() {
  return (
    <Box
      sx={{
        width: 300,
      }}
    >
      <Bar options={options} data={options.data} />
    </Box>
  );
}
