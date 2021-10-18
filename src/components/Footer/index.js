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
        <Link to="/">Decor</Link>
        <Link to="/">Furniture</Link>
        <Link to="/">Lighting</Link>
        <Link to="/">Kitchen</Link>
      </nav>
      <div className="icons">
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </FooterArea>
  );
}
