import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/productContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ShopArea, ShopDetails } from "./style";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ToastContainer, toast, Flip } from "react-toastify";

export default function Shop() {
  const history = useHistory();
  const { cart, setCart, storageCart, loadStorage } =
    useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const [formValidado, setFormValidado] = useState(false);

  function price() {
    let result = cart.reduce(
      (total, item) => (total += item.price * item.amount),
      0
    );
    setTotal(result);
  }
  useEffect(() => {
    price();
  }, [cart]);

  function handleRemove(index) {
    let findId = cart.filter((item) => item !== index);
    setCart(findId);
    localStorage.setItem("cart", JSON.stringify(findId));
  }

  function decrementAmount(item) {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      if (cart[index].amount <= 1) {
        cart.splice(index, 1);
        storageCart(cart);
        loadStorage();
      } else {
        cart[index].amount += -1;
        storageCart(cart);
        loadStorage();
      }
    }
  }

  function incrementAmount(item) {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      cart[index].amount += +1;
      storageCart(cart);
      loadStorage();
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    setFormValidado(true);
    if (e.currentTarget.checkValidity() === true) {
      storageCheckout(cart);
      history.push("/checkout");
      setCart([]);
      storageCart([]);
      loadStorage();
      setTotal(0);
      toast.success("Checkout success", {
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
    } else {
      console.log("erro ao fazer checkout");
    }
  }

  function storageCheckout(item) {
    localStorage.setItem("checkout", JSON.stringify(item));
  }

  return (
    <ShopArea>
      {cart.length <= 0 ? (
        <p
          style={{
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="text-center mt-4"
        >
          There are no products in your shopping cart 🥺
        </p>
      ) : (
        <Container>
          <h1>Shopping Cart</h1>
          <ShopDetails>
            <Row>
              <Col xl={4} className="details">
                <div>
                  <span>Total Cost </span>
                  <h2>{"R$ " + total.toFixed(2).replace(".", ",")}</h2>
                </div>
                <div>
                  <h3>Payment Details</h3>
                  <Form
                    onSubmit={handleRegister}
                    id="checkout"
                    noValidate
                    validated={formValidado}
                  >
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
                      <Col xl={6} className="mb-3 mt-3">
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
                      <Col xl={6} className="mb-3 mt-3">
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
              <Col xl={{ span: 7, offset: 1 }} className="cartArea">
                {cart.map((item) => (
                  <div className="cartInfo" key={item.id}>
                    <div className="cartImage">
                      <img alt="" src={item.image[0]} />
                    </div>
                    <div className="cartName">
                      <span>{item.category}</span>
                      <h5>{item.title} </h5>
                    </div>
                    <div className="cartQt">
                      <RemoveIcon
                        onClick={() => decrementAmount(item)}
                        style={{ color: "#3b3b3b", cursor: "pointer" }}
                      />
                      {item.amount}
                      <AddIcon
                        onClick={() => incrementAmount(item)}
                        style={{ color: "#3b3b3b", cursor: "pointer" }}
                      />
                    </div>
                    <div className="cartPrice">
                      R${" "}
                      {(item.price * item.amount).toFixed(2).replace(".", ",")}
                    </div>
                    <div className="cartDelete">
                      <CloseIcon
                        onClick={() => handleRemove(item)}
                        style={{ color: "#ff5c47", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ))}
              </Col>
              <div className="btn">
                <Button form="checkout" variant="primary" type="submit">
                  Checkout
                </Button>
              </div>
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
          </ShopDetails>
        </Container>
      )}
    </ShopArea>
  );
}
