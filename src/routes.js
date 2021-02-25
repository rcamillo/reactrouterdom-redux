import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
