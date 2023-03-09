import { createContext } from 'react';
import { IUsersState } from '../interfaces/interfaces';


export type UsersContextProps = {
    usersState: IUsersState,
    dispatch: any
}

export const UsersContext = createContext<UsersContextProps>({} as UsersContextProps);