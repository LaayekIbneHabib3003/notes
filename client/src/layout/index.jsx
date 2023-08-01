// ext
import { useLocation } from "react-router-dom";

// int
import Tabs from "../components/tabs";
import Path from "../components/path";
import routes from "../routes/routes";
import Header from "../components/header";
import SideNav from "../components/side_nav";
import { useStateContext } from "../context";
import { Container, Crate, Case, Pack } from "./style";

export const Layout = ({ children }) => {
  const { sidenavOpen } = useStateContext();

  const location = useLocation();
  const path = location.pathname;

  let caption = "";
  for (let i = 0; i < routes.length; i++) {
    caption += path === routes[i].route ? routes[i].name : "";
  }

  return (
    <Container>
      <Crate sidenavopen={sidenavOpen ? 1 : 0}>
        <SideNav />
      </Crate>
      <Crate sidenavopen={sidenavOpen ? 1 : 0}>
        <Case>
          <Header caption={caption} />
        </Case>
        <Case>
          <Pack>
            <Tabs />
          </Pack>
          <Pack>{children}</Pack>
        </Case>
        <Case>
          <Path caption={caption} />
        </Case>
      </Crate>
    </Container>
  );
};
