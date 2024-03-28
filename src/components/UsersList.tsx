import { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "../context/UsersContext";
import { Avatar } from "../components/Avatar";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  list-style-type: none;
  padding: 1rem 0.5rem;
  width: 100%;
  max-width: 90vw;
  gap: 1em;
  font-size: 1.3em;
  height: 50vh;
  max-height: 50vh;
  overflow-y: scroll;
  background-color: #07070733;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  scrollbar-width: none;
  -ms-overflow-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    width: 100%;
  }

  button {
    font-size: 0.2rem;
    padding: 10px;
  }

  .delete {
    width: 1.3rem;
    cursor: pointer;
    fill: #15c42c;
    background-color: rgb(255, 255, 115);
    border-radius: 50%;
  }
`;

export const UsersList = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { users } = usersState;

  return (
    <ListContainer>
      {users
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
        ))}
    </ListContainer>
  );
};
