import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../contexts/productContext";
import { CheckoutArea, ChechoutDetails } from "./style";
export default function Checkout() {
  const { cost, setCost } = useContext(ProductContext);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    function loadStorage() {
      let dadosStorage = localStorage.getItem("checkout");

      if (dadosStorage) {
        setCost(JSON.parse(dadosStorage));
      }
    }
    loadStorage();
  }, []);

  function price() {
    let result = cost.reduce(
      (subTotal, item) => (subTotal += item.price * item.amount),
      0
    );
    setSubTotal(result);
  }
  useEffect(() => {
    price();
  }, [cost]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CheckoutArea>
      <Container>
        <h1>Checkout</h1>
        <Row>
          {cost.length <= 0 ? (
            <p>Checkout Vazio!</p>
          ) : (
            cost.map((item, k) => (
              <Col md={12} key={k}>
                <ChechoutDetails>
                  <img alt={item.title} src={item.image[0]} />
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <div>
                    <h5>
                      R${" "}
                      {(item.price * item.amount).toFixed(2).replace(".", ",")}
                    </h5>
                  </div>
                  <div>
                    <h5>Amount ({item.amount})</h5>
                  </div>
                </ChechoutDetails>
              </Col>
            ))
          )}
          <div>
            <h5>Total Cost: (R$ {subTotal.toFixed(2).replace(".", ",")})</h5>
          </div>
          <hr />
        </Row>
      </Container>
    </CheckoutArea>
  );
}
