"use client";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

const CustomFont = ({ children }) => {
  let theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          noWrap(styles) {
            return {
              whiteSpace: "initial",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: String(styles.ownerState["data-lines"] || "3"),
              WebkitBoxOrient: "vertical",
            };
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomFont;
