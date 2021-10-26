import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../contexts/productContext";
import { CheckoutArea, ChechoutDetails } from "./style";
export default function Checkout() {
  const [checkout, setCheckout] = useState(null); //dados do localS...
  const { cart } = useContext(ProductContext);
  useEffect(() => {
    function loadStorage() {
      let dadosStorage = localStorage.getItem("checkout");

      if (dadosStorage) {
        setCheckout(JSON.parse(dadosStorage));
      }
    }
    loadStorage();
  }, []);

  console.log(checkout);
  return (
    <CheckoutArea>
      <Container>
        <h1>Checkout</h1>
        <Row>
          {checkout.map((item, k) => (
            <Col md={12} key={k}>
              <ChechoutDetails>
                <img alt={item.title} src={item.image[0]} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <div>
                  <h5>
                    R$ {(item.price * item.amount).toFixed(2).replace(".", ",")}
                  </h5>
                </div>
                <div>
                  <h5>Amount ({item.amount})</h5>
                </div>
              </ChechoutDetails>
            </Col>
          ))}

          <hr />
        </Row>
      </Container>
    </CheckoutArea>
  );
}
