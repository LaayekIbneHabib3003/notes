// ext
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
}));

export const TextField = styled("textarea")(({ theme }) => ({
  resize: "none",
  width: "100%",
  height: "100%",
  border: "0",
  outline: "0",
  background: "transparent",
  color: theme.palette.quinary.main,
  fontFamily: "'Poppins', sans-serif",
  fontSize: "1.2rem",
  fontWeight: "500",
}));
