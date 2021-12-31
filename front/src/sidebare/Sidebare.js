import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HistoryIcon from "@material-ui/icons/History";
import "./sidebare.css";
import { SidebareWrapper } from "./Sidebare.style";
import { Link, useLocation } from "react-router-dom";

const Sidebare = () => {
  const location = useLocation();
  const [page, setPage] = useState("/home");
  console.log(location);
  useEffect(() => {
    setPage(location.pathname);
  }, [location]);
  return (
    <SidebareWrapper>
      <div className={page == "/home" ? "selecteeeed" : "notselected"}>
        <div className="homeIcon">
          <HomeOutlinedIcon />
        </div>
        <p>
          <Link
            to={"/home"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <span className="text_acceuil">Accueil</span>
          </Link>
        </p>
      </div>
      <div className={page == "/history" ? "selecteeeed" : "notselected"}>
        <div className="historyIcon">
          <HistoryIcon />
        </div>

        <p>
          <Link
            to={"/history"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <span className="text_historique">Historique</span>{" "}
          </Link>
        </p>
      </div>
    </SidebareWrapper>
  );
};

export default Sidebare;
