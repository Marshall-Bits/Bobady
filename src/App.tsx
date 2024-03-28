import Home from "./pages/Home";
import "./App.css";
import { UsersProvider } from "./context/UsersProvider";
import { Intro } from "./pages/Intro";
import { TrickOrTreat } from "./pages/TrickOrTreat";
import { Question } from "./pages/Question";
import { Routes, Route } from "react-router-dom";
import { Challenge } from "./pages/Challenge";
import { Confirmation } from "./pages/Confirmation";
import { AddingPoints } from "./pages/AddingPoints";
import { Header } from "./components/Header";
import { ResetButton } from "./components/ResetButton";
import { ConfirmExit } from "./components/ConfirmExit";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/trick-or-treat" element={<TrickOrTreat />} />
          <Route path="/question" element={<Question />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/adding-points" element={<AddingPoints />} />
        </Routes>
        <ResetButton />
      </UsersProvider>
    </div>
  );
}

export default App;
