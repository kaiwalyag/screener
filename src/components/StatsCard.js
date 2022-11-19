import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "170px",
}));

const Value = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "400",
}));

const Change = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: "green",
}));

const ChangeDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
};

export default function StatsCard(props) {
  return (
    <div>
      <Item>
        <Typography color="text.secondary">{props.title}</Typography>
        <Value> {props.value}</Value>
        <div style={ChangeDivStyle}>
          <KeyboardArrowUp sx={{ color: "green" }} />
          <Change>10.23% </Change>
        </div>
      </Item>
    </div>
  );
}
