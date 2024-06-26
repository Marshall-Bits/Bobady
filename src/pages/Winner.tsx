import { UsersContext } from "../context/UsersContext";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import JSConfetti from "js-confetti";
import { useNavigate } from "react-router";
import goodNight from "../assets/sounds/good-night.mp3";

const jsConfetti = new JSConfetti();

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow-y: hidden;
  height: 100%;
  scrollbar-width: none;
  img {
    width: 300px;
  }
`;

export const Winner = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const navigate = useNavigate();

  const winner = usersState.users.reduce((prev, current) => {
    return prev.score > current.score ? prev : current;
  });

  const handleResetGame = () => {
    dispatch({
      type: "RESET_GAME",
    });
    navigate("/");
  };

  useEffect(() => {
    jsConfetti.addConfetti();
    new Audio(goodNight).play();
    return () => {
      jsConfetti.clearCanvas();
    };
  }, []);

  return (
    <WinnerContainer>
      <h1>¡Fin del juego!</h1>
      <img src={winner.avatar} alt={winner.name} />
      <h3>¡{winner.name} ha ganado!</h3>
      <h3>{winner.score} puntos</h3>
      <button onClick={handleResetGame}>Otra partida</button>
    </WinnerContainer>
  );
};
