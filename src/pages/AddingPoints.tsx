import { useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router";
import { UsersContext } from "../context/UsersContext"

export const AddingPoints = () => {
    const { usersState, dispatch } = useContext(UsersContext);
    const pointsSet = useRef<boolean>(false);
    const { pointsToAdd, userTurnId, users } = usersState;
    const user = users.find(user => user.id === userTurnId);
    const navigate = useNavigate();


    useEffect(() => {
        if (pointsSet.current === false) {
            dispatch({
                type: 'UPDATE_USER_POINTS',
                payload: { userId: userTurnId, points: pointsToAdd },
            });
            return () => {
                pointsSet.current = true;
            };
        }
    }, []);


    return (
        <>
            {userTurnId && pointsToAdd !== undefined &&
                <>
                    <h1>{user?.name} {pointsToAdd > 0 ? `+ ${pointsToAdd}` : ` ${pointsToAdd}`} puntos!</h1>
                    <h2>Total: {user?.score}</h2>
                    <button onClick={() => navigate("/trick-or-treat")}>Continuar</button>
                </>
            }
        </>
    )
}