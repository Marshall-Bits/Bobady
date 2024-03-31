import styled from "styled-components";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";

const InstructionsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6rem;
  gap: 0.3rem;
  text-align: left;
  height: 100%;
  padding-top: 10vh;
  overflow-y: scroll !important;

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
  return (
    <InstructionsPageContainer>
      <Logo />
      <h1>Instrucciones</h1>
      <p>
        Bobady es un juego de preguntas y retos para jugar con un mínimo de 3
        personas.
      </p>
      <p>
        El juego elijirá a alguien al azar y te preguntará si quieres un reto o
        una pregunta.
      </p>
      <h3>Preguntas</h3>
      <p>
        Si eliges pregunta, tendrás 10 segundos para responder Sí o No. ¡Ojito!
        cuanto más rápido respondas, más puntos ganarás.
      </p>
      <h3>Retos</h3>
      <p>
        Un reto da más puntos, tendrás que completarlo pero... Otra persona
        elegida al azar juzgará si el reto ha sido superado o no.
      </p>
      <p>
        Si no quieres hacer el reto debes decir el alto: ¡NOBADY! y pulsar el
        botón rojo. ¡Pero cuidado! pulsando el botón pierdes puntos.
      </p>
      <p>
        Si un reto implica a otra persona, ella también podrá gritar NOBADY y
        pulsar el botón rojo.
      </p>
      <Link to="/">
        <button>Comenzar!</button>
      </Link>
    </InstructionsPageContainer>
  );
};
