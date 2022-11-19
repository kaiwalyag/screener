import logo from "./logo.svg";
import "./App.css";
import {
  colors,
  CssBaseline,
  Container,
  Divider,
} from "@mui/material";

import Navbar from "./components/layout/navbar";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import CompanyName from "./components/CompanyName";
import Stats from "./components/Stats";
import MoreStats from "./components/MoreStats";
import SalesChart from "./components/SalesChart";
import {company} from './utils.js';

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
    <Container component="main" >
      <Navbar></Navbar>

      <CompanyName></CompanyName>
      
      <CssBaseline />      
      <Divider />
      
      <Stats company={company}></Stats>              

      <MoreStats></MoreStats>
      <Divider />
      
      <SalesChart></SalesChart>      
    </Container>
  );
}

export default App;
