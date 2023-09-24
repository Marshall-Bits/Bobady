import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import styled from 'styled-components';

const UserInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    gap: 20px;

    input {
        width: 80%;
        font-size: 30px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }
`;

export const UserInput = () => {
    const [participantName, setParticipantName] = useState<string>('');
    const { dispatch } = useContext(UsersContext);

    const handleSubmit = (e: React.SyntheticEvent) => {
        const randomAvatar = Math.floor(Math.random() * 50);
        e.preventDefault();
        if (participantName) {
            dispatch({
                type: 'ADD_USER',
                payload: {
                    name: participantName,
                    id: new Date().getTime().toString(),
                    score: 0,
                    avatar: `https://garticphone.com/images/avatar/${randomAvatar}.svg`,
                    turns: 0,
                },
            });
            setParticipantName('');
        }
    }

    return (
        <UserInputContainer onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                />
                <button
                    type="submit"
                >
                    Agregar participante
                </button>
        </UserInputContainer>
    )
}