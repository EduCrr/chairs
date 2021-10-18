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
  .btn {
    display: flex;
    justify-content: flex-end;
    .icon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ff5c47;
      color: white;
      padding: 25px 70px;
      border: 0;
      outline: 0;
      cursor: pointer;
    }
  }
`;
