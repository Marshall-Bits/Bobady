import { IUser, IUsersState } from "../interfaces/interfaces";

export type IUsersAction =
  | { type: "ADD_USER"; payload: IUser }
  | { type: "REMOVE_USER"; payload: number }
  | { type: "UPDATE_USER_POINTS"; payload: { userId: number; points: number } }
  | { type: "UPDATE_TURN_ID"; payload: number }
  | { type: "UPDATE_POINTS_TO_ADD"; payload: number }
  | { type: "UPDATE_USER_AVATAR_URL"; payload: number }
  | { type: "RESET_GAME" };

export const usersReducer = (state: IUsersState, action: IUsersAction) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "UPDATE_USER_POINTS":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              score: user.score + action.payload.points,
            };
          }
          return user;
        }),
      };
    case "UPDATE_TURN_ID":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return {
              ...user,
              turns: user.turns + 1,
            };
          }
          return user;
        }),
        userTurnId: action.payload,
      };
    case "UPDATE_POINTS_TO_ADD":
      return {
        ...state,
        pointsToAdd: action.payload,
      };
    case "UPDATE_USER_AVATAR_URL":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            const randomAvatar = Math.floor(Math.random() * 40);
            return {
              ...user,
              avatar: `https://garticphone.com/images/avatar/${randomAvatar}.svg`,
            };
          }
          return user;
        }),
      };
    case "RESET_GAME":
      return {
        ...state,
        users: state.users.map((user) => {
          return {
            ...user,
            score: 0,
            turns: 0,
            questions: [],
            challenges: [],
          };
        }),
        userTurnId: 0,
        pointsToAdd: 0,
      };
    default:
      return state;
  }
};
