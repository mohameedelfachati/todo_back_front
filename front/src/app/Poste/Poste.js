import React from "react";
import "./Poste.css";
import { Priority } from "../../Historique/Historique.style";

const Poste = ({ posts }) => {
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
                  //onClick={changeStatusTodone(post)}
                >
                  Terminé
                </button>
                <button
                  className="button_annuler"
                  //onClick={changeStatusToDeleted(post)}
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
