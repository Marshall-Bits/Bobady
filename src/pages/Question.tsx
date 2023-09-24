import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import questions from '../data/questions.json';

export const Question = () => {
    const { dispatch, usersState } = useContext(UsersContext);
    const { users } = usersState;

    const navigate = useNavigate();

    const [count, setCount] = useState<number>(3);
    
    const filteredUsers = users.filter(user => user.id !== usersState.userTurnId);
    const randomQuestionId = useRef<number>(Math.floor(Math.random() * questions.length));
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

        if (count === 0) navigate('/adding-points');

        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [count]);



    return (
        <>
            <h1>{formatedQuestion}</h1>
            <h2>{count}</h2>
            <button onClick={() => navigate('/adding-points')} >
                Sí</button>
            <br />
            <button onClick={() => navigate('/adding-points')} >
                No</button>
        </>
    );
};