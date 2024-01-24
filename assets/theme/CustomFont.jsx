"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CustomFont = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomFont;
