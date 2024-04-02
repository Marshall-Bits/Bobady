import { useState } from "react";
import { Link } from "react-router-dom";
import { IMenuProps } from "../interfaces/interfaces";
import { MenuContainer, Overlay } from "./MenuStyles";

export const Menu = ({ setShowMenu, setShowConfirm }: IMenuProps) => {
  const [hide, setHide] = useState<boolean>(false);

  const handleClose = () => {
    setHide(true);
    setTimeout(() => setShowMenu(false), 500);
  };

  return (
    <Overlay className={hide ? "hide" : ""} onClick={handleClose}>
      <MenuContainer className={hide ? "hide" : ""}>
        <div onClick={handleClose} id="close-btn">
          ✖️
        </div>
        <ul>
          <li>
            <Link onClick={handleClose} to={"/info"}>
              <span>
                <img src="./icons-arrow.svg" alt="arrow" />
              </span>
              Instrucciones
            </Link>
          </li>
          <li>
            <a onClick={() => setShowConfirm(true)}>
              <span>
                <img src="./icons-arrow.svg" alt="arrow" />
              </span>
              Reiniciar juego
            </a>
          </li>
          <li>
            <a
              onClick={handleClose}
              target="_blank"
              href="https://www.github.com/marshall-bits"
            >
              <span>
                <img src="./icons-arrow.svg" alt="arrow" />
              </span>
              Sobre mí
            </a>
          </li>
        </ul>
      </MenuContainer>
    </Overlay>
  );
};
