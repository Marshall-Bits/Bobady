import { createContext } from "react";
import { IQuizElement } from "../interfaces/interfaces";

export type DataContextProps = {
  questions: IQuizElement[];
  challenges: IQuizElement[];
  // setCategory: (category: string) => void;
  getData: (category: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
