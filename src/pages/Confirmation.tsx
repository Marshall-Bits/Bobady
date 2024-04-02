import { useContext, useRef, MouseEvent } from "react";
import { useNavigate } from "react-router";
import { UsersContext } from "../context/UsersContext";
import { IUser } from "../interfaces/interfaces";
import bobady from "../assets/sounds/bobady.mp3";
import fail from "../assets/sounds/fail.mp3";

export const Confirmation = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { userTurnId, users } = usersState;
  const navigate = useNavigate();
  const randomUser = useRef<IUser>();

  const usersExcludingCurrentTurn = users.filter(
    (user) => user.id !== userTurnId
  );
  
  randomUser.current =
    usersExcludingCurrentTurn[
      Math.floor(Math.random() * usersExcludingCurrentTurn.length)
    ];

  const addPoints = (e: MouseEvent<HTMLElement>, points: number) => {
    const target = e.target as HTMLElement;

    dispatch({
      type: "UPDATE_POINTS_TO_ADD",
      payload: points,
    });
    navigate("/adding-points");

    if(target.innerText === 'Bobady') {
      new Audio(bobady).play();
    }else if(target.innerText === 'Epic fail') {
      new Audio(fail).play();
    }

  };

  return (
    <>
      <h1>{randomUser.current.name}</h1>
      <p className="question">¿Reto superado?</p>
      <button onClick={(e) => addPoints(e, 300)}>Bobady</button>
      <button onClick={(e) => addPoints(e, -100)}>Epic fail</button>
    </>
  );
};
