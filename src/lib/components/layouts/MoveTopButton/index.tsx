import { useCallback, useEffect, useState } from "react";

const MoveTopButton = () => {
  const [show, setShow] = useState(false);
  const onClickTopButton = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.scrollY > 100) {
      if (!show) setShow(true);
    } else if (show) setShow(false);
  }, []);

  if (!show) return <></>;
  return (
    <div>
      <button onClick={onClickTopButton}>위로가기</button>
    </div>
  );
};

export default MoveTopButton;
