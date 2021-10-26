import styled from "styled-components";

export const Container = styled.div`
  svg {
    display: none;
  }
  @media (max-width: 768px) {
    svg {
      display: flex;
      z-index: 12;
      position: relative;
    }
  }
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
`;

export const Menu = styled.nav`
  @media (max-width: 768px) {
    background-color: #fdfdfd;
    position: fixed;
    top: 0;
    left: ${(props) => (props.ativo ? "0px" : "-100px")};
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    transition: all ease 0.3s;
    a {
      padding: 10px 0px;
      font-size: 20px;
    }
  }
`;

export const LeftSide = styled.div`
  margin-left: 25px;
  a {
    margin: 0px 10px;
  }
`;
export const RightSide = styled.button.attrs({
  type: "button",
})`
  height: 70px;
  background-color: #3b3b3b;
  color: white;
  padding: 5px 50px;
  border: 0;
  outline: 0;
  cursor: pointer;
`;
