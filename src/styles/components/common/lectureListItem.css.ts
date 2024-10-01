import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
});

export const imageContainer = style({
  position: "relative",
  width: 90,
  height: 90,

  "@media": {
    "screen and (min-width: 600px)": {
      width: 120,
    },
  },
});

export const image = style({
  objectFit: "cover",
  borderRadius: 8,
});

export const textContainer = style({
  padding: 8,
  marginLeft: 6,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const titleStyle = style({
  fontSize: 16,
  fontWeight: 500,
  color: themeVars.color.black,
});

export const tagGroup = style({
  display: "flex",
  flexDirection: "row",
  gap: 8,
});

export const tagStyle = style({
  listStyle: "none",
  padding: "2px 6px",
  borderRadius: 6,
  background: themeVars.color.gray[100],
  fontSize: 13,
  fontWeight: 400,
  color: themeVars.color.gray[700],
});

export const ratingStyle = style([
  tagStyle,
  style({
    background: themeVars.color.main[100],
    color: themeVars.color.main[600],
  }),
]);

export const star = style({
  margin: "-1.5px 0 -3px -1.5px",
  color: themeVars.color.main[600],
});
