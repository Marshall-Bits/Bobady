import styled from "styled-components";

const CountH2 = styled.h2`
  font-size: 2rem;
  color: #1b531e;
  text-align: center;
  animation: grow 1s ease infinite;
  filter: drop-shadow(2px 0px 0px white) drop-shadow(-2px 0px 0px white)
    drop-shadow(0px 2px 0px white) drop-shadow(0px -2px 0px white);

  @keyframes grow {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(2);
    }
  }
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(
    rgba(255, 0, 0, 1) ,
    rgba(255, 154, 0, 1) ,
    rgba(208, 222, 33, 1) ,
    rgba(79, 220, 74, 1) ,
    rgba(63, 218, 216, 1)
  );
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(12deg);
    }
    51% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-12deg);
    }
  }
`;

const Wave = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 5px solid #fbff00;
  position: absolute;
  animation: growWave 1s infinite;
  z-index: -1;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid #fbff00;
    position: absolute;
    animation: growWave 1s infinite;
  }

  @keyframes growWave {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Count = ({ count }: { count: number }) => {
  return (
    <Container>
      <Wave>
        <div></div>
      </Wave>
      <CountContainer>
        <CountH2>{count}</CountH2>
      </CountContainer>
    </Container>
  );
};
