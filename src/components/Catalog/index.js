import React, { useContext } from "react";
import { ProductContext } from "../../contexts/productContext.js";
import { CatelogArea } from "./style.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Catalog() {
  const { products } = useContext(ProductContext);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    className: "slider",
    slidesPerRow: 2,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <CatelogArea>
      <h1>Catalog</h1>

      <Slider {...settings}>
        <div className="slideContent">
          <div className="slideContentImage">
            <img src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png" />
          </div>
          <div className="slideContentInfo">
            <span>Chairs</span>
            <h4>Modern Chair</h4>
            <p>Lorem ipsum dolor sit amet....</p>
            <div className="productInfo">
              <span>R$ 299</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="slideContent">
          <div className="slideContentImage">
            <img src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png" />
          </div>
          <div className="slideContentInfo">
            <span>Chairs</span>
            <h4>Modern Chair</h4>
            <p>Lorem ipsum dolor sit amet....</p>
            <div className="productInfo">
              <span>R$ 299</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="slideContent">
          <div className="slideContentImage">
            <img src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png" />
          </div>
          <div className="slideContentInfo">
            <span>Chairs</span>
            <h4>Modern Chair</h4>
            <p>Lorem ipsum dolor sit amet....</p>
            <div className="productInfo">
              <span>R$ 299</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="slideContent">
          <div className="slideContentImage">
            <img src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png" />
          </div>
          <div className="slideContentInfo">
            <span>Chairs</span>
            <h4>Modern Chair</h4>
            <p>Lorem ipsum dolor sit amet....</p>
            <div className="productInfo">
              <span>R$ 299</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="slideContent">
          <div className="slideContentImage">
            <img src="https://hipvan-images-production.imgix.net/product-images/3789c380-092d-49a4-bb68-cc61ac98c3ec/Modern-Classics-I--DSW-Chair--White-9.png" />
          </div>
          <div className="slideContentInfo">
            <span>Chairs</span>
            <h4>Modern Chair</h4>
            <p>Lorem ipsum dolor sit amet....</p>
            <div className="productInfo">
              <span>R$ 299</span>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </Slider>
    </CatelogArea>
  );
}
//https://www.npmjs.com/package/@splidejs/react-splide
//https://splidejs.com/
