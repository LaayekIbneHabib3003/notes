import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  height: "100%",
  // width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "tomato",
}));

export const Image = styled("img")(({ theme }) => ({
  width: "35rem",
}));
