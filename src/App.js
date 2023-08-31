import "./App.css";
import Form from "./components/Form.jsx";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(acitvityObject) {
    setActivities([{ id: uid(5), ...acitvityObject }, ...activities]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}

export default App;
