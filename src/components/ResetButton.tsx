import { ReactComponentElement } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router";
import { ModalExit } from "./ModalExit";
import styled from "styled-components";

const ExitButton = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

type ResetButtonProps = {
  setShowConfirm: (value: boolean) => void;
};

export const ResetButton = ({ setShowConfirm }: ResetButtonProps) => {
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
