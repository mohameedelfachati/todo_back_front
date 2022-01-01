import axios from "axios";
import React, { useState } from "react";
import AddTodoIcon from "../svg/addTodo/AddTodoIcon";

import ChecklsitIcon from "../svg/checklist/ChecklistIcon";
import "./AddTodoCm.css";

const AddTodoCm = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [priority, setpriority] = useState("");

  const addPoste = () => {
    axios
      .post("http://localhost:3000/post", {
        title: title,
        details: details,
        priority: priority,
        status: "inProgress",
      })
      .then((res) => console.log("succes", title))
      .catch((error) => console.log(error));
  };
  return (
    <div className="AddTodoCm">
      <div className="titreContainer">
        <input
          type="text"
          placeholder="Titre"
          className="Titre"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
      </div>
      <div className="descriptionContainer">
        <input
          type="text"
          placeholder="Description"
          className="Description"
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
      </div>

      <div className="buttons_container">
        <button className="addButton" onClick={addPoste}>
          <AddTodoIcon className="addIcon" />
          <span className="text_ajouter"> Ajouter</span>
        </button>
        <select
          name="select"
          className="options"
          onChange={(e) => setpriority(e.target.value)}
        >
          <ChecklsitIcon />
          Priorité
          <option value="urgent">urgent</option>
          <option value="medium">medium</option>
          <option value="important">important</option>
          <option value="low">low</option>
        </select>
      </div>
    </div>
  );
};

export default AddTodoCm;
