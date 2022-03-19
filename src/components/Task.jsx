import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ details, onDelete, onValid }) => {
  const [isEdit, setIsEdit] = useState(true);
  
  const handleCancel = () => {
    setIsEdit(true);
  };
  const handleSave = (e, name) => {
    onValid(e, details, name)
    setIsEdit(true);
  };
  return isEdit ? (
    <li>
      <input type="checkbox" />
      <input readOnly value={details.name} />
      <button id="edit" onClick={() => setIsEdit(false)}>
        Editer
      </button>
      <button id="supr" onClick={(e) => onDelete(e, details)}>
        Supprimer
      </button>
    </li>
  ) : (
    <EditTask
      editValue={details.name}
      onCancel={handleCancel}
      onSave={handleSave}
    />
  );
};

export default Task;
