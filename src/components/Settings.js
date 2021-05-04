import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";

function Settings() {
  const user = useSelector((state) => state.user.user);
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
                    type="text"
                    className="form-control"
                    id="user_name"
                    value={user.name}
                    disabled
                  ></input>
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="user_photoURL"
                  className="col-sm-2 col-form-label"
                >
                  Image URL
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="user_photoURL"
                    value={user.photoURL}
                    disabled
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
