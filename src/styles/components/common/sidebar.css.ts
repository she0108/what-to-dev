import { style } from "@vanilla-extract/css";
import { themeVars } from "../../theme.css";

export const wrap = style({
  width: "fit-content",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  position: "absolute",
  top: 0,
  left: -140,
});

export const link = style({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  fontSize: 16,
  marginBottom: 20,
});

export const inactiveLink = style([
  link,
  style({
    color: themeVars.color.gray[400],
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
  color: themeVars.color.gray[400],

  selectors: {
    [`${link}:hover &`]: { color: themeVars.color.gray[600] },
  },
});

export const activeIcon = style({
  color: themeVars.color.main[500],
});
