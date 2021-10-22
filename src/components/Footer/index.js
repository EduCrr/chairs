import React from "react";
import { Link } from "react-router-dom";
import { FooterArea } from "./style";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
export default function Footer() {
  return (
    <FooterArea>
      <span>Todos os direitos reservados</span>
      <nav>
        <Link to="/products/decor">Decor</Link>
        <Link to="/products/furniture">Furniture</Link>
        <Link to="/products/lighting">Lighting</Link>
        <Link to="/products/kitchen">Kitchen</Link>
      </nav>
      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </FooterArea>
  );
}
