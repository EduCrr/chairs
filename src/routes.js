import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
