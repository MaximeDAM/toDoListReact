import { useState } from "react";

const EditTask = ({editValue, onCancel, onSave}) => {
  const [editTask, setEditTask] = useState(editValue);
  const handleChange = (e) => {
    setEditTask(e.currentTarget.value);
  };
  
  return (
    <li>
      <input
        type="text"
        value={editTask}
        onChange={handleChange}
        autoFocus
        required
      />
      <button id="save" onClick={(e) => onSave(e, editTask)}>
        Valider
      </button>
      <button id="cancel" onClick={onCancel}>
        Annuler
      </button>
    </li>
  );
};

export default EditTask;