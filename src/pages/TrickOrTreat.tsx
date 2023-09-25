import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router";
import { IUser } from "../interfaces/interfaces";
import styled from "styled-components";

const ImageAvatar = styled.img`
    width: 5rem;
`;

export const TrickOrTreat = () => {
    const [randomUser, setRandomUser] = useState<IUser>();
    const { usersState, dispatch } = useContext(UsersContext);
    const navigate = useNavigate();
    const { users } = usersState;

    useEffect(() => {
        // exclude users with higher turns
        const usersWithLessTurns = users.filter(user => user.turns === Math.min(...users.map(user => user.turns)));

        if (usersWithLessTurns.length > 1) {
            const randomIndex = Math.floor(Math.random() * usersWithLessTurns.length);
            setRandomUser(usersWithLessTurns[randomIndex]);
        } else {
            setRandomUser(usersWithLessTurns[0]);
        }
    }, []);

    useEffect(() => {
        console.log(randomUser);
        if (randomUser) {
            const updatedUser = { ...randomUser, turns: randomUser.turns + 1 };
            dispatch({
                type: 'UPDATE_TURN_ID',
                payload: updatedUser.id,
            });
        }
    }, [randomUser, dispatch]);

    return (
        <>
            {randomUser ?
                <>
                    <ImageAvatar src={randomUser.avatar} alt="user avatar" />
                    <h1>{randomUser.name},</h1>
                    <button onClick={() => navigate('/question')}>Pregunta</button>
                    <p>o</p>
                    <button onClick={() => navigate('/challenge')}>Reto</button>
                    <button onClick={() => navigate('/intro')}>Back</button>
                </>
                : <h1>Loading...</h1>
            }
        </>
    );
};