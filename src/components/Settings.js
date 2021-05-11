import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import userActions from "../redux/actions/userActions";
import firebaseUtils from "../utils/firebase_utils";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import getImageUrl from "../utils/getImageUrl";

function Settings() {
  const user = useSelector((state) => state.user.user);
  const [updateInfo, setUpdateInfo] = useState(false);
  const [nameInput, setNameInput] = useState(user.name);
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState("");
  const fileRef = useRef();
  const nameRef = useRef("");
  const dispatch = useDispatch();
  const history = useHistory();

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

    try {
      const resName = await firebaseUtils.thisNameExists(name);
      if (resName.docs[0]?.id !== user.id) {
        const already = !resName.empty;
        if (already) return setMsg("This name already exist, try change it");
      }

      const res = await getImageUrl(file);
      if (res !== false && res !== "error") {
        imageUrl = res;
      }
      if (res === "error") {
        return setMsg("Error uploading the image");
      }

      const img = imageUrl !== "" ? imageUrl : user.photoURL;

      await firebaseUtils.updateNameAndPhoto(name, img, user.id);

      setDone("Your profile has been updated");
      dispatch(
        userActions.setUser({
          ...user,
          name: nameRef.current.value,
          photoURL: img,
        })
      );

      setMsg("");
    } catch (error) {
      setMsg("An unexpected error happened");
    }
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "All your information including your articles will be deleted and this action is irreversible, do you want to continue?"
      )
    ) {
      await firebaseUtils.deleteAccount(user.id);
      auth.signOut();
      history.push("/signin");
    }
  };

  return (
    <>
      <NavBar user={user} />
      <div className="container row mx-auto m-0 p-0 p-md-2">
        <div className="card p-4 col-md-3 m-2">
          {user.photoURL !== null ? (
            <img
              className="mx-auto rounded-circle avatar"
              width="100"
              height="100"
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
          <button className="btn btn-danger" onClick={handleDeleteAccount}>
            Delete this account
          </button>
        </div>

        <div className="card col-md-8 m-2 row">
          <div className="card-body col-12 d-flex flex-column justify-content-between p-2 p-md-3">
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
