import styled from "styled-components";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { useState } from "react";

const MenuContainer = styled.div`
  align-items: center;
  animation: slideIn 0.5s forwards;
  background-color: rgb(201, 29, 253);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 115);
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  z-index: 1;

  &.hide {
    animation: slideOut 0.5s forwards;
  }

  #close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    cursor: pointer;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  animation: fadeIn 0.5s forwards;

  &.hide {
    animation: fadeOut 0.5s forwards;
  }

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @keyframes fadeOut {
    from {
      background-color: rgba(0, 0, 0, 0.5);
    }
    to {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

type MenuProps = {
  setShowMenu: (showMenu: boolean) => void;
};

export const Menu: FunctionComponent<MenuProps> = ({ setShowMenu }) => {
  const [hide, setHide] = useState(false);

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
              Instrucciones
            </Link>
          </li>
          <li>
            <Link onClick={handleClose} to={"/info"}>
              Instrucciones
            </Link>
          </li>
        </ul>
      </MenuContainer>
    </Overlay>
  );
};
