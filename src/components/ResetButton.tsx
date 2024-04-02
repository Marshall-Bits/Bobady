import styled from "styled-components";
import { IResetButtonProps } from "../interfaces/interfaces";

const ExitButton = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const ResetButton = ({ setShowConfirm }: IResetButtonProps) => {
  return (
    <>
      <ExitButton
        onClick={() => setShowConfirm(true)}
        src="./icons-exit.svg"
        alt="exit button"
      />
    </>
  );
};
