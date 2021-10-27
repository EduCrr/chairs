import styled from "styled-components";

export const CheckoutArea = styled.div`
  padding-top: 3rem;
`;

export const ChechoutDetails = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 130px;
    width: 130px;
    object-fit: cover;
  }
  span {
    font-size: 14px !important;
    color: #ccc;
    font-weight: 700;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      text-align: center !important;
    }
    img,
    h3 {
      margin: 10px 0px;
    }
  }
`;
