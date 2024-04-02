import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router";
import { IUser } from "../interfaces/interfaces";
import styled from "styled-components";
import hit from "../assets/sounds/hit.mp3";

const ImageAvatar = styled.img`
  width: 5rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  animation: appear 0.3s ease-in-out;
  @keyframes appear {
    0% {
      transform: scale(0.5) rotate(10deg);
    }
    80% {
      transform: scale(1.5) rotate(-10deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

export const TrickOrTreat = () => {
  const [randomUser, setRandomUser] = useState<IUser>();
  const { usersState, dispatch } = useContext(UsersContext);
  const navigate = useNavigate();
  const { users } = usersState;

  const checkForWinner = () => {
    const allUsersReachedMaxTurns = users.every((user) => user.turns >= 10);
    const allUsersHaveDifferentScores =
      new Set(users.map((user) => user.score)).size === users.length;
    if (allUsersReachedMaxTurns && allUsersHaveDifferentScores) {
      navigate("/winner");
    }
  };

  useEffect(() => {
    users && checkForWinner();
  }, [users]);

  useEffect(() => {
    new Audio(hit).play();
    // exclude users with higher turns
    const usersWithLessTurns = users.filter(
      (user) => user.turns === Math.min(...users.map((user) => user.turns))
    );

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
        type: "UPDATE_TURN_ID",
        payload: updatedUser.id,
      });
    }
  }, [randomUser, dispatch]);

  return (
    <>
      {randomUser ? (
        <Container>
          <ImageAvatar src={randomUser.avatar} alt="user avatar" />
          <Title>¡Tu turno {randomUser.name}!</Title>
          <button onClick={() => navigate("/question")}>Pregunta</button>
          <p>o</p>
          <button onClick={() => navigate("/challenge")}>Reto</button>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
