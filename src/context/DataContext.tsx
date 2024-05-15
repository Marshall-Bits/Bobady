import { createContext } from "react";
import { IChallengeOrQuestion } from "../interfaces/interfaces";

export type DataContextProps = {
  questions: IChallengeOrQuestion[];
  challenges: any[];
  setCategory: (category: string) => void;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
