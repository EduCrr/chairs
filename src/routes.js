import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/product">
        <Product />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
    </Switch>
  );
}
