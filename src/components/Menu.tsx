import styled from "styled-components";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { useState } from "react";

const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  animation: slideIn 0.5s forwards;
  z-index: 1;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);

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
    <MenuContainer className={hide ? "hide" : ""}>
      <div onClick={handleClose} id="close-btn">
        ✖️
      </div>
      <ul>
        <li>
          <Link onClick={handleClose} to={"/info"}>Info</Link>
        </li>
        <li></li>
      </ul>
    </MenuContainer>
  );
};
