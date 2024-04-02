import { useState } from "react";
import { IModalInfoProps } from "../interfaces/interfaces";
import { Modal, Overlay } from "./ModalStyles";

export const ModalInfo = ({
  title,
  message,
  confirmFunction,
}: IModalInfoProps) => {
  const [hide, setHide] = useState<boolean>(false);

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
