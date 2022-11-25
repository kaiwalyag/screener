import * as React from "react";
import Grid from "@mui/material/Grid";
import { useRecoilValue } from "recoil";
import { convertMillions,toSentenceCase } from "../utils.js";
import {Card, CardContent,CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const Header = styled(CardHeader)(({ theme }) => ({
  padding: "5px",
}));

const Content = styled(CardContent)(({ theme }) => ({
  paddingTop: "0",
  paddingBottom: "0",
  margin: "0",
}));

const TitleStyles = {
  fontSize: "0.7rem",
   color:"orange" 
}


const assetColors = [  
  '#0A758F',
  '#0D98BA',
  '#10BBE5',
  '#32CBF1',
  '#5DD6F4'
]


const liabilitiesColors = [  
  '#7d3c34',
  '#984940',
  '#b4564b',
  '#bf7067',
  '#d7a49e'
]

export const options = {
  plugins: {
    title: {
      display: false
    },
    legend: {
      display: false   
    }    
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true,
      grid: {
        display: false
      }
    },
  },
};

// ticks: {
//   display: false,
// }

export default function BalanceSheetChart() {

  const balanceSheet = useRecoilValue(balanceSheetState);
  const latest = balanceSheet.annualReports[0];

  const dataset = [];
  
  const assets = (({ totalCurrentAssets , intangibleAssets, investments, otherCurrentAssets }) => 
    ({ totalCurrentAssets , intangibleAssets, investments, otherCurrentAssets }))(latest);


  const liabilities = (({ totalCurrentLiabilities , longTermDebt, totalShareholderEquity, otherCurrentLiabilities }) => 
    ({ totalCurrentLiabilities , longTermDebt, totalShareholderEquity, otherCurrentLiabilities }))(latest);

  Object.keys(assets).forEach((e,i) => dataset.push(
    {
      label: toSentenceCase(e),
      data: [convertMillions(assets[e])],
      backgroundColor: assetColors[i]
    }
  ));

  console.log(dataset);

  const data = {
    labels: ['Assets'],
    datasets: dataset    
  };

  return (
    <Card variant="outlined" raised="true">
        <Header
          title="BALANCE SHEET"
          titleTypographyProps={TitleStyles}
        ></Header>
        <Content>
      <Grid container spacing={2} columns={16} sx={{height:'21rem'}}>
        <Grid item xs={8}>
          <Bar options={options} data={data} />
        </Grid>
        <Grid item xs={8}>
          <Bar options={options} data={data} />
        </Grid>
    </Grid>

    </Content>
      </Card>      
  );
}
