import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

export const themeVars = createGlobalThemeContract(
  {
    color: {
      white: "",
      black: "",
      main: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
        950: "",
      },
      gray: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
        950: "",
      },
    },
  },
  (_value, path) => `${path.join("-")}`
);

createGlobalTheme(":root", themeVars, {
  color: {
    white: "#FFFFFF",
    black: "#282828",
    main: {
      50: "#EEF7F2",
      100: "#DDEFE6",
      200: "#BCDFCD",
      300: "#9AD0B4",
      400: "#79C09B",
      500: "#57B082",
      600: "#4E9570",
      700: "#447A5E",
      800: "#3B5E4C",
      900: "#31433A",
      950: "#2D3631",
    },
    gray: {
      50: "#F4F4F4",
      100: "#E9E9E9",
      200: "#D4D4D4",
      300: "#BEBEBE",
      400: "#A9A9A9",
      500: "#949494",
      600: "#7E7E7E",
      700: "#686868",
      800: "#535353",
      900: "#3D3D3D",
      950: "#333333",
    },
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [themeVars.color.white]: "#282828",
        [themeVars.color.black]: "#FFFFFF",
        [themeVars.color.main[50]]: "#2D3631",
        [themeVars.color.main[100]]: "#31433A",
        [themeVars.color.main[200]]: "#3B5E4C",
        [themeVars.color.main[300]]: "#447A5E",
        [themeVars.color.main[400]]: "#4E9570",
        [themeVars.color.main[500]]: "#57B082",
        [themeVars.color.main[600]]: "#79C09B",
        [themeVars.color.main[700]]: "#9AD0B4",
        [themeVars.color.main[800]]: "#BCDFCD",
        [themeVars.color.main[900]]: "#DDEFE6",
        [themeVars.color.main[950]]: "#EEF7F2",
        [themeVars.color.gray[50]]: "#333333",
        [themeVars.color.gray[100]]: "#3D3D3D",
        [themeVars.color.gray[200]]: "#535353",
        [themeVars.color.gray[300]]: "#686868",
        [themeVars.color.gray[400]]: "#7E7E7E",
        [themeVars.color.gray[500]]: "#949494",
        [themeVars.color.gray[600]]: "#A9A9A9",
        [themeVars.color.gray[700]]: "#BEBEBE",
        [themeVars.color.gray[800]]: "#D4D4D4",
        [themeVars.color.gray[900]]: "#E9E9E9",
        [themeVars.color.gray[950]]: "#F4F4F4",
      },
    },
  },
});
