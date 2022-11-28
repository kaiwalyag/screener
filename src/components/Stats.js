import * as React from "react";
import Grid from "@mui/material/Grid";
import StatsCard from "./StatsCard";
import { Card, CardContent, CardHeader } from "@mui/material";

import { useRecoilValue } from "recoil";
import { company as companyState } from "../states";
import { styled, alpha } from "@mui/material/styles";
import { convertToCurrency, company } from "../utils.js";

const StatsBoxStyle = {
  marginTop: "10px",
};

const StatsCardStyle = styled(StatsCard)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  pointerEvents: "none",
  alignItems: "center",
  justifyContent: "center",
}));

const Header = styled(CardHeader)(({ theme }) => ({
  padding: "5px",
  paddingBottom: "0",
}));

const Content = styled(CardContent)(({ theme }) => ({
  paddingTop: "0",
  paddingBottom: "0",
  margin: "0",
}));

const TitleStyles = {
  fontSize: "0.7rem",
  color: "orange",
};

export default function Stats() {
  const company = useRecoilValue(companyState);

  return JSON.stringify(company) != "{}" ? (
    <div>
      <Card variant="outlined" raised="true">
        <Header title="OVERVIEW" titleTypographyProps={TitleStyles}></Header>
        <Content>
          <Grid container spacing={1} columns={4} style={StatsBoxStyle}>
            <Grid item xs={2}>
              <StatsCardStyle
                title={"Market Cap"}
                value={convertToCurrency(company.MarketCapitalization)}
                change={company.QuarterlyRevenueGrowthYOY}
                showChange={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Revenue"}
                value={convertToCurrency(company.RevenueTTM)}
                change={company.QuarterlyRevenueGrowthYOY}
                showChange={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Gross Profit (TTM)"}
                value={convertToCurrency(company.GrossProfitTTM)}
                change={company.QuarterlyEarningsGrowthYOY}
                showChange={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"EBITDA"}
                value={convertToCurrency(company.EBITDA)}
                showChange={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Gross Profit (TTM)"}
                value={convertToCurrency(company.GrossProfitTTM)}
                change={company.QuarterlyEarningsGrowthYOY}
                showChange={true}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"EBITDA"}
                value={convertToCurrency(company.EBITDA)}
                showChange={true}
              />
            </Grid>
          </Grid>
        </Content>
      </Card>
    </div>
  ) : (
    <span>Nothing to display</span>
  );
}
