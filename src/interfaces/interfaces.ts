export interface IAvatarProps {
  user: IUser;
}

export interface IHeaderProps {
  setShowMenu: (showMenu: boolean) => void;
}

export interface IMenuProps {
  setShowMenu: (showMenu: boolean) => void;
  setShowConfirm: (showConfirm: boolean) => void;
}

export interface IModalExitProps {
  rejectFunction: () => void;
  acceptFunction: () => void;
}

export interface IModalInfoProps {
  title?: string;
  message: string;
  confirmFunction: () => void;
}

export interface IResetButtonProps {
  setShowConfirm: (value: boolean) => void;
}

export interface IUser {
  name: string;
  id: number;
  score: number;
  avatar: string;
  turns: number;
  challenges: ObjectId[];
  questions: ObjectId[];
}

export interface IUsersState {
  users: IUser[];
  userTurnId?: number;
  pointsToAdd?: number;
}

export interface ObjectId {
  $oid: string;
}

interface Timestamp {
  $date: string;
}

export interface IQuizElement {
  _id: ObjectId;
  question?: string;
  neverEver?: boolean;
  challenge?: string;
  category: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  __v: number;
}
