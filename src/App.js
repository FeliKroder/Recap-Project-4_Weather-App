import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(acitvityObject) {
    setActivities([{ uid, ...acitvityObject }, ...activities]);
  }

  return (
    <>
      <Form />
    </>
  );
}

export default App;
