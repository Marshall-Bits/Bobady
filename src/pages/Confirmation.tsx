import { useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { UsersContext } from "../context/UsersContext";
import { IUser } from "../interfaces/interfaces";

export const Confirmation = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { userTurnId, users } = usersState;
  const randomUser = useRef<IUser>();
  const navigate = useNavigate();
  const usersExcludingCurrentTurn = users.filter(
    (user) => user.id !== userTurnId
  );
  randomUser.current =
    usersExcludingCurrentTurn[
      Math.floor(Math.random() * usersExcludingCurrentTurn.length)
    ];

  const addPoints = (points: number) => {
    dispatch({
      type: "UPDATE_POINTS_TO_ADD",
      payload: points,
    });
    navigate("/adding-points");
  };

  return (
    <>
      <h1>{randomUser.current.name}</h1>
      <p className="question">¿Crees que el reto ha sido superado?</p>
      <button onClick={() => addPoints(300)}>Si</button>
      <button onClick={() => addPoints(-100)}>No</button>
    </>
  );
};
