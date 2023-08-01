// int
import Header from "../components/header";
import SideNav from "../components/side_nav";
import { useStateContext } from "../context";
import { Container, Crate, Case } from "./style";

export const Layout = ({ children }) => {
  const { sidenavOpen } = useStateContext();

  return (
    <Container>
      <Crate sidenavopen={sidenavOpen.toString()}>
        <SideNav />
      </Crate>
      <Crate sidenavopen={sidenavOpen.toString()}>
        <Case>
          <Header />
        </Case>
        <Case>{children}</Case>
      </Crate>
    </Container>
  );
};
