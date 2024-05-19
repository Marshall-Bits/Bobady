import { Modal, Overlay } from "./ModalStyles";
import { useState } from "react";
import { IModalExitProps } from "../interfaces/interfaces";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const ModalExit = ({
  rejectFunction,
  acceptFunction,
}: IModalExitProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const { setLoading } = useContext(DataContext);

  const handleReject = () => {
    setHide(true);
    setTimeout(() => rejectFunction(), 300);
  };

  const handleAccept = () => {
    setHide(true);
    setLoading(true);
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
