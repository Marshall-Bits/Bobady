import Home from "./pages/Home";
import "./App.css";
import { Intro } from "./pages/Intro";
import { TrickOrTreat } from "./pages/TrickOrTreat";
import { Question } from "./pages/Question";
import { Routes, Route } from "react-router-dom";
import { Challenge } from "./pages/Challenge";
import { Confirmation } from "./pages/Confirmation";
import { AddingPoints } from "./pages/AddingPoints";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { InstructionsPage } from "./pages/InstructionsPage";
import { useState, useContext } from "react";
import { Winner } from "./pages/Winner";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "./context/UsersContext";
import { ModalExit } from "./components/ModalExit";
import { ModePage } from "./pages/ModePage";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const { dispatch } = useContext(UsersContext);
  const navigate = useNavigate();

  const resetGame = () => {
    dispatch({
      type: "RESET_GAME",
    });
    setShowConfirm(false);
    navigate("/");
  };

  const hideConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <div className="App">
      {showMenu ? (
        <Menu setShowConfirm={setShowConfirm} setShowMenu={setShowMenu} />
      ) : (
        <></>
      )}
      {showConfirm ? (
        <ModalExit acceptFunction={resetGame} rejectFunction={hideConfirm} />
      ) : (
        <></>
      )}
      <Header setShowMenu={setShowMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/trick-or-treat" element={<TrickOrTreat />} />
        <Route path="/question" element={<Question />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/adding-points" element={<AddingPoints />} />
        <Route path="/info" element={<InstructionsPage />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/mode" element={<ModePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
