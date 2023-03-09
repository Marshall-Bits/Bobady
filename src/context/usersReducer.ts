import { IUser, IUsersState } from "../interfaces/interfaces";

export type IUsersAction =
    | { type: "ADD_USER", payload: IUser }
    | { type: "REMOVE_USER", payload: string }
    | { type: "UPDATE_USER_POINTS", payload: { userId: string, points: number } }
    | { type: "UPDATE_TURN_ID", payload: string }
    | { type: "UPDATE_POINTS_TO_ADD", payload: number };

export const usersReducer = (state: IUsersState, action: IUsersAction) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case "UPDATE_USER_POINTS":
            return {
                ...state,
                //update user points
                users: state.users.map(user => {
                    if (user.id === action.payload.userId) {
                        return {
                            ...user,
                            score: user.score + action.payload.points
                        };
                    }
                    return user;
                })
            };
        case "UPDATE_TURN_ID":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {
                            ...user,
                            turns: user.turns + 1
                        };
                    }
                    return user;
                }),
                userTurnId: action.payload
            };
        case "UPDATE_POINTS_TO_ADD":
            return {
                ...state,
                pointsToAdd: action.payload
            };
        default:
            return state;
    }
}