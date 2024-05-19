import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Spinner } from "../components/Spinner";

export const ModePage = () => {
  const { getData, loading } = useContext(DataContext);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    setShowLoading(true);
    getData(category);
  };

  useEffect(() => {
    if (!loading) {
      navigate("/intro");
    }
  }, [loading]);

  return (
    <>
      <h1>Elije el modo de juego</h1>

      <button onClick={() => handleClick("regular")}>Regular</button>

      <button onClick={() => handleClick("spicy")}>Picante</button>

      {showLoading && loading && <Spinner/>}
    </>
  );
};
