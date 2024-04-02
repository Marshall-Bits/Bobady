import styled from 'styled-components';
import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";

const UserInputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    gap: 20px;

    input {
        width: 100%;
        font-size: 30px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }
`;

export const UserInput = () => {
    const { dispatch } = useContext(UsersContext);
    const [participantName, setParticipantName] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent) => {
        const randomAvatar = Math.floor(Math.random() * 40);
        e.preventDefault();
        if (participantName) {
            dispatch({
                type: 'ADD_USER',
                payload: {
                    name: participantName.trim(),
                    id: Number(new Date().getTime()),
                    score: 0,
                    avatar: `https://garticphone.com/images/avatar/${randomAvatar}.svg`,
                    turns: 0,
                    challenges: [],
                    questions: [],
                },
            });
            setParticipantName('');
        }
    }

    return (
        <UserInputContainer onSubmit={handleSubmit}>
                <input
                    maxLength={8}
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