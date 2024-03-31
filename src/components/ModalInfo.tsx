import { useState } from "react";
import { Modal, Overlay } from "./ModalStyles";

type ModalInfoProps = {
  title?: string;
  message: string;
  confirmFunction: () => void;
};

export const ModalInfo = ({
  title,
  message,
  confirmFunction,
}: ModalInfoProps) => {
  const [hide, setHide] = useState(false);

  const handleHide = () => {
    setHide(true);
    setTimeout(() => {
      confirmFunction();
    }, 300);
  };

  return (
    <Overlay className={hide ? "hide" : ""}>
      <Modal>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={handleHide}>Vale</button>
      </Modal>
    </Overlay>
  );
};
