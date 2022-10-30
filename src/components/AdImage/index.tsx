import React from "react";
import styled from "styled-components";

const AdImage = () => {
  return (
    <Wrapper>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="wanted ad"
        />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  border-top: 1px solid #d8dee4;
  text-align: center;
  padding-top: 6px;
  height: 67px;

  & a {
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  & img {
    vertical-align: middle;
    height: 100%;
  }
`;

export default AdImage;
