import { Switch, Route } from "react-router";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products/:cat">
        <Category />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/product/:id">
        <Product />
      </Route>
      <Route exact path="/shop">
        <Shop />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
    </Switch>
  );
}
