import { DataContext } from "./DataContext";
import { useState } from "react";
import useFetchData from "../api/useFetchData";

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [category, setCategory] = useState("regular");

  let questions: any[] = [];
  let challenges: any[] = [];

  if (category === "regular" || category === "spicy") {
    questions = useFetchData("questions", category);
    challenges = useFetchData("challenges", category);
  }

  return (
    <DataContext.Provider value={{ questions, challenges, setCategory }}>
      {children}
    </DataContext.Provider>
  );
};
