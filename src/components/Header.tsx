import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { IUser, IHeaderProps } from "../interfaces/interfaces";
import { HeaderContainer } from "./HeaderStyles";
import { Score } from "./Score";

export const Header = ({ setShowMenu }: IHeaderProps) => {
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
