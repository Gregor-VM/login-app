import React, { useState } from "react";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import articleActions from "../redux/actions/articleActions";
import { useDispatch } from "react-redux";

function WriteArticle() {
  const [textValue, setTextValue] = useState("");
  const [msg, setMsg] = useState({ msg: "", error: false });
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleShare = async (e) => {
    e.preventDefault();
    if (textValue === "") {
      return setMsg({ msg: "Tu mensaje está vacio!", error: true });
    }
    const dt = new Date();
    const article = {
      name: user.name,
      user_id: user.id,
      photoURL: user?.photoURL || null,
      text: textValue,
      date: `${dt.getUTCDay()}/${dt.getUTCMonth()}/${dt.getUTCFullYear()} at ${dt.getUTCHours()}:${dt.getUTCMinutes()}:${dt.getUTCSeconds()}`,
    };
    try {
      const res = await db.collection("articles").add(article);
      setMsg({ msg: "Articulo enviado!", error: false });
      dispatch(articleActions.addArticle({ ...article, itemId: res.id }));
      setTextValue("");
    } catch (error) {
      setMsg({ msg: error.message, error: true });
    }
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
        {msg.error && msg.msg !== "" ? (
          <div className="alert alert-danger">{msg.msg}</div>
        ) : null}
        {!msg.error && msg.msg !== "" ? (
          <div className="alert alert-success">{msg.msg}</div>
        ) : null}
        <button type="submit" className="btn btn-success" onClick={handleShare}>
          Share
        </button>
        <button className="btn btn-outline-secondary ml-2">Save</button>
      </div>
    </div>
  );
}

export default WriteArticle;
