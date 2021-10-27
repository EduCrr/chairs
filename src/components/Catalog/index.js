import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext.js";
import { CatelogArea } from "./style.js";
import { Link, useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast, Flip } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Catalog() {
  const { myProducts, loadProducts, showSpinner, storageCart, cart } =
    useContext(ProductContext);
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    className: "slider",
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
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
    <CatelogArea>
      <h1>Catalog</h1>
      {showSpinner ? (
        <Spinner className="spinner mt-3" animation="border" size="xl" />
      ) : (
        <Slider {...settings}>
          {myProducts.map((item) => (
            <div className="slideContent" key={item.id}>
              <div className="slideContentImage">
                <Link className="catalogLink" to={`product/${item.id}`}>
                  <img src={item.image[0]} alt={item.title} />
                </Link>
              </div>
              <div className="slideContentInfo">
                <span>{item.category}</span>
                <Link className="catalogLink" to={`product/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
                <p>{item.description}</p>
                <div className="productInfo">
                  <span>R$ {item.price.replace(".", ",")}</span>
                  <button onClick={() => handleCart(item)}>Buy</button>
                </div>
              </div>
            </div>
          ))}
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
        </Slider>
      )}
    </CatelogArea>
  );
}
//https://www.npmjs.com/package/@splidejs/react-splide
//https://splidejs.com/
