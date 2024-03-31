import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Count } from "../components/Count";
import styled from "styled-components";

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Intro = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) navigate("/trick-or-treat");
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
