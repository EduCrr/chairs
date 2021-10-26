import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
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

      
    }
  }

  h4 {
    margin-top: 20px;
    font-size: 19px;
  }

  .slider {
    margin-top: 30px;
    
  }
  .slick-prev:before,
    .slick-next:before {
      color: #3b3b3b;
    }
  
`;
