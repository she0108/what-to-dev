import { style } from "@vanilla-extract/css";
import { themeVars } from "../theme.css";

export const wrap = style({
  width: "100%",
  height: 68,
  display: "flex",
  flexDirection: "row",
  background: themeVars.color.white,
});

export const link = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  color: themeVars.color.gray[500],
  fontSize: 14,

  selectors: {
    "&:hover": {
      color: themeVars.color.gray[600],
    },
  },
});

export const icon = style({
  color: themeVars.color.gray[500],

  selectors: {
    [`${link}:hover &`]: { color: themeVars.color.gray[600] },
  },
});
