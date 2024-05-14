import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const useFetchData = (
  list: "questions" | "challenges",
  category: "regular" | "spicy"
) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/${list}?category=${category}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [list]);

  return data;
};

export default useFetchData;
