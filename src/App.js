import logo from "./logo.svg";
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
import MoreStats from "./components/MoreStats";
import SalesChart from "./components/SalesChart";


const theme = createTheme({
  palette: {
    primary: {
      main: "#42c2db",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

function App() {
  return (
    <RecoilRoot>
      <Container component="main">
        <Navbar></Navbar>
        <CompanyName></CompanyName>
        <CssBaseline />
        <Divider />
        <Grid
          container
          spacing={1}
          columns={{ xs: 4, sm: 6, md: 6, lg: 6 }}          
        >
          <Grid item xs={2} md={2}>
            <Stats></Stats>
          </Grid>
          <Grid item xs={2} md={2}>
            <Stats></Stats>
          </Grid>
          <Grid item xs={2} md={2}>
            <SalesChart></SalesChart>
            <SalesChart></SalesChart>
          </Grid>
        </Grid>

        <MoreStats></MoreStats>
        <Divider />
        
      </Container>
    </RecoilRoot>
  );
}

export default App;
