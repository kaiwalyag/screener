import * as React from "react";
import Box from "@mui/material/Box";
import { useRecoilValue } from "recoil";
//import { actions } from "../utils.js";

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

import { balanceSheet as balanceSheetState } from "../states";

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


const data = {
  labels: ['Assets', 'Liabilities'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [200, 300],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: 'Dataset 2',
      data: [50,20],
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: 'Dataset 3',
      data: [30,60],
      backgroundColor: "rgba(255, 99, 2, 0.5)",
    },
  ]
};


const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};
export default function BalanceSheetChart() {
  const balanceSheet = useRecoilValue(balanceSheetState);
  const latest = balanceSheet.annualReports[0];
  return (
    <Box>
      <Bar options={config} data={data} />      
    </Box>
  );
}
