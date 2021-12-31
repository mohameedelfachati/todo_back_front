import React from "react";
import AddTodoCm from "../app/AddTodoCm";
import Poste from "../app/Poste/Poste";
import { HomeWrapper } from "../Historique/Historique.style";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [posteInPr, setPosteInPr] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/test")
      .then((res) => {
        setPosteInPr(res.data.filter((post) => post.status == "inProgress"));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="inner_app_content">
      <AddTodoCm />
      <HomeWrapper theme={{ top: "320px", left: "370px" }}>
        <Poste posts={posteInPr} />
      </HomeWrapper>
    </div>
  );
};

export default Home;
