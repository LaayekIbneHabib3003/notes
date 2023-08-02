import { styled } from "@mui/material/styles";
import { WebAsset } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CreateOutlined } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChecklistIcon from "@mui/icons-material/Checklist";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const Container = styled(Box)(({}) => ({
  height: "100%",
  color: "white",
  display: "flex",
}));

export const Crate = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ":nth-of-type(1)": {
    width: "25rem",
    background: "#171c1f",
    padding: "0 1.5rem 0 1.5rem",
    borderRight: `1px solid ${theme.palette.tertiary.main}`,
  },

  ":nth-of-type(2)": {
    background: theme.palette.primary.main,
    width: "calc(100% - 25rem)",
    padding: "0 1.5rem 0 1.5rem",
  },

  [theme.breakpoints.down("sm")]: {
    ":nth-of-type(1)": {
      width: "50%",
    },

    ":nth-of-type(2)": {
      width: "50%",
    },
  },
}));

export const Case = styled(Box)(({ theme }) => ({
  gap: "1.5rem",
  display: "flex",
  alignItems: "center",
}));

export const Burger = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));

export const Caption = styled(Typography)(({ theme }) => ({
  width: "10rem",
  textAlign: "center",
}));

export const Edit = styled(CreateOutlined)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));

export const Screen = styled(WebAsset)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));

export const Dots = styled(MoreHorizIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));

export const CheckList = styled(ChecklistIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));

export const Info = styled(InfoOutlinedIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "medium",
}));
