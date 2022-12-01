"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const StockSearch_1 = __importDefault(require("../StockSearch"));
const Search = (0, styles_1.styled)("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));
const SearchIconWrapper = (0, styles_1.styled)("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = (0, styles_1.styled)(StockSearch_1.default)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "50ch",
        [theme.breakpoints.up("sm")]: {
            width: "50ch",
            "&:focus": {
                width: "60ch",
            },
        },
    },
}));
function SearchAppBar(props) {
    return (React.createElement(Box_1.default, { sx: { flexGrow: 1 } },
        React.createElement(AppBar_1.default, { position: "static", sx: { backgroundColor: "grey" } },
            React.createElement(Toolbar_1.default, null,
                React.createElement(IconButton_1.default, { size: "large", edge: "start", color: "inherit", "aria-label": "open drawer", sx: { mr: 2 } },
                    React.createElement(Menu_1.default, null)),
                React.createElement(Typography_1.default, { variant: "h6", noWrap: true, component: "div", sx: { display: { xs: "none", sm: "block" }, width: "300px" } }, props.ticker),
                React.createElement(Search, null,
                    React.createElement(SearchIconWrapper, null,
                        React.createElement(Search_1.default, null)),
                    React.createElement(StyledInputBase, { ticker: props.ticker }))))));
}
exports.default = SearchAppBar;
