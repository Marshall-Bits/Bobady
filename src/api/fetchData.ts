
const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (
  list: "questions" | "challenges",
  category: "regular" | "spicy"
) => {
  const data = await fetch(`${API_URL}/${list}?category=${category}`);
  const jsonData = await data.json();
  return jsonData;
};

export default fetchData;