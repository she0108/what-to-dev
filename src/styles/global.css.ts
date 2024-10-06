import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("html", { maxWidth: "100vw", overflowX: "hidden" });

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  maxWidth: "100vw",
  background: themeVars.color.white,
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
  position: "relative",

  "@media": {
    "screen and (min-width: 600px)": {
      width: 800,
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
