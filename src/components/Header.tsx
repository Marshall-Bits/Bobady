import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../context/UsersContext";

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(201, 29, 253, 0.322);
    width: 100%;
    padding: .4rem;
    padding-left: 1rem;
    display: flex;
    gap: .5rem;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.7);  
    overflow-x: scroll;

    img {
        width: 1.2rem;
        box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.7);  
        border-radius: 50%;
    }
    
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
    }

    .user-container {
        position: relative;
    }
`

export const Header = () => {
    const { usersState } = useContext(UsersContext);
    const { users } = usersState;
    const [usersByScore, setUsersByScore] = useState(users);

    useEffect(() => {
        const sortedUsers = users.sort((a, b) => b.score - a.score);
        setUsersByScore(sortedUsers);
    }, [users])

    return (
        <HeaderContainer>
            {
                usersByScore.map((user, index) => (
                    <div className="user-container">
                        <img src={user.avatar} key={index} />
                        <p className="score">{user.score}</p>
                    </div>
                ))
            }
        </HeaderContainer>
    )
}