import styled from "styled-components";

export const ContaineArea = styled.div``;
export const TilArea = styled.div`
  overflow: hidden;
  display: flex;

  a {
    margin: 0;
  }

  .homeImages {
    display: flex;
    flex-direction: column;
    padding: ${(props) => (props.borda ? "0px 7px" : "0px")};
    img {
      height: 43vw;
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
