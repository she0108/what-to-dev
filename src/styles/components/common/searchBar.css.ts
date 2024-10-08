import { style } from "@vanilla-extract/css";
import { themeVars } from "../../theme.css";

export const container = style({
  background: themeVars.color.gray[50],
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 16px",
});

export const input = style({
  background: "transparent",
  border: "none",
  outline: "none",
  flexGrow: 1,
  fontSize: 15,
  fontWeight: 500,
  color: themeVars.color.black,
  "::placeholder": {
    color: themeVars.color.gray[400],
  },
});

export const icon = style({
  color: themeVars.color.gray[400],
  width: 20,
  height: 20,
});
