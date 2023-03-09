export interface IUser {
    name: string;
    id: string;
    score: number;
    avatar: string;
    turns: number;
}

export interface IUsersState {
    users: IUser[];
    userTurnId?: string;
    pointsToAdd?: number;
}
