import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';
import questions from '../data/questions.json';

export const Question = () => {
    const { dispatch } = useContext(UsersContext);
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const randomQuestionId = useRef<number>(Math.floor(Math.random() * questions.length));

    useEffect(() => {
        if (count >= 0) {
            dispatch({
                type: 'UPDATE_POINTS_TO_ADD',
                payload: count * 10,
            });
        }

        if (count === -1) navigate('/adding-points');

        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        
        return () => clearInterval(interval);

    }, [count]);

    return (
        <>
            <h1>{questions[randomQuestionId.current].question}</h1>
            <h2>{count}</h2>
            <button onClick={() => navigate('/adding-points')} >
                Sí</button>
            <br />
            <button onClick={() => navigate('/adding-points')} >
                No</button>
        </>
    );
};