import styled from "styled-components";

export const ShopArea = styled.div`
  padding-top: 3rem;
`;
export const ShopDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .btn {
    cursor: default;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      cursor: pointer;
      height: 70px;
      background-color: #3b3b3b;
      color: white;
      padding: 5px 70px;
      border: 0;
      outline: 0;
      cursor: pointer;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      text-transform: uppercase;
      font-size: 14px;
      color: #ccc;
      font-weight: 700;
    }

    h3 {
      color: #999;
      margin-top: 20px;
    }
    .form-control {
      color: #3b3b3b !important;
      font-weight: bold !important;
    }
  }
  .cartArea {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .cartInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      .cartImage {
        img {
          height: 150px;
          width: 150px;
          object-fit: cover;
        }
      }
      .cartName {
        span {
          text-transform: uppercase;
          font-size: 14px;
          color: #ccc;
          font-weight: 700;
        }
      }
      .cartPrice {
        font-weight: 700;
      }
      & + div {
        border-top: 1px solid #ddd;
      }
    }
  }
`;
