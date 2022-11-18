import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  colors,
  Avatar,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  SvgIcon,
  FormControlLabel,
  Checkbox,
  TextField,
  Link,
  Divider,
} from "@mui/material";

import { styled, createTheme, ThemeProvider } from "@mui/system";
import Stats from "./components/Stats";

// Create a theme instance.

const company = {
  Symbol: "IBM",
  AssetType: "Common Stock",
  Name: "International Business Machines",
  Description:
    "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York.",
  CIK: "51143",
  Exchange: "NYSE",
  Currency: "USD",
  Country: "USA",
  Sector: "TECHNOLOGY",
  Industry: "COMPUTER & OFFICE EQUIPMENT",
  Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US",
  FiscalYearEnd: "December",
  LatestQuarter: "2022-09-30",
  MarketCapitalization: "128326132000",
  EBITDA: "12010000000",
  PERatio: "23.51",
  PEGRatio: "1.223",
  BookValue: "22.2",
  DividendPerShare: "6.59",
  DividendYield: "0.0461",
  EPS: "6.09",
  RevenuePerShareTTM: "67.2",
  ProfitMargin: "0.0209",
  OperatingMarginTTM: "0.115",
  ReturnOnAssetsTTM: "0.0322",
  ReturnOnEquityTTM: "0.0648",
  RevenueTTM: "60535001000",
  GrossProfitTTM: "31486000000",
  DilutedEPSTTM: "6.09",
  QuarterlyEarningsGrowthYOY: "0.041",
  QuarterlyRevenueGrowthYOY: "0.065",
  AnalystTargetPrice: "139.96",
  TrailingPE: "23.51",
  ForwardPE: "14.9",
  PriceToSalesRatioTTM: "2.12",
  PriceToBookRatio: "6.45",
  EVToRevenue: "2.869",
  EVToEBITDA: "24.94",
  Beta: "0.877",
  SharesOutstanding: "896320000",
  DividendDate: "2022-12-10",
  ExDividendDate: "2022-11-09",
};

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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

function App() {
  //const classes = useStyles();

  return (
    <Container component="main" >
      <CssBaseline />
      <div>
        <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem'}}>
          <Grid item xs={6} md={8}>
            <Typography component="h1" variant="h5">
              {company.Name} ({company.Symbol})
            </Typography>
          </Grid>
          <Grid item xs={6} md={4} sx={{ display: 'none' }}>
            <Typography component="h5" variant="h5">
              {company.Exchange}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Stats company={company}></Stats>        
      </div>
      <div class="mainContainer">
        <div class="container2" id="container">
          <div class="box">
            {" "}
            <Typography>Sector:</Typography>
            <span class="value">
              <Typography>{company.Sector}</Typography>
            </span>
          </div>
          <div class="box">
            {" "}
            <Typography>Market Capitalization:</Typography>{" "}
            <Typography>
              {convertToCurrency(company.MarketCapitalization)}
            </Typography>
          </div>
          <div class="box">
            {" "}
            <Typography>Revenue TTM:</Typography>{" "}
            <Typography>{convertToCurrency(company.RevenueTTM)}</Typography>
          </div>
        </div>

        <div class="container2" id="container">
          <div class="box">
            {" "}
            <Typography>EBITDA:</Typography>
            <Typography>{convertToCurrency(company.EBITDA)}</Typography>
          </div>
          <div class="box">
            {" "}
            <Typography>Gross Profit TTM:</Typography>
            <Typography>{convertToCurrency(company.GrossProfitTTM)}</Typography>
          </div>
          <div class="box">
            {" "}
            <Typography>PE Ratio:</Typography>{" "}
            <Typography>{company.PERatio}</Typography>
          </div>
        </div>

        <div class="container2" id="container">
          <div class="box">
            {" "}
            <Typography>Divident Yield (%):</Typography>{" "}
            <Typography>{company.DividendYield}</Typography>
          </div>
          <div class="box">
            {" "}
            <Typography>Book Value:</Typography>
            <Typography>{company.BookValue}</Typography>
          </div>
          <div class="box">
            {" "}
            <span class="key">Revenue </span> <span class="value">60 Bn</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
