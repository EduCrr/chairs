import React from "react";
import { Link } from "react-router-dom";
import { Container, LeftSide, RightSide } from "./style";
export default function Header() {
  return (
    <Container>
      <LeftSide>
        <Link to="/">Decor</Link>
        <Link to="/">Furniture</Link>
        <Link to="/">Lighting</Link>
        <Link to="/">Kitchen</Link>
      </LeftSide>
      <RightSide>Shop</RightSide>
    </Container>
  );
}
