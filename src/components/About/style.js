import styled from "styled-components";
export const AboutArea = styled.div`
  padding-top: 3rem;
`;

export const ContentArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentImage = styled.div`
  img {
    height: 450px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
  }
`;

export const ContentText = styled.div`
  padding: 80px;
  p {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 35px;
  }
  a {
    margin: auto;
    height: 70px;
    background-color: #3b3b3b;
    color: white !important;
    padding: 15px 30px;
    border: 0;
    outline: 0;
  }
`;
