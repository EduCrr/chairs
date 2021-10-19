import styled from "styled-components";

export const ProductAreaSingle = styled.div`
  padding-top: 3rem;

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
  }
  h3 {
    font-weight: 700;
  }
`;
