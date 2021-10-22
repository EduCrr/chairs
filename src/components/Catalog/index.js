import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/productContext.js";
import { CatelogArea } from "./style.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Catalog() {
  const { myProducts, loadProducts, storageCart, cart } =
    useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    className: "slider",
    slidesPerRow: 2,
    dots: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
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
  }
  return (
    <CatelogArea>
      <h1>Catalog</h1>

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
                <span>R$ {item.price}</span>
                <button onClick={() => handleCart(item)}>Buy</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </CatelogArea>
  );
}
//https://www.npmjs.com/package/@splidejs/react-splide
//https://splidejs.com/
