import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
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
