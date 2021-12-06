import "./App.css";

import { useState } from "react";
import FormProfile from "./components/FormProfile/FormProfile";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [userData, setUserData] = useState("");
  const [modalState, setModalState] = useState(false);

  // Gather data from Form component and set modalState to true
  const submitDataHandler = (userDataForm) => {
    setUserData(userDataForm);
    setModalState(true);
  };
  const closeHandler = () => {
    setModalState(false);
  };
  return (
    <div className="App">
      <FormProfile onSubmitData={submitDataHandler} />
      <ModalWindow userData={userData} modalState={modalState} onClose={closeHandler} />
    </div>
  );
}

export default App;
