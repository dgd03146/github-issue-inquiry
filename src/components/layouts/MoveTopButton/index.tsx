import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowBarUp } from "react-icons/bs";

const MoveTopButton = () => {
  const [show, setShow] = useState(false);
  const onClickTopButton = useCallback(() => {
    // window.scrollTo(0, 0);
    window.scroll({ behavior: "smooth", top: 0 });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      }, 100);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!show) return <></>;
  return (
    <MoveToButtonWrapper>
      <button onClick={onClickTopButton}>
        <BsArrowBarUp />
      </button>
    </MoveToButtonWrapper>
  );
};

export default MoveTopButton;

const MoveToButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 10%;

  & button {
    background: #b13138;
    width: 40px;
    height: 40px;
    border: none;
    font-size: 20px;
    border-radius: 10px;
  }

  & svg {
    color: white;
    font-size: 26px;
    text-align: center;
    vertical-align: middle;
  }
`;
