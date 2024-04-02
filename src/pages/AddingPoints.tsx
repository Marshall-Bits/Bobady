import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { UsersContext } from "../context/UsersContext";
import { Logo } from "../components/Logo";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

export const AddingPoints = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { pointsToAdd, userTurnId, users } = usersState;
  const pointsSet = useRef<boolean>(false);
  const navigate = useNavigate();
  const user = users.find((user) => user.id === userTurnId);

  useEffect(() => {
    if (pointsToAdd && pointsToAdd > 100) {
      jsConfetti.addConfetti();
    }
  }, [pointsToAdd]);

  useEffect(() => {
    if (pointsSet.current === false) {
      dispatch({
        type: "UPDATE_USER_POINTS",
        payload: { userId: userTurnId, points: pointsToAdd },
      });
      return () => {
        pointsSet.current = true;
      };
    }
    return () => {
      jsConfetti.clearCanvas();
    };
  }, []);

  return (
    <>
      {userTurnId && pointsToAdd !== undefined && (
        <>
          {pointsToAdd > 0 && <Logo />}
          <p className="question">
            {pointsToAdd > 0
              ? `¡Oh yeah ${user?.name}! tienes ${pointsToAdd} puntos mas 😁`
              : `Sorry ${user?.name}, ${pointsToAdd} puntos 😓`}
          </p>
          <h2>Total: {user?.score}</h2>
          <button onClick={() => navigate("/trick-or-treat")}>Continuar</button>
        </>
      )}
    </>
  );
};
