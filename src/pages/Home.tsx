import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInput } from "../components/UserInput";
import { UsersList } from "../components/UsersList";
import { UsersContext } from "../context/UsersContext";
import { ModalInfo } from "../components/ModalInfo";

const Home = () => {
  const { usersState } = useContext(UsersContext);
  const { users } = usersState;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <UserInput />
      <UsersList />
      {showModal && (
        <ModalInfo
          title="¡Ojito!"
          message="Debe haber al menos 3 participantes"
          confirmFunction={() => setShowModal(false)}
        />
      )}
      <button
        onClick={() => {
          if (users.length <= 2) {
            setShowModal(true);
          } else {
            navigate("/intro");
          }
        }}
        className={users.length <= 2 ? "disabled" : ""}
      >
        COMENZAR
      </button>
    </>
  );
};

export default Home;
