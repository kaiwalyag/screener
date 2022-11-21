import { atom } from "recoil";

export const ticker = atom({
  key: "ticker",
  default: "",
});

export const company = atom({
  key: "company",
  default: {},
});
