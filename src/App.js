import logo from './logo.svg';
import './App.css';
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
  Divider
} from '@mui/material';

import { styled, createTheme, ThemeProvider } from '@mui/system';


// Create a theme instance.

const company = {
    "Symbol": "IBM",
    "AssetType": "Common Stock",
    "Name": "International Business Machines",
    "Description": "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York.",
    "CIK": "51143",
    "Exchange": "NYSE",
    "Currency": "USD",
    "Country": "USA",
    "Sector": "TECHNOLOGY",
    "Industry": "COMPUTER & OFFICE EQUIPMENT",
    "Address": "1 NEW ORCHARD ROAD, ARMONK, NY, US",
    "FiscalYearEnd": "December",
    "LatestQuarter": "2022-09-30",
    "MarketCapitalization": "128326132000",
    "EBITDA": "12010000000",
    "PERatio": "23.51",
    "PEGRatio": "1.223",
    "BookValue": "22.2",
    "DividendPerShare": "6.59",
    "DividendYield": "0.0461",
    "EPS": "6.09",
    "RevenuePerShareTTM": "67.2",
    "ProfitMargin": "0.0209",
    "OperatingMarginTTM": "0.115",
    "ReturnOnAssetsTTM": "0.0322",
    "ReturnOnEquityTTM": "0.0648",
    "RevenueTTM": "60535001000",
    "GrossProfitTTM": "31486000000",
    "DilutedEPSTTM": "6.09",
    "QuarterlyEarningsGrowthYOY": "0.041",
    "QuarterlyRevenueGrowthYOY": "0.065",
    "AnalystTargetPrice": "139.96",
    "TrailingPE": "23.51",
    "ForwardPE": "14.9",
    "PriceToSalesRatioTTM": "2.12",
    "PriceToBookRatio": "6.45",
    "EVToRevenue": "2.869",
    "EVToEBITDA": "24.94",
    "Beta": "0.877",
    "52WeekHigh": "144.13",
    "52WeekLow": "109.15",
    "50DayMovingAverage": "128.1",
    "200DayMovingAverage": "131.68",
    "SharesOutstanding": "896320000",
    "DividendDate": "2022-12-10",
    "ExDividendDate": "2022-11-09"
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#42c2db"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: colors.red.A400
    },
    background: {
      default: "#fff"
    }
  }
});



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//     fontSize: 16
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   },
//   stockName: {
//     fontWeight: 700,
//     color: '#33ab9f'
//   },
//   key: {
//     fontWeight: 700
//   },
//   value: {
//     fontWeight: 600
//   }
// }));

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

function App() {
  //const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div>        
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Typography component="h1" variant="h5">
              IBM
            </Typography>
          </Grid>
        <Grid item xs={6} md={4}>
          <Typography component="h1" variant="h5">
            IBM
          </Typography>
        </Grid>
      </Grid>
        <Divider  />
        <div> 
          <Grid container spacing={2}>
            
            
            <Grid item xs={12} sm={6}>
              <Typography>Sector:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >{company.Sector}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography >Market Capitalization:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >{company.MarketCapitalization}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography >Revenue TTM:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >{company.RevenueTTM}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography >Gross Profit TTM:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{company.GrossProfitTTM}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography >EBITDA:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{company.EBITDA}</Typography>
            </Grid>            
            
            <Grid item xs={12} sm={6}>
              <Typography >PE Ratio:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{company.PERatio}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography >
                Divident Yield (%):
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{company.DividendYield}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography >Book Value:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>{company.BookValue}</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Typography >
                Promotor Ownership :
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>70</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >Book Value</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>20</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >Graham</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>20</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >Sales</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>20000</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography >
                Market Cap to Sales
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>7.5</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography >Debt</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>3643</Typography>
              </Grid>
                          <Grid item xs={12} sm={6}>
              <Typography >Net Worth</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>1245</Typography>
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
        </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
