import styled from "styled-components";

const AdImage = () => {
  return (
    <Wrapper>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
        <img src="/images/wanted_ad.jpeg" alt="wanted ad" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  text-align: center;
  padding-top: 6px;

  & a {
    display: inline-block;
    width: 80%;
  }

  & img {
    vertical-align: middle;
    width: 100%;
  }
`;

export default AdImage;
