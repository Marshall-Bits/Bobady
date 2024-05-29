import { createContext } from "react";
import { IQuizElement } from "../interfaces/interfaces";

export type DataContextProps = {
  questions: IQuizElement[];
  challenges: IQuizElement[];
  setCategory: (category: string) => void;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
