import React from "react";
import { AboutArea, ContentArea, ContentImage, ContentText } from "./style";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <AboutArea>
      <Container>
        <h1>About</h1>
      </Container>
      <ContentArea>
        <ContentImage>
          <img src="/assets/about.jpg" />
        </ContentImage>
        <ContentText>
          <h2>Beauty in simplicity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/products">See More</Link>
        </ContentText>
      </ContentArea>
    </AboutArea>
  );
}
