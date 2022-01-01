import Poste from "../app/Poste/Poste";
import { DeleText, HistoriqueWrapper, NavText } from "./Historique.style";
import "./Historique.css";
import React, { useState, useEffect } from "react";
import { getPosts } from "./Historique.service";
import axios from "axios";
const Historique = () => {
  const [isDone, setIsdone] = useState(true);
  const [posteList, setPosteList] = useState([]);
  const changeSatuts = (bol) => {
    setIsdone(bol);
  };

  console.log(isDone);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => {
        isDone
          ? setPosteList(res.data.data.filter((post) => post.status == "done"))
          : setPosteList(
              res.data.data.filter((post) => post.status == "deleted")
            );
      })
      .catch((err) => console.log("invalid adress", err));
  }, [isDone]);

  console.log(getPosts);

  return (
    <HistoriqueWrapper>
      <div className="hedrwrapper">
        <NavText boolVal={isDone} onClick={() => changeSatuts(true)}>
          <p>Terminées</p>
        </NavText>

        <DeleText boolVal={isDone} onClick={() => changeSatuts(false)}>
          <p>Supprimées</p>
        </DeleText>
      </div>
      <Poste posts={posteList} />
    </HistoriqueWrapper>
  );
};

export default Historique;
