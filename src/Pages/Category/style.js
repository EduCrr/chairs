import styled from "styled-components";

export const ProductArea = styled.div`
  padding-top: 3rem;
  padding: 20px;

  h1 {
    margin-bottom: 30px;
  }
  h2 {
    margin: 30px 0px;
    font-weight: 700;
    text-transform: uppercase;
  }
  a.link {
    margin: 10px 0px;
  }
`;
export const ProductsContent = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  outline: none;
  height: 95vh;
  &::-webkit-scrollbar {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    width: 0.6vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3b3b3b;
  }

  &::-webkit-scrollbar-track {
    background-color: #ccc;
  }

  .product {
    position: relative;
    button {
      position: absolute;
      right: -10px;
      bottom: -20px;
      background-color: #edbe5f;
      color: #3b3b3b;
      border: 0;
      outline: 0;
      height: 80px;
      width: 80px;
      font-weight: 700;
    }
    img {
      width: 100%;
      height: 270px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  h4 {
    margin-top: 20px;
    cursor: pointer;
    font-size: 19px;
  }
`;
