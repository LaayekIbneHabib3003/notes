// ext
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({}) => ({
  height: "100%",
  display: "flex",
}));

export const Crate = styled(Box)(({ sidenavopen, theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",

  ":nth-of-type(1)": {
    height: "100%",
    width: sidenavopen ? "20rem" : "",

    [theme.breakpoints.down("md")]: {
      width: "unset",
    },
  },

  ":nth-of-type(2)": {
    width: sidenavopen ? "calc(100% - 20rem)" : "100%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export const Case = styled(Box)(({ theme }) => ({
  ":nth-of-type(1)": {
    width: "100%",
    height: "4rem",
  },

  ":nth-of-type(2)": {
    width: "100%",
    height: "calc(100% - 9rem)",
    background: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.tertiary.main}`,
  },

  ":nth-of-type(3)": {
    width: "100%",
    height: "5rem",
    borderTop: `1px solid ${theme.palette.tertiary.main}`,
  },
}));

export const Pack = styled(Box)(({ theme }) => ({
  ":nth-of-type(1)": {
    width: "25rem",
    height: "100%",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  ":nth-of-type(2)": {
    width: "100%",
  },
}));
