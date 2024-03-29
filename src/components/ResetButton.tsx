import { useContext, useState } from "react";
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

export const ResetButton = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { dispatch } = useContext(UsersContext);
  const navigate = useNavigate();

  const resetGame = () => {
    dispatch({
      type: "RESET_GAME",
    });
    setShowConfirm(false);
    navigate("/");
  };

  const hideConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <>
      {showConfirm && (
        <ModalExit acceptFunction={resetGame} rejectFunction={hideConfirm} />
      )}
      <ExitButton onClick={() => setShowConfirm(true)} src="./icons-exit.svg" alt="exit button" />
    </>
  );
};
