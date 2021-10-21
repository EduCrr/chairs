import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductContext } from "../../contexts/productContext";
import { ProductAreaSingle } from "./style";
import { useParams } from "react-router-dom";
import firebase from "../../firebaseConnection";
import LocalMallIcon from "@material-ui/icons/LocalMall";
export default function Product() {
  const { cart, storageCart } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState({});

  useEffect(() => {
    async function loadProduct() {
      await firebase
        .firestore()
        .collection("products")
        .doc(id)
        .get()
        .then((doc) => {
          setProduct(doc.data());
          setProductId(doc.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadProduct();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleCart(data, data2) {
    const index = cart.findIndex((item) => item.id === data);
    if (index >= 0) {
      cart[index].amount += 1;
      storageCart(cart);
    } else {
      cart.push({
        id: id,
        ...data2,
        amount: 1,
      });
      storageCart(cart);
    }
  }
  return (
    <ProductAreaSingle>
      <Container>
        <Row className="">
          <Col md={4}>
            <img alt="" src={product.image} />
          </Col>
          <Col md={8} className="info">
            <div className="productInfo">
              <span>{product.category}</span>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
            <div className="priceInfo">
              <div className="price">
                <h1>R$ {product.price}</h1>
                <h5>Category: {product.category}</h5>
              </div>
              <div className="btns">
                <div
                  className="icon"
                  onClick={() => handleCart(productId, product)}
                >
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
