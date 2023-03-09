import { IUsersState } from "../interfaces/interfaces";
import { UsersContext } from "./UsersContext"
import { useReducer } from "react";
import { usersReducer } from "./usersReducer";

interface UsersProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: IUsersState = {
    users: [
        {
            id: "1",
            name: 'Juan',
            score: 0,
            avatar: '',
            turns: 0,
        },
        {
            id: "2",
            name: 'Pedro',
            score: 0,
            avatar: '',
            turns: 0,
        },
        {
            id: "3",
            name: 'Pablo',
            score: 0,
            avatar: '',
            turns: 0,
        },
    ],
};

export const UsersProvider = ({ children }: UsersProviderProps) => {
    const [state, dispatch] = useReducer(usersReducer, INITIAL_STATE);
    return (
        <UsersContext.Provider value={{ usersState: state, dispatch }}>
            {children}
        </UsersContext.Provider>
    )
}