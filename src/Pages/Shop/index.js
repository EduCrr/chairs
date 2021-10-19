import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ShopArea, ShopDetails } from "./style";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export default function Shop() {
  return (
    <ShopArea>
      <Container>
        <h1>Shopping Cart</h1>
        <ShopDetails>
          <Row>
            <Col md={4} className="details">
              <div>
                <span>Total Cost</span>
                <h2>R$ 299</h2>
              </div>
              <div>
                <h3>Payment Details</h3>
                <Form id="checkout">
                  <Form.Floating className="mb-3 mt-3">
                    <Form.Control
                      id="floatingInputCustom"
                      type="number"
                      required
                      placeholder="Card Number"
                    />
                    <label htmlFor="floatingInputCustom">Card Number</label>
                  </Form.Floating>
                  <Form.Floating>
                    <Form.Control
                      id="floatingNameCustom"
                      type="text"
                      required
                      placeholder="Card Name"
                    />
                    <label htmlFor="floatingNameCustom">Card Name</label>
                  </Form.Floating>
                  <Row>
                    <Col md={6} className="mb-3 mt-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingExpCustom"
                          type="number"
                          required
                          placeholder="Card expiration"
                        />
                        <label htmlFor="floatingExpCustom">Expiration</label>
                      </Form.Floating>
                    </Col>
                    <Col md={6} className="mb-3 mt-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingCvvCustom"
                          type="number"
                          required
                          placeholder="Card cvv"
                        />
                        <label htmlFor="floatingCvvCustom">CVV</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={{ span: 7, offset: 1 }} className="cartArea">
              <div className="cartInfo">
                <div className="cartImage">
                  <img
                    alt=""
                    src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png"
                  />
                </div>
                <div className="cartName">
                  <span>Chair</span>
                  <h5>name product </h5>
                </div>
                <div className="cartQt">
                  <RemoveIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />{" "}
                  1 <AddIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />
                </div>
                <div className="cartPrice">R$ 299</div>
                <div className="cartDelete">
                  <CloseIcon style={{ color: "#ff5c47", cursor: "pointer" }} />
                </div>
              </div>
              <div className="cartInfo">
                <div className="cartImage">
                  <img
                    alt=""
                    src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png"
                  />
                </div>
                <div className="cartName">
                  <span>Chair</span>
                  <h5>name product </h5>
                </div>
                <div className="cartQt">
                  <RemoveIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />{" "}
                  1 <AddIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />
                </div>
                <div className="cartPrice">R$ 299</div>
                <div className="cartDelete">
                  <CloseIcon style={{ color: "#ff5c47", cursor: "pointer" }} />
                </div>
              </div>
              <div className="cartInfo">
                <div className="cartImage">
                  <img
                    alt=""
                    src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png"
                  />
                </div>
                <div className="cartName">
                  <span>Chair</span>
                  <h5>name product </h5>
                </div>
                <div className="cartQt">
                  <RemoveIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />{" "}
                  1 <AddIcon style={{ color: "#3b3b3b", cursor: "pointer" }} />
                </div>
                <div className="cartPrice">R$ 299</div>
                <div className="cartDelete">
                  <CloseIcon style={{ color: "#ff5c47", cursor: "pointer" }} />
                </div>
              </div>
            </Col>
            <div className="btn">
              <Button form="checkout" variant="primary" type="submit">
                Checkout
              </Button>
            </div>
          </Row>
        </ShopDetails>
      </Container>
    </ShopArea>
  );
}
