import { Modal, Overlay } from "./ModalStyles";
import { FunctionComponent, useState } from "react";

type ModalExitProps = {
  rejectFunction: () => void;
  acceptFunction: () => void;
};

export const ModalExit: FunctionComponent<ModalExitProps> = ({
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
