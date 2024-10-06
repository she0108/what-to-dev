import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "auto",
  padding: 12,
  background: themeVars.color.gray[50],
  borderRadius: 8,
  fontSize: 14,
  color: themeVars.color.gray[800],
});

export const profileContainer = style({
  display: "flex",
  marginBottom: 8,
});

export const profileImage = style({
  borderRadius: "50%",
  marginRight: 8,
});

export const info = style({
  display: "inline-block",
  height: 40,
});

export const username = style({});

export const ratingContainer = style({});

export const ratingStar = style({
  width: 20,
  height: 20,
  color: themeVars.color.main[500],
});
