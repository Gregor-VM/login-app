import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import { db } from "../firebase";
import userActions from "../redux/actions/userActions";

function Settings() {
  const user = useSelector((state) => state.user.user);
  const [updateInfo, setUpdateInfo] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState("");
  const fileRef = useRef();
  const nameRef = useRef("");
  const dispatch = useDispatch();

  const handleChangeInfo = async () => {
    let imageUrl = "";
    const name = nameRef.current.value;
    const file = fileRef.current.files[0];
    if (updateInfo === false) {
      return setUpdateInfo(true);
    }

    if (file === undefined && user.name === name) {
      return setMsg("You didn't change anything");
    }

    if (name < 6) {
      return setMsg("Your name can't have less of 6 words");
    }

    const resName = await db
      .collection("users")
      .where("name", "==", name)
      .get();
    if (resName.docs[0]?.id !== user.id) {
      const already = !resName.empty;
      if (already) return setMsg("This name already exist, try change it");
    }

    if (file?.type?.includes("image")) {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", "mhxqfgbm");

      const options = {
        method: "POST",
        body: formData,
      };

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dalnxbdem/image/upload",
        options
      );

      const jsonData = await res.json();
      const url = jsonData.url;
      console.log(url);
      imageUrl = url;
    }

    const img = imageUrl !== "" ? imageUrl : user.photoURL;

    await db.collection("users").doc(user.id).update({
      name: name,
      photoURL: img,
    });

    setDone("Your profile has been updated");
    dispatch(
      userActions.setUser({
        ...user,
        name: nameRef.current.value,
        photoURL: img,
      })
    );

    setMsg("");
  };

  return (
    <>
      <NavBar user={user} />
      <div className="container row mx-auto">
        <div className="card p-4 col-md-3 m-2">
          {user.photoURL !== null ? (
            <img
              className="card-img-top rounded-circle"
              alt="profile"
              src={user.photoURL}
            ></img>
          ) : (
            <i
              className="fas fa-user-alt mr-2 text-center"
              style={{ fontSize: 70 }}
            ></i>
          )}
          <div className="card-title mt-3 text-center">
            <h4>{user.name === null ? "Anónimo" : user.name}</h4>
            <small>{user.email}</small>
          </div>
          <button className="btn btn-danger">Delete this account</button>
        </div>

        <div className="card col-md-8 m-2 row">
          <div className="card-body col-12">
            <form>
              <div className="form-group row">
                <label htmlFor="user_name" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-control"
                    id="user_name"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    disabled={!updateInfo}
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="user_photo" className="col-sm-2 col-form-label">
                  Image
                </label>
                <div className="col-sm-10">
                  <input
                    ref={fileRef}
                    type="file"
                    className="form-control-file"
                    id="user_photo"
                    disabled={!updateInfo}
                  ></input>
                </div>
              </div>
            </form>
            {msg !== "" && <div className="alert alert-danger">{msg}</div>}
            {done !== "" && <div className="alert alert-success">{done}</div>}
            <button className="btn btn-success" onClick={handleChangeInfo}>
              Update Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
