import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: blueviolet;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  & .title {
    color: #fff;
    font-weight: 700;
    text-align: center;
    font-size: 32px;
  }
`;
