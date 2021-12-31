import React from "react";
import "./App.css";
import AddTodoCm from "./app/AddTodoCm";
import Poste from "./app/Poste/Poste";

const Acceuil = () => {
  return (
    <div>
      <AddTodoCm />
      <Poste />
    </div>
  );
};

export default Acceuil;
