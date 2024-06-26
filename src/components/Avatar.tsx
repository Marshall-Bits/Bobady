import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { UsersContext } from '../context/UsersContext';
import { IAvatarProps } from '../interfaces/interfaces';
import { Spinner } from './Spinner';

const AvatarContainer = styled.div`
    position: relative;    
    width: 2rem;
    height: 2.5rem;
    .avatar {
        width: 100%;
        cursor: pointer;
    }
    
    .hide {
        display: none;
    }
    
    .reload {
        position: absolute;
        width: .6rem;
        bottom: 0;
        right: 0;
        background-color: #ffffff;
        padding: .1rem;
        border-radius: 50%;
    }
`

export const Avatar = ({ user }: IAvatarProps) => {
    const { dispatch } = useContext(UsersContext);
    const [avatarLoading, setAvatarLoading] = useState<boolean>(true);

    const handleAvatarLoad = () => {
        setAvatarLoading(false);
    };

    useEffect(() => {
        if (!user.avatar){
            setAvatarLoading(true);
        }
    }, [user]);


    return (
        <AvatarContainer>
            {avatarLoading && <Spinner />}
            <img
                className={avatarLoading ? 'hide' : 'avatar'}
                onClick={() => {
                    dispatch({
                        type: 'UPDATE_USER_AVATAR_URL',
                        payload: user.id
                    })
                    setAvatarLoading(true);
                }}
                src={user.avatar}
                alt="user avatar"
                onLoad={() => handleAvatarLoad()}
            />
            <img className='reload' src="/reload.svg" alt="reload" />
        </ AvatarContainer>
    )
}