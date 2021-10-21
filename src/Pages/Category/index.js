import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductArea, ProductsContent } from "./style";
import firebase from "../../firebaseConnection";
import { Link, useParams, useHistory } from "react-router-dom";
import TiltImage from "../../components/TiltImage";

export default function Category() {
  const { storageCart, cart } = useContext(ProductContext);
  const [categoria, setCategoria] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const { cat } = useParams();
  const history = useHistory();
  async function loadCategory() {
    setShowSpinner(true);
    await firebase
      .firestore()
      .collection("products")
      .where("category", "==", cat)
      .get()
      .then((snapshot) => {
        let lista = [];
        snapshot.forEach((item) => {
          lista.push({
            id: item.id,
            title: item.data().title,
            category: item.data().category,
            image: item.data().image,
            description: item.data().description,
            price: item.data().price,
          });
        });
        setCategoria(lista);
        setShowSpinner(false);
      })
      .catch((error) => {
        console.log("Não foi possivel carragar os chamados" + error);
      });
  }

  useEffect(() => {
    loadCategory();
  }, [cat]);

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
  }
  function handleSingle(id) {
    history.push(`/products/${cat}`);
    history.push(`/product/${id}`);
  }
  return (
    <ProductArea>
      <Container>
        <h1>Categories</h1>
        <TiltImage borda={true} />
        <h2>{cat}</h2>
        <ProductsContent>
          <Row>
            <span className={showSpinner ? "" : "hidden"}>
              <Spinner animation="border" size="sm" />
            </span>
            {categoria.length > 0 &&
              categoria.map((item) => (
                <Col md={3} className=" mb-5" key={item.id}>
                  <div className="product">
                    <img
                      onClick={() => handleSingle(item.id)}
                      alt=""
                      src={item.image}
                    />

                    <button onClick={() => handleCart(item)}>
                      R$ {item.price}
                    </button>
                  </div>

                  <h4 onClick={() => handleSingle(item.id)}>{item.title}</h4>
                </Col>
              ))}
            {!categoria.length && <p>Nenhum produto encontrado!!</p>}
          </Row>
        </ProductsContent>
      </Container>
    </ProductArea>
  );
}
