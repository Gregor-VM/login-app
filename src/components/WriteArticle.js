import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import articleActions from "../redux/actions/articleActions";
import { useDispatch } from "react-redux";
import firebaseUtils from "../utils/firebase_utils";
import editingActions from "../redux/actions/editingActions";

function WriteArticle() {
  const [textValue, setTextValue] = useState("");
  const [msg, setMsg] = useState({ msg: "", error: false });
  const [sending, setSending] = useState(false);
  const user = useSelector((state) => state.user.user);
  const editing = useSelector((state) => state.editing);
  const articlesOfRedux = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editing.editing) {
      setTextValue(editing.editingDoc.text);
    }
  }, [editing]);

  useEffect(() => {
    const eraser = localStorage.getItem("eraser");
    if (eraser) {
      setTextValue(eraser);
    }
  }, []);

  const saveEraser = (e) => {
    e.preventDefault();
    localStorage.setItem("eraser", textValue);
    setMsg({ msg: "Your text in save in this device", error: false });
  };

  const handleShare = async (e) => {
    e.preventDefault();
    setSending(true);

    if (textValue === "") {
      setSending(false);
      return setMsg({ msg: "Tu mensaje está vacio!", error: true });
    }

    if (editing.editing) {
      try {
        const { msg, finalArticle } = await firebaseUtils.updateArticle(
          editing.editingDoc,
          textValue
        );

        setMsg(msg);
        dispatch(
          articleActions.setArticles(
            articlesOfRedux.map((item) => {
              if (item.itemId === finalArticle.itemId) {
                return {
                  ...item,
                  text: finalArticle.text,
                  date: finalArticle.date,
                };
              } else {
                return item;
              }
            })
          )
        );
        dispatch(editingActions.setEditing(false));
        dispatch(editingActions.setEditingDoc({}));

        setTextValue("");
        setSending(false);
        return null;
      } catch (error) {
        setMsg(msg);
        setSending(false);
      }
    }

    try {
      const { msg, finalArticle } = await firebaseUtils.addArticle(
        user,
        textValue
      );
      setMsg(msg);
      if (finalArticle) dispatch(articleActions.addArticle(finalArticle));
      if (finalArticle) localStorage.removeItem("eraser");
      setTextValue("");
      setSending(false);
    } catch ({ msg }) {
      setMsg(msg);
      setSending(false);
    }
  };

  const handleCancelUpdate = () => {
    dispatch(editingActions.setEditingDoc({}));
    dispatch(editingActions.setEditing(false));
    setTextValue("");
  };

  return (
    <div className="card mt-3 row mx-1 shadow-sm">
      <div className="card-body col-12">
        <div className="form-group">
          <textarea
            onChange={(e) => setTextValue(e.target.value)}
            value={textValue}
            rows="6"
            className="form-control"
            placeholder="Write something interesting and share it..."
          ></textarea>
        </div>
        {msg.msg !== "" && (
          <div className={"alert alert-" + (msg.error ? "danger" : "success")}>
            {msg.msg}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-success"
          onClick={handleShare}
          disabled={sending}
        >
          {editing.editing ? "Update" : "Share"}
        </button>

        {editing.editing && (
          <button className="btn btn-danger ml-2" onClick={handleCancelUpdate}>
            Cancel
          </button>
        )}

        {!editing.editing && (
          <button
            className="btn btn-outline-secondary ml-2"
            onClick={saveEraser}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default WriteArticle;
