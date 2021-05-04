import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase";
import articleActions from "../redux/actions/articleActions";
import Loading from "./Loading";
import editingActions from "../redux/actions/editingActions";

function ArticleItem({ name, photoURL, text, date, user_id, itemId }) {
  const [loading, setLoading] = useState(false);
  const userId = useSelector((state) => state.user.user.id);
  const articles = useSelector((state) => state.articles.articles);
  const admin = userId === user_id;
  const dispatch = useDispatch();

  async function handleDelete() {
    if (window.confirm("Are you sure to delete this item?")) {
      setLoading(true);
      await db.collection("articles").doc(itemId).delete();
      const articlesWithItemDeleted = articles.filter(
        (item) => item.itemId !== itemId
      );
      dispatch(articleActions.setArticles(articlesWithItemDeleted));
      setLoading(false);
    }
  }

  async function handleEdit() {
    dispatch(editingActions.setEditing(true));
    dispatch(editingActions.setEditingDoc({ text, date, itemId }));
  }

  return (
    <div className="card shadow-sm p-4 row my-4">
      <div className="card-title">
        <div className="d-flex justify-content-between flex-md-row flex-column">
          <div>
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
            <span className="lead">{name === null ? "Anónimo" : name}</span>
          </div>
          <div>
            {admin && (
              <i
                className="fas fa-edit hover_blue p-2"
                onClick={handleEdit}
              ></i>
            )}
            {admin &&
              (loading ? (
                <Loading sm={true} />
              ) : (
                <i
                  class="fas fa-trash hover_red p-2"
                  onClick={handleDelete}
                ></i>
              ))}
          </div>
        </div>
      </div>
      <div className="card-body col-12 p-2">
        <p>{text}</p>
        <small>Posted: {date}</small>
      </div>
    </div>
  );
}

export default ArticleItem;
