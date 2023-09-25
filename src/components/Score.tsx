import styled from "styled-components";
import { IUser } from "../interfaces/interfaces";
import { useEffect, useState } from "react";

const ScoreContainer = styled.div`
   .score {
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;
        font-size: .5rem;
        font-weight: bold;
        margin: 0;
        background-color: #67007c86;
        border-radius: 3px;
        transition: all .3s ease-in-out;
    }

    .score.animate {
        font-size: 1rem;
        transform: scale(1);
    }
`

export const Score = ({ score }: { score: IUser['score'] }) => {
    const [scoreAnimation, setScoreAnimation] = useState<boolean>(false);

    useEffect(() => {
        setScoreAnimation(true);
        setTimeout(() => {
            setScoreAnimation(false);
        }, 1000);
    }, [score]);

    return (
        <ScoreContainer >
            <p className={`score ${scoreAnimation ? 'animate' : ''}`}
                onAnimationEnd={() => setScoreAnimation(false)}>
                {score}
            </p>
        </ScoreContainer>
    );
}