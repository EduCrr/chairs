import styled from "styled-components";

export const ProductAreaSingle = styled.div`
  padding-top: 3rem;

  .carousel-root {
    display: flex;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .carousel {
    width: 150px;
  }
  .carousel .thumbs {
    transform: none !important;
    @media (max-width: 1024px) {
      display: flex;
      margin: 10px 0px;
    }
  }
  .carousel .thumbs-wrapper {
    margin: 0 !important;
  }
  .carousel .thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  h1 {
    font-size: 45px;
  }

  .info {
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }
  }

  span {
    text-transform: uppercase;
    font-size: 14px;
    color: #ccc;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    .icon {
      padding: 10px;
      height: 70px;
      width: 170px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ff5c47;
      color: white;
      border: 0;
      outline: 0;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  h3 {
    font-weight: 700;
  }
  .slick-slide {
    padding: 0px 10px;
  }
  @media (max-width: 1024px) {
    .product {
      width: 70%;
      margin: auto;
    }
    h4 {
      text-align: center !important;
      margin-top: 40px !important;
    }
  }
  @media (max-width: 425px) {
    .product {
      width: 100%;
    }
    h1 {
      font-size: 30px;
    }
  }
`;
