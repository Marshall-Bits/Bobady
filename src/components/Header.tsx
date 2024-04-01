import styled from "styled-components";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { IUser } from "../interfaces/interfaces";
import { Score } from "./Score";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(201, 29, 253, 0.322);
  width: 100vw;
  height: 70px;
  padding: 0.4rem;
  padding-left: 1rem;
  display: flex;
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
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

type HeaderProps = {
  setShowMenu: (showMenu: boolean) => void;
};

export const Header: FunctionComponent<HeaderProps> = ({ setShowMenu }) => {
  const { usersState } = useContext(UsersContext);
  const { users } = usersState;
  const [usersByScore, setUsersByScore] = useState<IUser[]>(users);

  useEffect(() => {
    const sortedUsers = users.sort((a, b) => b.score - a.score);
    setUsersByScore(sortedUsers);
  }, [users]);

  return (
    <HeaderContainer>
      {usersByScore.length > 0 ? (
        usersByScore.map((user, index) => (
          <div className="user-container" key={index}>
            <img src={user.avatar} />
            <Score score={user.score} />
          </div>
        ))
      ) : (
        <div className="user-container">
          <img src="https://garticphone.com/images/avt_empty.png" />
          <Score score={0} />
        </div>
      )}
      <img
        onClick={() => setShowMenu(true)}
        id="menu-btn"
        src="./icons-menu.svg"
        alt="menu icon"
      />
    </HeaderContainer>
  );
};
