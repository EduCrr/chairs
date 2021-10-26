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
    display: flex;
    align-items: center;
  }
  a.link {
    margin: 10px 0px;
  }
`;
export const ProductsContent = styled.div`
  padding-right: 10px;
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

  @media (max-width: 1024px) {
    .product {
      width: 270px;
      margin: auto;
    }
    h4 {
      text-align: center !important;
      margin-top: 40px !important;
    }
  }
  @media (max-width: 425px) {
    .product {
      width: 220px;
    }
  }
`;
