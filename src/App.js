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

import Navbar from "./components/layout/navbar";
import { styled, createTheme, ThemeProvider } from "@mui/system";
import Stats from "./components/Stats";
import MoreStats from "./components/MoreStats";
import {convertToCurrency, company} from './utils.js';

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


function App() {
  return (
    <Container component="main" >
      <Navbar></Navbar>
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
      <MoreStats></MoreStats>
    </Container>
  );
}

export default App;
