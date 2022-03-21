import { useState } from "react";

const Formulaire = ({ onCLientAdd }) => {
  const [newTask, setNewTask] = useState("");
  const regex = /[a-zA-Z0-9_&é"'(è_çà)=]/;
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (regex.test(newTask)) {
      const id = new Date().getTime();
      const name = newTask;
      const checked = false;
      onCLientAdd({ id, name, checked });
      

      setNewTask("");
    }
    e.preventDefault();
  };

  

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="task">Choses à faire:</label> */}
      <input
        value={newTask}
        onChange={handleChange}
        type="text"
        maxLength="54"
        name="task"
        id="task"
        placeholder="entrer votre tâche"
        autoFocus
        required
      />
      <button id="addTodo">Ajouter</button>
    </form>
  );
};

export default Formulaire;
