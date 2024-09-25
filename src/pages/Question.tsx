import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";
import { DataContext } from "../context/DataContext";
import styled from "styled-components";
import fetchData from "../api/fetchData"; // Tu función existente para otras peticiones
import fetchAudio from "../api/tts"; // Importamos la nueva función de TTS
import { Count } from "../components/Count";
import yesSound from "../assets/sounds/yeah.mp3";
import noSound from "../assets/sounds/no.mp3";
import timeSound from "../assets/sounds/time.mp3";
import crowdAwSound from "../assets/sounds/crowd-aw.mp3";
import { ObjectId } from "../interfaces/interfaces";
import { b64toBlob } from "../utils/audioUtils"; // Importamos la función desde utils

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  text-align: center;
`;

export const Question: React.FC = () => {
  const { questions } = useContext(DataContext);
  const navigate = useNavigate();
  const { dispatch, usersState } = useContext(UsersContext);
  const { users, userTurnId } = usersState;
  const [count, setCount] = useState<number>(30);
  const [audioSrc, setAudioSrc] = useState<string | null>(null); // Estado para almacenar la URL del audio
  const [loadingAudio, setLoadingAudio] = useState<boolean>(false); // Estado para indicar carga de audio

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

  const formattedQuestion =
    selectedQuestion?.question?.replace("[user]", randomUser.name) ?? "";

  // Solicitar el audio al backend cuando se genera la pregunta
  useEffect(() => {
    const generateAudio = async () => {
      if (formattedQuestion) {
        setLoadingAudio(true);
        try {
          const audioContent = await fetchAudio(formattedQuestion);
          const audioBlob = b64toBlob(audioContent, "audio/mpeg");
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioSrc(audioUrl);
        } catch (error) {
          console.error("Error obtaining the audio: ", error);
        } finally {
          setLoadingAudio(false);
        }
      }
    };

    generateAudio();
  }, [formattedQuestion]);

  // Reproduce the audio when it's ready
  useEffect(() => {
    const playAudio = async () => {
      if (audioSrc) {
        try {
          const audio = new Audio(audioSrc);
          await audio.play();
        } catch (error) {
          console.error("Error al reproducir el audio:", error);
        } finally {
          // cleanup to avoid memory leaks
          URL.revokeObjectURL(audioSrc);
          setAudioSrc(null);
        }
      }
    };

    playAudio();
  }, [audioSrc]);

  // Contador
  useEffect(() => {
    if (count > 0) {
      dispatch({
        type: "UPDATE_POINTS_TO_ADD",
        payload: count * 10,
      });

      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      handleAnswer("timeup");
    }
  }, [count]);

  const handleAnswer = (answer: "yes" | "no" | "timeup") => {
    if (user) {
      user.questions.push(randomQuestionId.current);

      if (answer === "yes") {
        const yesAudio = new Audio(yesSound);
        yesAudio.play().catch((error) => {
          console.error("Error al reproducir el sonido 'yes':", error);
        });
        dispatch({
          type: "ADD_POINTS",
          payload: count * 10,
        });
      } else if (answer === "no") {
        const noAudio = new Audio(noSound);
        noAudio.play().catch((error) => {
          console.error("Error al reproducir el sonido 'no':", error);
        });
      } else if (answer === "timeup") {
        const crowdAudio = new Audio(crowdAwSound);
        crowdAudio.play().catch((error) => {
          console.error("Error al reproducir el sonido 'timeup':", error);
        });
      }

      navigate("/adding-points");
    }
  };

  return (
    <>
      {loadingAudio ? (
        <p>Cargando pregunta...</p>
      ) : (
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
      )}
    </>
  );
};
