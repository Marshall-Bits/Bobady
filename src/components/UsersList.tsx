import { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "../context/UsersContext";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    list-style-type: none;
    padding: 1em 10px;
    gap: 1em;
    font-size: 1.5em;
    max-height: 50vh;
    overflow-y: scroll;
    background-color: #585858;

    li{
        display: flex;
        justify-content: space-between;
    }

    button {
        font-size: 13px;
        padding: 10px;

    }
`


export const UsersList = () => {
    const { usersState, dispatch } = useContext(UsersContext);
    const { users } = usersState;

    return (
        <ListContainer>
            {users.map((user, index) => (
                <li key={index}>{user.name}
                    <button onClick={
                        () => {
                            dispatch({
                                type: 'REMOVE_USER',
                                payload: user.id
                            })
                        }
                    }>Borrar</button>
                </li>
            ))}
        </ListContainer>
    );
};