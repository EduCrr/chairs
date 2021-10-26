import styled from "styled-components";

export const CatelogArea = styled.div`
  padding-top: 3rem;

  .slideContent {
    background-color: white;
    padding: 12px;
    margin: 10px 0px;
    display: inline-flex !important;
    justify-content: space-around !important;
    align-items: center !important;
    &:nth-child(2) {
      border-left: 20px solid #fdfdfd;
    }
    @media (max-width: 730px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .slideContentImage img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }
  .slideContentInfo {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0px 15px;
    span {
      text-transform: uppercase;
      font-size: 14px;
      color: #ccc;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      color: #ccc;
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
    .productInfo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        color: #3b3b3b;
        font-weight: 700;
        font-size: 22px;
      }
      button {
        margin: 0px 20px;
        background-color: #3b3b3b;
        border-radius: 40px;
        padding: 15px 30px;
        border: 0;
        outline: 0;
        color: white;
      }
    }
    @media (max-width: 1024px) {
      justify-content: space-between;
      .productInfo {
        justify-content: space-between;
      }
    }
    @media (max-width: 730px) {
      flex-direction: column;
      .productInfo {
        flex-direction: column;
      }
    }
  }
`;
