import React from "react";
import AddTodoIcon from "../svg/addTodo/AddTodoIcon";
import Arrow from "../svg/arrow/Arrow";
import ChecklsitIcon from "../svg/checklist/ChecklistIcon";
import "./AddTodoCm.css";

const AddTodoCm = () => {
  return (
    <div className="AddTodoCm">
      <div className="titreContainer">
        <input type="text" placeholder="Titre" className="Titre" />
      </div>
      <div className="descriptionContainer">
        <input type="text" placeholder="Description" className="Description" />
      </div>

      <div className="buttons_container">
        <button className="addButton">
          <AddTodoIcon className="addIcon" />
          <span className="text_ajouter"> Ajouter</span>
        </button>
        <select name="select" className="options">
          <ChecklsitIcon />
          Priorité
          <option value="value1">urgent</option>
          <option value="value2">medium</option>
          <option value="value3">important</option>
          <option value="value3">low</option>
        </select>
      </div>
    </div>
  );
};

export default AddTodoCm;
