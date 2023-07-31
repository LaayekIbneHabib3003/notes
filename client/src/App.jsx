// ext
import { Routes, Route } from "react-router-dom";

// int
import "./App.css";
import { Layout } from "./layout";
import routes from "./routes/routes";
import AllNotes from "./pages/all_notes";
import Notifications from "./pages/notifications";
import Settings from "./pages/settings";
import AllTags from "./pages/all_tags";
import HelpAndSupport from "./pages/help_&_support";
import Trash from "./pages/trash";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
    });

  return (
    <>
      <Layout>
        <Routes>
          {getRoutes(routes)}
          <Route path="/all_notes" element={<AllNotes />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/all_tags" element={<AllTags />} />
          <Route path="/help_&_support" element={<HelpAndSupport />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </Layout>
    </>
  );
}
