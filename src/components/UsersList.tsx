import { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "../context/UsersContext";

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    list-style-type: none;
    padding: 1.5rem 1rem;
    gap: 1em;
    font-size: 1.5em;
    max-height: 50vh;
    overflow-y: scroll;
    background-color: #07070733;
    border-radius: .5rem;

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7vh;
    }

    button {
        font-size: 13px;
        padding: 10px;
    }

    img {
        width: 2rem;
    }
`


export const UsersList = () => {
    const { usersState, dispatch } = useContext(UsersContext);
    const { users } = usersState;

    return (
        <ListContainer>
            {users.map((user, index) => (
                <li key={index}>
                    <img
                        onClick={() => {
                            dispatch({
                                type: 'UPDATE_USER_AVATAR_URL',
                                payload: user.id
                            })
                        }}
                        src={user.avatar} alt="user avatar" />
                    <p>
                        {user.name}
                    </p>
                    <button
                        onClick={
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