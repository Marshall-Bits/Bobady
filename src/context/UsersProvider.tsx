import { IUsersState } from "../interfaces/interfaces";
import { UsersContext } from "./UsersContext";
import { useEffect, useReducer } from "react";
import { usersReducer } from "./usersReducer";

interface UsersProviderProps {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: IUsersState = {
  users: [
    // Uncomment this block to have some initial users
    /*  {
            id: 1,
            name: 'Juan',
            score: 0,
            avatar: 'https://garticphone.com/images/avatar/1.svg',
            turns: 0,
            challenges: [],
            questions: [],
        },
        {
            id: 2,
            name: 'Pedro',
            score: 0,
            avatar: 'https://garticphone.com/images/avatar/2.svg',
            turns: 0,
            challenges: [],
            questions: [],
        },
        {
            id: 3,
            name: 'Pablo',
            score: 0,
            avatar: 'https://garticphone.com/images/avatar/3.svg',
            turns: 0,
            challenges: [],
            questions: [],
        }, */
  ],
};

const getInitialState = () => {
  const savedState = localStorage.getItem("usersState");
  return savedState ? JSON.parse(savedState) : INITIAL_STATE;
};

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [state, dispatch] = useReducer(
    usersReducer,
    undefined, // undefined if we need a callback function to be the initializer
    getInitialState
  );

  useEffect(() => {
    localStorage.setItem("usersState", JSON.stringify(state));
  }, [state]);

  return (
    <UsersContext.Provider value={{ usersState: state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
