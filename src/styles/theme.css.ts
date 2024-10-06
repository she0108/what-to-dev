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
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
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
    black: "#202228",
    main: {
      100: "#E0E8FF",
      200: "#C1D1FF",
      300: "#A2B9FF",
      400: "#83A2FF",
      500: "#648BFF",
      600: "#5676D4",
      700: "#4961A9",
      800: "#3B4C7E",
      900: "#2E3753",
    },
    gray: {
      50: "#F4F4F4",
      100: "#E8E8E9",
      200: "#D2D3D4",
      300: "#BCBCBE",
      400: "#A6A7A9",
      500: "#8F9093",
      600: "#797A7E",
      700: "#626468",
      800: "#4D4E53",
      900: "#36383D",
      950: "#2B2D33",
    },
  },
});

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [themeVars.color.white]: "#202228",
        [themeVars.color.black]: "#FFFFFF",
        [themeVars.color.main[100]]: "#2E3753",
        [themeVars.color.main[200]]: "#3B4C7E",
        [themeVars.color.main[300]]: "#4961A9",
        [themeVars.color.main[400]]: "#5676D4",
        [themeVars.color.main[500]]: "#648BFF",
        [themeVars.color.main[600]]: "#83A2FF",
        [themeVars.color.main[700]]: "#A2B9FF",
        [themeVars.color.main[800]]: "#C1D1FF",
        [themeVars.color.main[900]]: "#E0E8FF",
        [themeVars.color.gray[50]]: "#2B2D33",
        [themeVars.color.gray[100]]: "#36383D",
        [themeVars.color.gray[200]]: "#4D4E53",
        [themeVars.color.gray[300]]: "#626468",
        [themeVars.color.gray[400]]: "#797A7E",
        [themeVars.color.gray[500]]: "#8F9093",
        [themeVars.color.gray[600]]: "#A6A7A9",
        [themeVars.color.gray[700]]: "#BCBCBE",
        [themeVars.color.gray[800]]: "#D2D3D4",
        [themeVars.color.gray[900]]: "#E8E8E9",
        [themeVars.color.gray[950]]: "#F4F4F4",
      },
    },
  },
});
