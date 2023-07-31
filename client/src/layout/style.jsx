// ext
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({}) => ({
  height: "100%",
  display: "flex",
}));

export const Crate = styled(Box)(({ sidenavOpen, theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",

  ":nth-of-type(1)": {
    height: "100%",
    width: sidenavOpen ? "20rem" : "",

    [theme.breakpoints.down("md")]: {
      width: "unset",
    },
  },

  ":nth-of-type(2)": {
    width: sidenavOpen ? "calc(100% - 20rem)" : "100%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export const Case = styled(Box)(({ theme }) => ({
  ":nth-of-type(1)": {
    height: "4rem",
    width: "100%",
  },

  ":nth-of-type(2)": {
    height: "calc(100% - 4rem)",
    width: "100%",
    borderTop: `1px solid ${theme.palette.tertiary.main}`,
    background: theme.palette.primary.main,
  },
}));
