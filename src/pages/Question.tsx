import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import questions from '../data/questions.json';
import styled from 'styled-components';
import { Count } from '../components/Count';

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    text-align: center;

   
`

export const Question = () => {
    const navigate = useNavigate();
    const { dispatch, usersState } = useContext(UsersContext);
    const { users, userTurnId } = usersState;
    const user = users.find(user => user.id === userTurnId);

    const [count, setCount] = useState<number>(10);

    
    
    const usedQuestionIds = user?.questions;
    const availableQuestionIds = questions.filter((question) => !usedQuestionIds?.includes(question.id)).map((question) => question.id);
    const randomQuestionId = useRef<number>(availableQuestionIds[Math.floor(Math.random() * availableQuestionIds.length)]);
    
    const filteredUsers = users.filter(user => user.id !== usersState.userTurnId);
    const randomUserId = useRef<number>(Math.floor(Math.random() * filteredUsers.length));
    const randomUser = filteredUsers[randomUserId.current];
    
    const formatedQuestion = questions[randomQuestionId.current].question.replace('[user]', randomUser.name);

    useEffect(() => {
        if (count >= 0) {
            dispatch({
                type: 'UPDATE_POINTS_TO_ADD',
                payload: count * 10,
            });
        }

        if (count === 0) handleAnswer();

        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [count]);

    const handleAnswer = () => {
        user?.questions.push(questions[randomQuestionId.current].id);
        navigate('/adding-points')
    }

    return (
        <QuestionContainer>
            <p className='question'>{formatedQuestion}</p>
            <Count count={count}/>
            <button onClick={() => handleAnswer()} >
                Sí</button>
            <br />
            <button onClick={() => handleAnswer()} >
                No</button>
        </QuestionContainer>
    );
};