"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const material_1 = require("@mui/material");
const recoil_1 = require("recoil");
const react_1 = __importDefault(require("react"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const navbar_1 = __importDefault(require("./components/layout/navbar"));
const system_1 = require("@mui/system");
const CompanyName_1 = __importDefault(require("./components/CompanyName"));
const Stats_1 = __importDefault(require("./components/Stats"));
const Ratios_1 = __importDefault(require("./components/Ratios"));
const MoreStats_1 = __importDefault(require("./components/MoreStats"));
const BalanceSheetChart_1 = __importDefault(require("./components/BalanceSheetChart"));
const theme = (0, system_1.createTheme)({
    palette: {
        primary: {
            main: "#42c2db",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: material_1.colors.red.A400,
        },
        background: {
            default: "#fff",
        },
    },
});
function App() {
    return (react_1.default.createElement(recoil_1.RecoilRoot, null,
        react_1.default.createElement(material_1.Container, { component: "main" },
            react_1.default.createElement(navbar_1.default, null),
            react_1.default.createElement(CompanyName_1.default, null),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 1, columns: 12 },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 6, lg: 4 },
                    react_1.default.createElement(Stats_1.default, null)),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 6, lg: 4 },
                    react_1.default.createElement(BalanceSheetChart_1.default, null)),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 12, md: 6, lg: 4 },
                    react_1.default.createElement(Ratios_1.default, null))),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 1, columns: 12 },
                react_1.default.createElement(Grid_1.default, { item: true },
                    react_1.default.createElement(MoreStats_1.default, null))))));
}
exports.default = App;
