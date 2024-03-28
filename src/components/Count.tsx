import styled from "styled-components";

const CountH2 = styled.h2`
    font-size: 2rem;
    color: #f1f1f1;
    text-align: center;
    animation: bigToSmall 1s ease-in-out infinite;
    filter: 
        drop-shadow( 1px  0px 0px black) 
        drop-shadow(-1px  0px 0px black)
        drop-shadow( 0px  1px 0px black) 
        drop-shadow( 0px -1px 0px black)
    ;

    @keyframes bigToSmall {
        0% {
            opacity: 0;
            transform: scale(2);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
`

const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    );
    margin: 0 auto;
`;

export const Count = ({ count }: { count: number }) => {

    return (
        <CountContainer>
            <CountH2>{count}</CountH2>
        </CountContainer>
    );
}