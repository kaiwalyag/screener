
import "./App.css";
import { colors, CssBaseline, Container, Divider } from "@mui/material";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "./components/layout/navbar";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import CompanyName from "./components/CompanyName";
import Stats from "./components/Stats";
import Ratios from "./components/Ratios";
import MoreStats from "./components/MoreStats";
import BalanceSheetChart from "./components/BalanceSheetChart";
import AppTheme from "./Common/Theme";


function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={AppTheme}>
      <Container component="main">
        <Navbar></Navbar>
        <CompanyName></CompanyName>
        <Grid container spacing={1} columns={12}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Stats></Stats>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <BalanceSheetChart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Ratios />
          </Grid>
        </Grid>

        <Grid container spacing={1} columns={12}>
          <Grid item>
            <MoreStats></MoreStats>
          </Grid>
        </Grid>
      </Container>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
