import { useState } from "react";

const EditTask = ({ editValue, onCancel, onSave, onSaveByKey}) => {
  const [editTask, setEditTask] = useState(editValue);
  const handleChange = (e) => {
    e.stopPropagation();
    setEditTask(e.currentTarget.value);
  };

  return (
    <li>
      <input
        type="text"
        maxLength="56"
        value={editTask}
        onChange={handleChange}
        onKeyPress={(e) => onSaveByKey(e, editTask)}
        autoFocus
        required
      />
      <div className="actions">
        <button id="save" onClick={(e) => onSave(e, editTask)}>
          Valider
        </button>
        <button id="cancel" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </li>
  );
};

export default EditTask;