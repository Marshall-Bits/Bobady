import { useRef, useContext } from "react";
import { useNavigate } from "react-router";
import challenges from "../data/challenges.json";
import { UsersContext } from "../context/UsersContext";
import styled from "styled-components";

const RegretButton = styled.button`
  background-color: red;
  border: 5px solid white;
  color: white;
  width: 6rem;
  height: 6rem;
  margin-top: 3rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 1px 5px 10px rgba(0, 0, 0, 0.459);
`;

export const Challenge = () => {
  const { usersState, dispatch } = useContext(UsersContext);
  const { users, userTurnId } = usersState;

  const addPoints = (points: number) => {
    dispatch({
      type: "UPDATE_POINTS_TO_ADD",
      payload: points,
    });
    navigate("/adding-points");
  };

  const randomChallengeId = useRef<number>(
    Math.floor(Math.random() * challenges.length)
  );

  const filteredUsers = users.filter((user) => user.id !== userTurnId);

  const randomUserId = useRef<number>(
    Math.floor(Math.random() * filteredUsers.length)
  );

  const randomUser = filteredUsers[randomUserId.current];

  const formatedQuestion = challenges[
    randomChallengeId.current
  ].challenge.replace("[user]", randomUser.name);

  const navigate = useNavigate();
  return (
    <>
      <p className="question">{formatedQuestion}</p>
      <button onClick={() => navigate("/confirmation")}>Terminado</button>
      <RegretButton onClick={() => addPoints(-100)}>INSTANT REGRET!</RegretButton>
    </>
  );
};
