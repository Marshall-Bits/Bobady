import { DataContext } from "./DataContext";
import { useState } from "react";
import fetchData from "../api/fetchData";

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async (category: string) => {
    if (category === "regular" || category === "spicy") {
      const questions = await fetchData("questions", category);
      const challenges = await fetchData("challenges", category);

      setQuestions(questions);
      setChallenges(challenges);
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ questions, challenges, getData, loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};
