import { createTheme, createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
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
});

export const darkTheme = createTheme(themeVars, {
  color: {
    white: "#FFFFFF",
    black: "#000000",
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

export const lightTheme = createTheme(themeVars, {
  color: {
    white: "#000000",
    black: "#FFFFFF",
    main: {
      100: "#2E3753",
      200: "#3B4C7E",
      300: "#4961A9",
      400: "#5676D4",
      500: "#648BFF",
      600: "#83A2FF",
      700: "#A2B9FF",
      800: "#C1D1FF",
      900: "#E0E8FF",
    },
    gray: {
      50: "#2B2D33",
      100: "#36383D",
      200: "#4D4E53",
      300: "#626468",
      400: "#797A7E",
      500: "#8F9093",
      600: "#A6A7A9",
      700: "#BCBCBE",
      800: "#D2D3D4",
      900: "#E8E8E9",
      950: "#F4F4F4",
    },
  },
});
