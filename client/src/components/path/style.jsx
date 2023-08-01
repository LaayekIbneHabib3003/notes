// ext
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.minor,
  padding: "0 2rem 0 2rem",
}));

export const Dir = styled(Typography)(({ theme }) => ({
  ":nth-of-type(1)": {
    color: theme.palette.quinary.main,
  },

  ":nth-of-type(2)": {
    color: theme.palette.tertiary.main,
  },
}));

export const Arrow = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  cursor: "pointer",
  fontSize: "small",
}));
