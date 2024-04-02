import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import { ListContainer } from "./UsersListStyles";
import { Avatar } from "../components/Avatar";

export const UsersList = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { users } = usersState;

  return (
    <ListContainer>
      {users.length > 0 ? (
        users
          .slice()
          .reverse()
          .map((user, index) => (
            <li key={index}>
              <Avatar user={user} />
              <p>{user.name}</p>
              <img
                className="delete"
                src="./icons-trash.svg"
                alt="delete user"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_USER",
                    payload: user.id,
                  });
                }}
              />
            </li>
          ))
      ) : (
        <p>Añade participantes...</p>
      )}
    </ListContainer>
  );
};
