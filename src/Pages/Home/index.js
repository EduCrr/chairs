import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { HomeArea } from "./style.js";
import TiltImage from "../../components/TiltImage/index.js";
import Catalog from "../../components/Catalog/index.js";
export default function Home() {
  return (
    <>
      <HomeArea>
        <TiltImage />
        <Container>
          <Catalog />
        </Container>
      </HomeArea>
    </>
  );
}
