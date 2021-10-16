import styled from "styled-components";

export const TilArea = styled.div`
  overflow: hidden;
  display: flex;
  .homeImages {
    display: flex;
    flex-direction: column;
    img {
      height: calc(100vh - 70px);
      width: 100%;
      object-fit: cover;
    }
    span {
      font-size: 22px;
      color: white;
      font-weight: 700;
      position: absolute;
      left: 50%;
      bottom: 5%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
    }
  }
`;
