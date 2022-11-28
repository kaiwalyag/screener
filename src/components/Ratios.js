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
        <Header title="RATIOS" titleTypographyProps={TitleStyles}></Header>
        <Content>
          <Grid container spacing={1} columns={4} style={StatsBoxStyle}>
            <Grid item xs={2}>
              <StatsCard
                title={"Dividend Yield"}
                value={convertToCurrency(company.DividendYield)}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Book Value"}
                value={convertToCurrency(company.BookValue)}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Price To Book Ratio"}
                value={convertToCurrency(company.PriceToBookRatio)}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Return On Equity"}
                value={convertToCurrency(company.ReturnOnEquityTTM)}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Price To Earnings Ratio"}
                value={company.PERatio}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Price To Sales Ratio"}
                value={company.PriceToSalesRatioTTM}
              />
            </Grid>
            <Grid item xs={2}>
              <StatsCard title={"EV To EBITDA"} value={company.EVToEBITDA} />
            </Grid>
            <Grid item xs={2}>
              <StatsCard
                title={"Return On Assets"}
                value={company.ReturnOnAssetsTTM}
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
