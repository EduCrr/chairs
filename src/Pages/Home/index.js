import React from "react";
import { Container } from "react-bootstrap";
import { HomeArea } from "./style.js";
import TiltImage from "../../components/TiltImage/index.js";
import Catalog from "../../components/Catalog/index.js";
import About from "../../components/About/index.js";
export default function Home() {
  return (
    <>
      <HomeArea>
        <TiltImage />
        <Container>
          <Catalog />
        </Container>
        <About />
      </HomeArea>
    </>
  );
}
