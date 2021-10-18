import styled from "styled-components";

export const CatelogArea = styled.div`
  padding-top: 3rem;

  .slider {
    margin-top: 30px;
    .slick-prev:before,
    .slick-next:before {
      color: #3b3b3b;
    }
  }
  .slideContent {
    background-color: white;
    padding: 12px;
    margin: 10px 0px;
    display: inline-flex !important;
    justify-content: space-around !important;
    align-items: center !important;
    &:nth-child(2) {
      border-left: 20px solid #f2f2f2;
    }
  }

  .slideContentImage img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }
  .slideContentInfo {
    display: flex;
    flex-direction: column;
    span {
      text-transform: uppercase;
      font-size: 14px;
      color: #ccc;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      color: #ccc;
      font-size: 14px;
    }
    .productInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #3b3b3b;
        font-weight: 700;
        font-size: 22px;
      }
      button {
        background-color: #3b3b3b;
        border-radius: 40px;
        padding: 15px 30px;
        border: 0;
        outline: 0;
        color: white;
      }
    }
  }
`;
