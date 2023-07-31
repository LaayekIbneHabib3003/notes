// ext
import { Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";

// int
import routes from "../../routes/routes";
import { useStateContext } from "../../context";
import {
  Info,
  Edit,
  Dots,
  Case,
  Crate,
  Burger,
  Screen,
  Caption,
  Container,
  CheckList,
} from "./style";

export default function Header() {
  const { setSidenavOpen } = useStateContext();

  const location = useLocation();
  const path = location.pathname;

  let caption = "";
  for (let i = 0; i < routes.length; i++) {
    caption += path === routes[i].route ? routes[i].name : "";
  }

  return (
    <>
      <Container>
        <Crate>
          <Burger onClick={() => setSidenavOpen((prevState) => !prevState)} />
          <Caption variant="p">{caption}</Caption>
          <Edit />
        </Crate>
        <Crate>
          <Screen />
          <Case>
            <Dots />
            <CheckList />
            <Info />
            <Avatar sx={{ bgcolor: deepOrange[500], height: "2.2rem", width: "2.2rem" }}>L</Avatar>
          </Case>
        </Crate>
      </Container>
    </>
  );
}
