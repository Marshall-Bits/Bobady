import styled from "styled-components";
import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";

const InstructionsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6rem;
  gap: 0.3rem;
  text-align: left;
  height: 100vh;
  padding: calc(70px + 2rem) 0;
  overflow-y: scroll;
  scrollbar-width: none;
  h1,
  h3 {
    font-size: 1.5rem;
    text-align: left;
    width: 100%;
    color: rgb(255, 255, 115);
  }

  h3 {
    font-size: 1rem;
  }
`;

export const InstructionsPage = () => {
  const navigate = useNavigate();


  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <InstructionsPageContainer>
      <Logo />
      <h1>Instrucciones</h1>
      <p>
        Bobady es un juego de preguntas y retos para jugar con un mínimo de 3
        personas.
      </p>
      <p>
        El juego elegirá a alguien al azar y te preguntará si quieres un reto o
        una pregunta.
      </p>
      <h3>Preguntas</h3>
      <p>
        Si eliges pregunta, tendrás 10 segundos para responder. ¡Ojito!
        cuanto más rápido respondas, más puntos ganarás.
      </p>
      <p>
        Debes leer la pregunta en voz alta para que todo el mundo la escuche.
      </p>
      <h3>Retos</h3>
      <p>
        ¡Un reto da 300 puntos! pero... Otra persona elegida al azar juzgará si
        el reto ha sido superado o no. 😏
      </p>
      <p>
        Si no quieres hacer el reto debes decir el alto: ¡NOBADY! y pulsar el
        botón rojo. Pulsar NOBADY tiene una penalización de 100 puntos. 😈
      </p>
      <p>
        Si un reto implica a otra persona, ella tiene que expresar su consentimiento. En caso contrario también puede pulsar el botón rojo.
      </p>
      <p>
        Si el reto es superado, el juez deberá decir: ¡BOBADY! y lo celebraremos
        con efusividad. 🎉
      </p>

      <button onClick={handleGoBack}>Vale</button>
    </InstructionsPageContainer>
  );
};
