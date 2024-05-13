import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const useFetchData = (list: "questions" | "challenges") => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/${list}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [list]);

  return data;
};

export default useFetchData;