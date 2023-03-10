import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Intro = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(3);

    useEffect(() => {
        if(count === 0) navigate('/trick-or-treat');
        const interval = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div >
            <h1>Comencemos!</h1>
            <h1>
                {count}
            </h1>
        </div>
    );
};