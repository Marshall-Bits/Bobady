import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInput } from '../components/UserInput';
import { UsersList } from '../components/UsersList';
import { UsersContext } from '../context/UsersContext';

const Home: React.FC = () => {
    const { usersState } = useContext(UsersContext);
    const { users } = usersState;
    const navigate = useNavigate();

    return (
        <>
            <UserInput />
            <UsersList />
            <button onClick={
                () => {
                    if (users.length <= 2) {
                        alert('Debe haber al menos 3 participantes');
                    }
                    else {
                        navigate('/intro');
                    }
                }
            }>COMENZAR</button>
        </>

    );
}

export default Home;
