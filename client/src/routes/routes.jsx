// int
import AllNotes from "../pages/all_notes";
import Notifications from "../pages/notifications";
import Settings from "../pages/settings";
import AllTags from "../pages/all_tags";
import HelpAndSupport from "../pages/help_&_support";
import Trash from "../pages/trash";

const routes = [
  {
    name: "All Notes",
    key: "all_notes",
    route: "/all_notes",
    component: <AllNotes />,
  },
  {
    name: "Notifications",
    key: "notifications",
    route: "/notifications",
    component: <Notifications />,
  },
  {
    name: "Settings",
    key: "settings",
    route: "/settings",
    component: <Settings />,
  },
  {
    name: "All Tags",
    key: "all_tags",
    route: "/all_tags",
    component: <AllTags />,
  },
  {
    name: "Help & Support",
    key: "help_&_support",
    route: "/help_&_support",
    component: <HelpAndSupport />,
  },
  {
    name: "Trash",
    key: "trash",
    route: "/trash",
    component: <Trash />,
  },
];

export default routes;
