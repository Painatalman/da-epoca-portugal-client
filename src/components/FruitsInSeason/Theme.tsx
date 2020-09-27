import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    fruityOrange: "#ED7014",
    veggieGreen: "#457D00",
    candyAppleRed: "#FF0800",
    gray: "#707070",
    grayDark: "#222222",
    grayLight: "#BABABA",
    white: "#FFFFFF",
  },
  fonts: {
    default: "Fredoka One",
  },
  fontSizes: {
    xs: "0.75rem",
    small: "1rem",
    medium: "1.25rem",
    large: "2rem",
  },
  spacing: {
    1: "0.5rem",
    2: "1rem",
    3: "1.5rem",
    4: "2rem",
    5: "2.5rem",
    6: "3rem",
  },
};

export type ThemeType = typeof theme;

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
