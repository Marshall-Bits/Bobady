import { Modal, Overlay } from "./ModalStyles";
import { useState } from "react";
import { IModalExitProps } from "../interfaces/interfaces";

export const ModalExit = ({
  rejectFunction,
  acceptFunction,
}: IModalExitProps) => {
  const [hide, setHide] = useState<boolean>(false);

  const handleReject = () => {
    setHide(true);
    setTimeout(() => rejectFunction(), 300);
  };

  const handleAccept = () => {
    setHide(true);
    setTimeout(() => acceptFunction(), 300);
  };

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
