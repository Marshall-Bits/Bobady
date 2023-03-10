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
    background-color: #FC5445;

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
        width: 50px;
    }
`


export const UsersList = () => {
    const { usersState, dispatch } = useContext(UsersContext);
    const { users } = usersState;

    return (
        <ListContainer>
            {users.map((user, index) => (
                <li key={index}>
                    <img src={`https://garticphone.com/images/avatar/2${index}.svg`} alt="" />
                        <p>
                        {user.name}

                        </p>
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