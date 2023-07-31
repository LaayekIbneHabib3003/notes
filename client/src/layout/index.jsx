// int
import Header from "../components/header";
import SideNav from "../components/side_nav";
import { useStateContext } from "../context";
import { Container, Crate, Case } from "./style";

export const Layout = ({ children }) => {
  const { sidenavOpen } = useStateContext();

  return (
    <Container>
      <Crate sidenavOpen={sidenavOpen}>
        <SideNav />
      </Crate>
      <Crate sidenavOpen={sidenavOpen}>
        <Case>
          <Header />
        </Case>
        <Case>{children}</Case>
      </Crate>
    </Container>
  );
};
