import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductAreaSingle } from "./style";
import LocalMallIcon from "@material-ui/icons/LocalMall";
export default function Product() {
  return (
    <ProductAreaSingle>
      <Container>
        <Row className="">
          <Col md={4}>
            <img
              alt=""
              src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png"
            />
          </Col>
          <Col md={8} className="info">
            <div className="productInfo">
              <span>Decor</span>
              <h1>Product Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="priceInfo">
              <div className="price">
                <h1>R$ 299</h1>
                <h5>Category: Decor</h5>
              </div>
              <div className="btns">
                <div className="icon">
                  <div> Buy </div>
                  <div>
                    <LocalMallIcon />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h3 className="text-center mt-5">Recommended products</h3>
      </Container>
    </ProductAreaSingle>
  );
}
