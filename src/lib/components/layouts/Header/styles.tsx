import theme from "@/lib/styles/theme";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: #b13138;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: height 0.3s;

  & .title {
    color: #fff;
    font-weight: 700;
    text-align: center;
    font-size: 32px;
    transition: font-size 0.3s;
  }

  @media ${theme.device.tablet} {
    height: 70px;

    & .title {
      font-size: 28px;
    }
  }
`;
