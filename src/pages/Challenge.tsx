import { useRef } from "react";
import { useNavigate } from "react-router";
import challenges from '../data/challenges.json';

export const Challenge = () => {
    const randomChallengeId = useRef<number>(Math.floor(Math.random() * challenges.length));

    const navigate = useNavigate();
    return (
        <>
            <h1>{challenges[randomChallengeId.current].challenge}</h1>
            <button onClick={()=>navigate('/confirmation')}>Terminado</button>
        </>
    );
};