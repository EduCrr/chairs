import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, LeftSide, RightSide, Menu } from "./style";
import { ProductContext } from "../../contexts/productContext";

import MenuIcon from "@material-ui/icons/Menu";
export default function Header() {
  const { cart, loadStorage } = useContext(ProductContext);
  const history = useHistory();
  function handleShop() {
    history.push("/shop");
  }
  const [showMenu, setShowMenu] = useState(false);
  function handleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {}, [cart]);

  return (
    <Container>
      <LeftSide>
        <span onClick={handleMenu}>
          <MenuIcon />
        </span>
        <Menu
          ativo={showMenu}
          style={{
            width: showMenu ? "100%" : "0",
          }}
        >
          <Link onClick={handleMenu} to="/">
            Home
          </Link>
          <Link onClick={handleMenu} to="/products/decor">
            Decor
          </Link>
          <Link onClick={handleMenu} to="/products/furniture">
            Furniture
          </Link>
          <Link onClick={handleMenu} to="/products/lighting">
            Lighting
          </Link>
          <Link onClick={handleMenu} to="/products/kitchen">
            Kitchen
          </Link>
        </Menu>
      </LeftSide>

      <RightSide onClick={handleShop}>
        Shop{" "}
        <span className="badge badge-light">
          {cart.length > 0 ? cart.length : ""}
        </span>
      </RightSide>
    </Container>
  );
}
