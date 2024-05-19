import { createContext } from "react";

export type DataContextProps = {
  questions: any[];
  challenges: any[];
  getData: (category: string) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const DataContext = createContext<DataContextProps>(
  {} as DataContextProps
);
