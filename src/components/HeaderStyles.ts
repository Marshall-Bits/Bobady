import styled from "styled-components";

export const HeaderContainer = styled.div`
  top: 0;
  background-color: rgba(201, 29, 253, 0.322);
  width: 100vw;
  min-height: 70px;
  max-height: 70px;
  padding: 0.4rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.7);
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  img {
    width: 1.2rem;
    box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.7);
    border-radius: 50%;
  }

  .user-container {
    position: relative;
  }

  #menu-btn {
    cursor: pointer;
    box-shadow: none;
    right: 1rem;
    top: 1%;
  }
`;
