import { style } from "@vanilla-extract/css";
import { themeVars } from "../../theme.css";

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
  fontSize: 14,
});

export const inactiveLink = style([
  link,
  style({
    color: themeVars.color.gray[500],
    selectors: {
      "&:hover": {
        color: themeVars.color.gray[600],
      },
    },
  }),
]);

export const activeLink = style([
  link,
  style({
    color: themeVars.color.main[500],
  }),
]);

export const inactiveIcon = style({
  color: themeVars.color.gray[500],

  selectors: {
    [`${link}:hover &`]: { color: themeVars.color.gray[600] },
  },
});

export const activeIcon = style({
  color: themeVars.color.main[500],
});
