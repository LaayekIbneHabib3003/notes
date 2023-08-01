// ext
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

// int
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

export default function Header({ caption }) {
  const { setSidenavOpen } = useStateContext();

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
