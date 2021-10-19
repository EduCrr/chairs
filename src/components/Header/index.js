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
        <Link to="/">Decor</Link>
        <Link to="/">Furniture</Link>
        <Link to="/">Lighting</Link>
        <Link to="/">Kitchen</Link>
      </LeftSide>

      <RightSide onClick={handleShop}>Shop</RightSide>
    </Container>
  );
}
