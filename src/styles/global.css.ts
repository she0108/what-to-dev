import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  background: themeVars.color.white,
  display: "flex",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 600px)": {
      width: 600,
      margin: "auto",
    },
  },
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("::-webkit-scrollbar", {
  display: "none",
});

globalStyle("body > *", {});
