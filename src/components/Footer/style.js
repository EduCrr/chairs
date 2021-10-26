import styled from "styled-components";

export const FooterArea = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 5rem !important;
  padding: 20px 0px;
  padding-bottom: 1.5rem;
  margin: 0px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 14px;
    color: #999;
    font-weight: 700;
    margin-bottom: 10px;
  }
  a {
    margin: 0px 10px;
  }
  .icons svg {
    color: #3b3b3b;
    margin: 0px 5px;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    nav {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 10px 0px;
      a {
        padding: 5px 0px;
      }
    }
  }
`;
