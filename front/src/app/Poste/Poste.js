import React, { useEffect } from "react";
import "./Poste.css";
import { Priority } from "../../Historique/Historique.style";
import axios from "axios";

const Poste = ({ posts }) => {
  const changeStatusTodo = (post, boolVal) => {
    boolVal
      ? axios
          .put("http://localhost:3000/post/done", post)
          .then((res) =>
            console.log("the priority has been abdated", post.date)
          )
          .catch((error) => console.error("there is an error", error))
      : axios
          .put("http://localhost:3000/post/deleted", post)
          .then((res) => console.log("the update is succeded", res))
          .catch((error) => console.log("the update failed", error));
  };

  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <div className="poste_container" key={index}>
            <div className="text_container">
              <div className="sub_text_container">
                <t2 className="todo">{post.title} </t2>
                <Priority priority={post.priority}>
                  <div className="important">{post.priority}</div>
                </Priority>
              </div>
              <p className="todo_text">{post.details}</p>
            </div>
            {post.status == "inProgress" ? (
              <div className="button_Add">
                <button
                  className="button_terminé"
                  onClick={() => changeStatusTodo(post, true)}
                >
                  Terminé
                </button>
                <button
                  className="button_annuler"
                  onClick={() => changeStatusTodo(post, false)}
                >
                  Annuler
                </button>
              </div>
            ) : (
              <div className="date">{post.date} </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Poste;
