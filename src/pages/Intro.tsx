import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Count } from "../components/Count";
import styled from "styled-components";
import time from "../assets/sounds/time.mp3";

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Intro = () => {
  const [count, setCount] = useState<number>(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) navigate("/trick-or-treat");
    else new Audio(time).play();
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <IntroContainer>
      <h1>Comencemos!</h1>
      <Count count={count} />
    </IntroContainer>
  );
};
