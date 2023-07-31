// ext
import { Typography } from "@mui/material";
import {
  Settings,
  HelpOutline,
  DeleteOutline,
  StyleOutlined,
  ArticleOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

// int
import routes from "../../routes/routes";
import { useStateContext } from "../../context";
import { Container, Crate, Case, Dots, Burger, Menu, Navigate, Item } from "./style";

export default function SideNav() {
  const { sidenavOpen, setSidenavOpen } = useStateContext();

  return (
    <>
      {sidenavOpen && (
        <Container>
          <Crate>
            <Case>
              <Dots> </Dots>
              <Dots> </Dots>
              <Dots> </Dots>
            </Case>
            <Case>
              <Burger onClick={() => setSidenavOpen((prevState) => !prevState)} />
            </Case>
          </Crate>
          <Crate>
            <Menu>
              <Navigate to="/all_notes" activeclassname="active">
                <Item>
                  <ArticleOutlined />
                  <Typography variant="p">{routes[0].name}</Typography>
                </Item>
              </Navigate>
              <Navigate to="/notifications" activeclassname="active">
                <Item>
                  <NotificationsNoneOutlined />
                  <Typography variant="p">{routes[1].name}</Typography>
                </Item>
              </Navigate>
              <Navigate to="/settings" activeclassname="active">
                <Item>
                  <Settings />
                  <Typography variant="p">{routes[2].name}</Typography>
                </Item>
              </Navigate>
              <Navigate to="/all_tags" activeclassname="active">
                <Item>
                  <StyleOutlined />
                  <Typography variant="p">{routes[3].name}</Typography>
                </Item>
              </Navigate>
              <Navigate to="/help_&_support" activeclassname="active">
                <Item>
                  <HelpOutline />
                  <Typography variant="p">{routes[4].name}</Typography>
                </Item>
              </Navigate>
              <Navigate to="/trash" activeclassname="active">
                <Item>
                  <DeleteOutline />
                  <Typography variant="p">{routes[5].name}</Typography>
                </Item>
              </Navigate>
            </Menu>
          </Crate>
        </Container>
      )}
    </>
  );
}
