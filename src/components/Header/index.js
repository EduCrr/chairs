import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, LeftSide, RightSide } from "./style";
export default function Header() {
  const history = useHistory();
  function handleShop() {
    history.push("/shop");
  }
  return (
    <Container>
      <LeftSide>
        <Link to="/">Home</Link>
        <Link to="/products/decor">Decor</Link>
        <Link to="/products/furniture">Furniture</Link>
        <Link to="/products/lighting">Lighting</Link>
        <Link to="/products/kitchen">Kitchen</Link>
      </LeftSide>

      <RightSide onClick={handleShop}>Shop</RightSide>
    </Container>
  );
}
