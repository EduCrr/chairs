import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductArea, ProductsContent } from "./style";
import { Link, useHistory } from "react-router-dom";
import TiltImage from "../../components/TiltImage";

export default function Products() {
  const { myProducts, loadProducts, storageCart, cart, showSpinner } =
    useContext(ProductContext);
  const history = useHistory();

  useEffect(() => {
    loadProducts();
  }, []);

  function handleCart(data) {
    const index = cart.findIndex((item) => item.id === data.id);
    if (index >= 0) {
      cart[index].amount += 1;
      storageCart(cart);
    } else {
      cart.push({
        ...data,
        amount: 1,
      });
      storageCart(cart);
    }
    history.push("/shop");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductArea>
      <Container>
        <h1>Categories</h1>
        <TiltImage borda={true} />
        <h2>
          All Products <small>({myProducts.length})</small>
        </h2>
        <ProductsContent>
          <Row>
            <>
              {showSpinner ? (
                <Spinner className="spinner" animation="border" size="xl" />
              ) : (
                myProducts.map((item) => (
                  <Col xl={3} className=" mb-5" key={item.id}>
                    <div className="product">
                      <Link to={`product/${item.id}`}>
                        <img alt={item.title} src={item.image[0]} />
                      </Link>
                      <button onClick={() => handleCart(item)}>
                        R$ {item.price.replace(".", ",")}
                      </button>
                    </div>

                    <Link to={`product/${item.id}`}>
                      <h4>{item.title}</h4>
                    </Link>
                  </Col>
                ))
              )}
            </>
          </Row>
        </ProductsContent>
      </Container>
    </ProductArea>
  );
}
