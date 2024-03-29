import { CountContainer, Container, CountH2, Wave } from "./CountStyles";

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
