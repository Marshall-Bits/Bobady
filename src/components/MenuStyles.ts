import styled from "styled-components";

export const MenuContainer = styled.div`
  align-items: center;
  animation: slideIn 0.5s forwards;
  background-color: rgb(201, 29, 253);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 115);
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  max-width: 300px;
  z-index: 1;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
  }

  a {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    padding-left: 1rem;
    cursor: pointer;
  }

  &.hide {
    animation: slideOut 0.5s forwards;
  }

  #close-btn {
    width: 100%;
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    cursor: pointer;
  }

  span img {
    width: 20px;
    height: 20px;
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

export const Overlay = styled.div`
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
