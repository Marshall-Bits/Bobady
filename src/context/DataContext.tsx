import { createContext } from "react";

export type DataContextProps = {
  questions: any[];
  challenges: any[];
  setCategory: (category: string) => void;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
