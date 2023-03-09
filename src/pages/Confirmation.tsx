import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { UsersContext } from "../context/UsersContext";
import { IUser } from "../interfaces/interfaces";

export const Confirmation = () => {
    const { usersState, dispatch } = useContext(UsersContext);
    const { userTurnId, users } = usersState;
    const randomUser = useRef<IUser>();
    const navigate = useNavigate();
    const usersExcludingCurrentTurn = users.filter(user => user.id !== userTurnId);
    randomUser.current = usersExcludingCurrentTurn[Math.floor(Math.random() * usersExcludingCurrentTurn.length)];

    const addPoints = (points: number) => {
        dispatch({
            type: 'UPDATE_POINTS_TO_ADD',
            payload: points
        })
        navigate('/adding-points');
    };



    return (
        <>
            <h1>{randomUser.current.name}</h1>
            <h1>¿Reto superado?</h1>

            <button onClick={() => addPoints(30)}>Si</button>
            <br />
            <button onClick={() => addPoints(-10)}>No</button>
        </>
    )
};