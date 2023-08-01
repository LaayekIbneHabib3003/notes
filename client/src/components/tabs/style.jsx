// ext
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  borderRight: `1px solid ${theme.palette.tertiary.main}`,
  [theme.breakpoints.down("md")]: {
    borderRight: "0",
  },
}));

export const Crate = styled(Box)(({ theme }) => ({
  ":nth-of-type(1)": {
    height: "4rem",
    display: "flex",
    gap: ".75rem",
    alignItems: "center",
    justifyContent: "left",
    padding: "0 1.5rem 0 1.5rem",
    borderBottom: `1px solid ${theme.palette.tertiary.main}`,
    backgroundColor: theme.palette.secondary.minor,
  },

  ":nth-of-type(2)": {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
  },

  [theme.breakpoints.down("md")]: {
    ":nth-of-type(1)": {},

    ":nth-of-type(2)": {},
  },
}));

export const Input = styled("input")(({ theme }) => ({
  background: "transparent",
  border: 0,
  outline: 0,
  color: theme.palette.quinary.main,
  padding: ".6rem .5rem .5rem .5rem",

  "::placeholder": {
    color: theme.palette.tertiary.main,
  },
}));

export const Search = styled(SearchOutlinedIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "large",
}));

export const Placeholder = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
}));
