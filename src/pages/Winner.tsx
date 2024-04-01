import { UsersContext } from "../context/UsersContext";
import { useContext, useEffect } from "react";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

export const Winner = () => {
  const { usersState } = useContext(UsersContext);
  const winner = usersState.users.reduce((prev, current) => {
    return prev.score > current.score ? prev : current;
  });

  useEffect(() => {
    jsConfetti.addConfetti();
    return () => {
      jsConfetti.clearCanvas();
    };
  }, []);
  
  return (
    <div>
      <h1>¡Fin del juego!</h1>
      <div>
        <img src={winner.avatar} alt={winner.name} />
        <h2>¡{winner.name} ha ganado!</h2>
        <h3>{winner.score} puntos</h3>
      </div>
    </div>
  );
};
