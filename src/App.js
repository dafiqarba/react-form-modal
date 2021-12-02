import "./App.css";

import { useState } from "react";
import FormProfile from "./components/FormProfile/FormProfile";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [userData, setUserData] = useState("");
  const [modalState, setModalState] = useState(false);

  // Gather data from Form component and set modalState to true
  const onSubmitDataHandler = (userDataForm) => {
    setUserData(userDataForm);
    setModalState(true);
    console.log(userData);
  }

  
  return (
    <div className="App">
      <FormProfile onSubmitData={onSubmitDataHandler}/>
      <ModalWindow userData = {userData} modalState={modalState}/>
    </div>
  );
}

export default App;
