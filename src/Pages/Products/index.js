import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductArea, ProductsContent } from "./style";
import TiltImage from "../../components/TiltImage";
export default function Products() {
  return (
    <ProductArea>
      <Container>
        <h1>Categories</h1>
        <TiltImage borda={true} />
        <h2>Products</h2>
        <ProductsContent>
          <Row>
            <Col md={3} className=" mb-5">
              <div className="product">
                <img
                  alt=""
                  src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png"
                />
                <button>R$ 299</button>
              </div>
              <h4>teste produto</h4>
            </Col>
          </Row>
        </ProductsContent>
      </Container>
    </ProductArea>
  );
}
