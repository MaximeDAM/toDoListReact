import { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ details, boxControl, onCheck, onDelete, onValid }) => {
  const [isEdit, setIsEdit] = useState(true);

  const handleCancel = (e) => {
    setIsEdit(true);
  };
  const handleSave = (e, name) => {
    onValid(e, details, name);
    setIsEdit(true);
  };

  const handleSaveByKey = (e, name) => {
    if (e.key === "Enter") {
      onValid(e, details, name);
      setIsEdit(true);
    }
  };

  const handleChangeCheck = (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "LI") {
      const box = e.currentTarget.querySelector(".checkTask");
      box.checked ? (box.checked = false) : (box.checked = true);
      onCheck(details);
    }
  };
  const handleChangeCheckBox = (e) => {
    const box = e.currentTarget;
    box.checked ? (box.checked = false) : (box.checked = true);
  };

  return isEdit ? (
    <li onClick={handleChangeCheck}>
      <input
        className="checkTask"
        type="checkbox"
        defaultChecked={boxControl}
        onClick={handleChangeCheckBox}
      />
      <input readOnly value={details.name} />
      <div className="actions">
        <button id="edit" onClick={() => setIsEdit(false)}>
          Editer
        </button>
        <button id="supr" onClick={(e) => onDelete(e, details)}>
          Supprimer
        </button>
      </div>
    </li>
  ) : (
    <EditTask
      editValue={details.name}
      onCancel={handleCancel}
      onSave={handleSave}
      onSaveByKey={handleSaveByKey}
    />
  );
};

export default Task;
