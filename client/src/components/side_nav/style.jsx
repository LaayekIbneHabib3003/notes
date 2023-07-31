// ext
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, List, ListItem, Avatar } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  zIndex: "1",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRight: `1px solid ${theme.palette.tertiary.main}`,

  [theme.breakpoints.down("md")]: {
    width: "20rem",
    position: "absolute",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Crate = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundColor: theme.palette.secondary.main,

  ":nth-of-type(1)": {
    display: "flex",
    minHeight: "4rem",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 1.5rem 1rem 1.5rem",
  },

  ":nth-of-type(2)": {
    minHeight: "calc(100% - 4rem)",
    padding: "1rem 1.5rem 1rem 1.5rem",
    borderTop: `1px solid ${theme.palette.tertiary.main}`,
  },
}));

export const Case = styled(Box)(({}) => ({
  display: "flex",

  ":nth-of-type(1)": {
    gap: ".5rem",
  },

  ":nth-of-type(2)": {},
}));

export const Dots = styled(Avatar)(({}) => ({
  width: ".75rem",
  height: ".75rem",

  ":nth-of-type(1)": {
    backgroundColor: "red",
  },
  ":nth-of-type(2)": {
    backgroundColor: "yellow",
  },
  ":nth-of-type(3)": {
    backgroundColor: "green",
  },
}));

export const Burger = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const Menu = styled(List)(({}) => ({
  gap: ".75rem",
  display: "flex",
  flexDirection: "column",
}));

export const Navigate = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  borderRadius: ".75rem",
  "&.active": {
    backgroundColor: theme.palette.quaternary.main,
  },
}));

export const Item = styled(ListItem)(({ theme }) => ({
  gap: ".75rem",
  display: "flex",
  padding: ".75rem",
  alignItems: "center",
  color: theme.palette.quinary.main,
}));
