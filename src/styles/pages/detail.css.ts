import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: 20,
  paddingTop: 32,
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 24,
});

export const main = style({
  gridColumn: "span 2 / span 2",
});

export const aside = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const thumbnailContainer = style({
  width: "auto",
  height: 200,
  position: "relative",
  gridColumn: "span 2 / span 2",
});

export const thumbnail = style({
  borderRadius: 8,
  objectFit: "cover",
});
