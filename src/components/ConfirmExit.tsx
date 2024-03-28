import styled from "styled-components";
import { FunctionComponent, useState } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.hide {
    animation: fadeOut 0.3s ease;
  }
`;

const Modal = styled.div`
  background-color: rgb(201, 29, 253);
  width: 90%;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

type ConfirmExitProps = {
  rejectFunction: () => void;
  acceptFunction: () => void;
};

export const ConfirmExit: FunctionComponent<ConfirmExitProps> = ({
  rejectFunction,
  acceptFunction,
}) => {
  const [hide, setHide] = useState(false);

  const handleReject = () => {
    setHide(true);
    setTimeout(() => rejectFunction(), 300);
  };

  const handleAccept = () => {
    setHide(true);
    setTimeout(() => acceptFunction(), 300);
  }

  return (
    <Overlay className={hide ? "hide" : ""}>
      <Modal>
        <p>¿Quieres reiniciar el juego?</p>
        <button onClick={handleAccept}>Si</button>
        <button onClick={handleReject}>No</button>
      </Modal>
    </Overlay>
  );
};
