import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { UsersContext } from "../context/UsersContext";
import { IUser } from "../interfaces/interfaces";
import { Score } from "./Score";

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
    scrollbar-width: none;
    -ms-overflow-style: none; 

    img {
        width: 1.2rem;
        box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.7);  
        border-radius: 50%;
    }
 

    .user-container {
        position: relative;
    }
`

export const Header = () => {
    const { usersState } = useContext(UsersContext);
    const { users } = usersState;
    const [usersByScore, setUsersByScore] = useState<IUser[]>(users);


    useEffect(() => {
        const sortedUsers = users.sort((a, b) => b.score - a.score);
        setUsersByScore(sortedUsers);
    }, [users]);

    return (
        <HeaderContainer>
            {usersByScore.map((user, index) => (
                <div className="user-container" key={index}>
                    <img src={user.avatar} />
                    <Score score={user.score} />
                </div>
            ))}
        </HeaderContainer>
    );
};