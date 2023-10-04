export interface IUser {
    name: string;
    id: number;
    score: number;
    avatar: string;
    turns: number;
    callenges: number[];
    questions: number[];
}

export interface IUsersState {
    users: IUser[];
    userTurnId?: number;
    pointsToAdd?: number;
}

export interface IAvatarProps {
    user: IUser;
}