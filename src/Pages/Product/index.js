import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { ProductContext } from "../../contexts/productContext";
import { ProductAreaSingle } from "./style";
import { useParams } from "react-router-dom";
import firebase from "../../firebaseConnection";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Product() {
  const { cart, storageCart, showSpinner, setShowSpinner } =
    useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [productId, setProductId] = useState({});
  const [productsRec, setProductsRec] = useState([]);
  const history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    setShowSpinner(true);
    async function loadProduct() {
      await firebase
        .firestore()
        .collection("products")
        .doc(id)
        .get()
        .then((doc) => {
          setProduct(doc.data());
          setProductId(doc.id);
          setImages(doc.data().image);
          setShowSpinner(false);
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
  async function loadProductsRec() {
    setShowSpinner(true);
    await firebase
      .firestore()
      .collection("products")
      .limit(6)
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
        setProductsRec(lista);
        setShowSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    loadProductsRec();
  }, []);

  function handleRoute(id) {
    history.push("");

    setTimeout(() => history.push(`/product/${id}`), 100);
  }
  return (
    <ProductAreaSingle>
      <Container>
        {showSpinner ? (
          <Spinner className="spinner" animation="border" size="xl" />
        ) : (
          <>
            <Row>
              <Col xl={5}>
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showStatus={false}
                  useKeyboardArrows={true}
                >
                  {images.map((item, k) => (
                    <div key={k}>
                      <img alt="" src={item} />
                    </div>
                  ))}
                </Carousel>
              </Col>
              <Col xl={7} className="info">
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
            <h3 className="text-center mt-5 mb-5">Recommended products</h3>
            <Row>
              <Slider {...settings}>
                {productsRec.map((item) => (
                  <div className=" mb-5" key={item.id}>
                    <div className="product">
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRoute(item.id)}
                        alt={item.title}
                        src={item.image[0]}
                      />
                      <button onClick={() => handleCart(item.id, item)}>
                        R$ {item.price}
                      </button>
                    </div>

                    <h4
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRoute(item.id)}
                    >
                      {item.title}
                    </h4>
                  </div>
                ))}
              </Slider>
            </Row>
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
          </>
        )}
      </Container>
    </ProductAreaSingle>
  );
}
