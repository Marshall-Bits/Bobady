import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import { DataContext } from "../context/DataContext";
import styled from "styled-components";
import { Count } from "../components/Count";
import yesSound from "../assets/sounds/yeah.mp3";
import noSound from "../assets/sounds/no.mp3";
import time from "../assets/sounds/time.mp3";
import crowdAw from "../assets/sounds/crowd-aw.mp3";
import { ObjectId } from "../interfaces/interfaces";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Question = () => {
  const { questions } = useContext(DataContext);
  const navigate = useNavigate();
  const { dispatch, usersState } = useContext(UsersContext);
  const { users, userTurnId } = usersState;
  const [count, setCount] = useState<number>(10);
  const user = users.find((user) => user.id === userTurnId);

  const usedQuestionIds = user?.questions;

  const availableQuestionIds = (questions ?? [])
    .filter((question) => !usedQuestionIds?.includes(question._id))
    .map((question) => question._id);

  const randomQuestionId = useRef<ObjectId>(
    availableQuestionIds[
      Math.floor(Math.random() * availableQuestionIds.length)
    ]
  );

  const filteredUsers = users.filter(
    (user) => user.id !== usersState.userTurnId
  );

  const randomUserId = useRef<number>(
    Math.floor(Math.random() * filteredUsers.length)
  );

  const randomUser = filteredUsers[randomUserId.current];

  const selectedQuestion = questions.find(
    (question) => question._id === randomQuestionId.current
  );

  const formattedQuestion = selectedQuestion?.question?.replace(
    "[user]",
    randomUser.name
  );

  useEffect(() => {
    if (count >= 0) {
      dispatch({
        type: "UPDATE_POINTS_TO_ADD",
        payload: count * 10,
      });
    }

    if (count === 0) handleAnswer("timeup");
    else new Audio(time).play();

    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  const handleAnswer = (answer: "yes" | "no" | "timeup") => {
    user?.questions.push(randomQuestionId.current);

    if (answer === "yes") {
      new Audio(yesSound).play();
      dispatch({
        type: "ADD_POINTS",
        payload: count * 10,
      });
    } else if (answer === "no") {
      new Audio(noSound).play();
    } else if (answer === "timeup") {
      new Audio(crowdAw).play();
    }

    navigate("/adding-points");
  };

  return (
    <QuestionContainer>
      <p className="question">{formattedQuestion}</p>
      <Count count={count} />
      <button onClick={() => handleAnswer("yes")}>
        {selectedQuestion?.neverEver ? "Me ha pasado" : "Sí"}
      </button>
      <button onClick={() => handleAnswer("no")}>
        {selectedQuestion?.neverEver ? "Nunca" : "No"}
      </button>
    </QuestionContainer>
  );
};
