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
      backgroundColor: "#95BF8F",
    },
    {
      label: 'Dataset 2',
      data: [200,150],
      backgroundColor: "#5A8E52",
    },
    {
      label: 'Dataset 3',
      data: [100,50],
      backgroundColor: "#314E2D",
    }
  ]
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function BalanceSheetChart() {
  const balanceSheet = useRecoilValue(balanceSheetState);
  const latest = balanceSheet.annualReports[0];
  return (
    <Box>
      <Bar options={options} data={data} />      
    </Box>
  );
}
