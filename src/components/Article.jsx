import "../styles/layouts/Article.scss";
import Formulaire from "./Formulaire";
import Task from "./Task";
import { useState, useEffect } from "react";

const Article = () => {
  const [tasks, setTasks] = useState([]);

  const handleCheckBox = (details) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === details.id);

    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  };

  const handleDelete = (e, details) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === details.id);

    updatedTasks.splice(index, 1);

    setTasks(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  };
  const handleValid = (e, details, name) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === details.id);

    updatedTasks[index].name = name;
    setTasks(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  };

  const handleAdd = (task) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(task);

    setTasks(updatedTasks);
    localStorage.setItem("todos", JSON.stringify(updatedTasks));
  };
useEffect(() => {
  if (JSON.parse(localStorage.getItem("todos"))) {
    setTasks(JSON.parse(localStorage.getItem("todos")));
  }
}, [])
  return (
    <article className="article">
      <Formulaire onCLientAdd={handleAdd} />
      <ul className="taskList">
        {tasks.map((item) => (
          <Task
            key={item.id}
            details={item}
            boxControl={item.checked}
            onDelete={handleDelete}
            onValid={handleValid}
            onCheck={handleCheckBox}
          />
        ))}
      </ul>
    </article>
  );
};

export default Article;
