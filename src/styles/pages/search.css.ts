import { style } from "@vanilla-extract/css";

export const wrapper = style({
  flexGrow: 1,
  padding: "100px 20px",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  padding: "20px 0",
  gap: 28,
});
