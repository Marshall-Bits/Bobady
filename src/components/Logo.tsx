import styled from "styled-components";

const LogoContainer = styled.div`
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 2px;
  color: #fdfcff;
  background-image: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    rgb(57, 57, 255),
    rgb(212, 152, 255),
    rgb(255, 223, 255)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: moveGradient 10s infinite;

  @keyframes moveGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <p className="logo">Bobady</p>
    </LogoContainer>
  );
};
