import * as React from "react";
import Grid from "@mui/material/Grid";
import StatsCard from "./StatsCard";

const StatsBoxStyle = {
  marginTop: '10px'  
};

function convertToCurrency(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + " B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + " M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + " K"
    : Math.abs(Number(labelValue));
}

export default function Stats(props) {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 2, md: 2, lg:2  }}
        columns={{ xs: 4, sm: 6, md: 6, lg:6 }}
        style={StatsBoxStyle}
      >
        <Grid item xs={2}>
          <StatsCard
            title={"Market Cap"}
            value={convertToCurrency(props.company.MarketCapitalization)}
            change={props.company.QuarterlyRevenueGrowthYOY}
          />
        </Grid>
        <Grid item xs={2}>
          <StatsCard
            title={"Revenue"}
            value={convertToCurrency(props.company.RevenueTTM)}
            change={props.company.QuarterlyRevenueGrowthYOY}
          />
        </Grid>
        <Grid item xs={2}>
          <StatsCard
            title={"Gross Profit (TTM)"}
            value={convertToCurrency(props.company.GrossProfitTTM)}
            change={props.company.QuarterlyEarningsGrowthYOY}
          />
        </Grid>
        <Grid item xs={2}>
          <StatsCard
            title={"EBITDA"}
            value={convertToCurrency(props.company.EBITDA)}
          />
        </Grid>
        <Grid item xs={2}>
          <StatsCard
            title={"Price To Book Ratio"}
            value={convertToCurrency(props.company.PriceToBookRatio)}
          />
        </Grid>
        <Grid item xs={2}>
          <StatsCard
            title={"Return On Equity"}
            value={convertToCurrency(props.company.ReturnOnEquityTTM)}
          />
        </Grid>
      </Grid>
    </div>
  );
}
