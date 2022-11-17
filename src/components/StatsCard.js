import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: '150px'
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: "500"
}));

const Change = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: "green"
}));

const ChangeDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap"
};

export default function StatsCard() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Item>
          <Typography color="text.secondary">Revenue</Typography>
          <Value> 123.35 BN </Value>
          <div style={ChangeDivStyle}>
            <KeyboardArrowUp sx={{ color: "green" }} />
            <Change>10.25% </Change>
          </div>
        </Item>
      </Box>      
    </div>
  );
}
