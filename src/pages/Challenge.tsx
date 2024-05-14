import { useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
// import challenges from "../data/challenges.json";
import { DataContext } from "../context/DataContext";
import { UsersContext } from "../context/UsersContext";
import styled from "styled-components";
import nobady from "../assets/sounds/nobady.mp3";
import challengeAccepted from "../assets/sounds/challenge-accepted.mp3";

const RegretButton = styled.button`
  background-color: red;
  border-radius: 50%;
  border: 5px solid rgba(0, 0, 0, 0.459);
  color: white;
  cursor: pointer;
  height: 6rem;
  margin-top: 2rem;
  min-width: 6rem;
  width: 6rem;
  position: relative;

  div {
    border-right: 5px solid rgba(255, 255, 255, 0.459);
    border-top: 3px solid rgba(255, 255, 255, 0.459);
    border-bottom: 2px solid rgba(255, 255, 255, 0.459);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
  }

  p {
    position: absolute;
    font-family: "Happy";
    font-weight: 100;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
`;

export const Challenge = () => {
  const { challenges } = useContext(DataContext);
  console.log("CHALLENGES: ", challenges);

  const { usersState, dispatch } = useContext(UsersContext);
  const { users, userTurnId } = usersState;
  const navigate = useNavigate();

  const user = users.find((user) => user.id === userTurnId);

  const usedChallengeIds = user?.challenges;

  console.log("USED CHALLENGE IDS: ", usedChallengeIds);

  const filteredUsers = users.filter((user) => user.id !== userTurnId);

  const availableChallengeIds = challenges
    .filter((challenge) => !usedChallengeIds?.includes(challenge._id))
    .map((challenge) => challenge._id);

  console.log("AVAILABLE CHALLENGE IDS: ", availableChallengeIds);

  const randomChallengeId = useRef<number>(
    availableChallengeIds[
      Math.floor(Math.random() * availableChallengeIds.length)
    ]
  );

  console.log("RANDOM CHALLENGE ID: ", randomChallengeId.current);

  const randomUserId = useRef<number>(
    Math.floor(Math.random() * filteredUsers.length)
  );

  const randomUser = filteredUsers[randomUserId.current];

  const selectedChallenge = challenges.find(
    (challenge) => challenge._id === randomChallengeId.current
  );

  const formatedChallenge = selectedChallenge.challenge.replace(
    "[user]",
    randomUser.name
  );

  const addPoints = (points: number) => {
    dispatch({
      type: "UPDATE_POINTS_TO_ADD",
      payload: points,
    });
    navigate("/adding-points");
  };

  useEffect(() => {
    new Audio(challengeAccepted).play();
  }, []);

  const handleAnswer = (state: "finished" | "regret") => {
    user?.challenges.push(randomChallengeId.current);
    if (state === "finished") {
      navigate("/confirmation");
    } else {
      new Audio(nobady).play();
      addPoints(-100);
    }
  };

  return (
    <>
      <p className="question">{formatedChallenge}</p>
      <button onClick={() => handleAnswer("finished")}>Terminado</button>
      <RegretButton onClick={() => handleAnswer("regret")}>
        <div></div>
        <p>¡NOBADY!</p>
      </RegretButton>
    </>
  );
};
