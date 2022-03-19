import "../styles/layouts/Article.scss";
import Formulaire from "./Formulaire";
import Task from "./Task";
import { useState } from "react";

const Article = () => {
  const [tasks, setTasks] = useState([]);
  const handleDelete = (e, details) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === details);

    updatedTasks.splice(index, 1);
   
    setTasks(updatedTasks);
  };
  const handleValid = (e, details, name) => {
    e.preventDefault();
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex((task) => task.id === details);
console.log(updatedTasks)
    updatedTasks[index] = {id: details, name: name}
    setTasks(updatedTasks);
  };

  const handleAdd = (task) => {
    const updatedTasks = [...tasks];
    updatedTasks.push(task);
   
    setTasks(updatedTasks);
  };

  return (
    <article className="article">
      <Formulaire onCLientAdd={handleAdd} />
      <ul className="taskList">
        {tasks.map((item) => (
          <Task
            key={item.id}
            details={item}
            onDelete={handleDelete}
            onValid= {handleValid}
            
          />
        ))}
      </ul>
    </article>
  );
};

export default Article;
