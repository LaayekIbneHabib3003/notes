// ext
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#171c1f",
    },
    secondary: {
      main: "#1d2327",
      minor: "#1a1f23",
    },
    tertiary: {
      main: "#6a6d70",
    },
    quaternary: {
      main: "#353e44",
    },
    quinary: {
      main: "#ffffff",
    },
  },

  typography: {
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "",
      fontWeight: "",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "",
      fontWeight: "",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "",
      fontWeight: "",
    },
    p: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.2rem",
      fontWeight: "500",
    },
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
});

export default theme;
