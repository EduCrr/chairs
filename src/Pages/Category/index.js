import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductArea, ProductsContent } from "./style";
import firebase from "../../firebaseConnection";
import { useParams, Link, useHistory } from "react-router-dom";
import TiltImage from "../../components/TiltImage";
import { ToastContainer, toast, Flip } from "react-toastify";

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
    toast.success("Added product!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      transition: Flip,
      theme: "dark",
    });
    history.push("/shop");
  }

  return (
    <ProductArea>
      <Container>
        <h1>Categories</h1>
        <TiltImage borda={true} />
        <h2>
          {cat}
          <small>({categoria.length})</small>
        </h2>
        <ProductsContent>
          <Row>
            {showSpinner ? (
              <Spinner className="spinner" animation="border" size="xl" />
            ) : (
              categoria.map((item) => (
                <Col xl={3} className=" mb-5" key={item.id}>
                  <div className="product">
                    <Link to={`/product/${item.id}`}>
                      <img alt={item.title} src={item.image[0]} />
                    </Link>
                    <button onClick={() => handleCart(item)}>
                      R$ {item.price.replace(".", ",")}
                    </button>
                  </div>
                  <Link to={`/product/${item.id}`}>
                    <h4>{item.title}</h4>
                  </Link>
                </Col>
              ))
            )}
            {!categoria.length && <p>Nenhum produto encontrado!!</p>}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Row>
        </ProductsContent>
      </Container>
    </ProductArea>
  );
}
