import styled, { keyframes } from "styled-components";
import { GoSync } from "react-icons/go";

const rotateAnim = keyframes`
    0% {
        transform:rotate(0deg);
    }

    50% {
        transform: rotate(180deg) ;
    }

    100% {
        transform:rotate(360deg) ;
        
    }
`;
const LoadingBarWrapper = styled.div`
  padding: 1rem;
  font-size: 32px;
  text-align: center;
  & .icon {
    animation: ${rotateAnim} 1s infinite linear;
  }
`;

const LoadingBar = () => {
  return (
    <LoadingBarWrapper>
      <GoSync className="icon" />
    </LoadingBarWrapper>
  );
};
export default LoadingBar;
