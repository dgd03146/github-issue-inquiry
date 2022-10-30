import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  & h1 {
    font-size: 32px;
    font-weight: 600;
    padding: 20px 0;
  }

  & button {
    padding: 0.8rem 1rem;
    border: 0;
    background-color: #b13138;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
  }
`;
