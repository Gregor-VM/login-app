import React from "react";

function ArticleItem({ name, photoURL, text, date }) {
  return (
    <div className="card shadow-sm p-4 row my-4">
      <div className="card-title">
        {photoURL !== null ? (
          <img
            src={photoURL}
            alt={name + " profile"}
            width="25"
            className="rounded-circle mr-2"
          ></img>
        ) : (
          <i className="fas fa-user-alt mr-2"></i>
        )}
        <span className="lead">{name}</span>
      </div>
      <div className="card-body col-12 p-2">
        <p>{text}</p>
        <small>Posted: {date}</small>
      </div>
    </div>
  );
}

export default ArticleItem;
