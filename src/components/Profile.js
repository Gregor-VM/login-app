import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import userActions from "../redux/actions/userActions";
import { useBackground } from "../hooks/useBackground";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispacth = useDispatch();

  const handleLogOut = () => {
    auth.signOut();
    history.push("/signin");
    dispacth(userActions.setUser({}));
  };

  useBackground(false);

  return (
    <div className="container vh100 d-flex align-items-center justify-content-center">
      <div className="card p-4">
        {user.photoURL !== null ? (
          <img className="card-img-top" alt="profile" src={user.photoURL}></img>
        ) : null}
        <div className="card-title">
          <h4 className="text-center">
            {user.name === null ? user.email : user.name}
          </h4>
        </div>
        <div className="card-body">
          <p>Your id is: {user.id}</p>
        </div>
        <button
          className="btn btn-danger btn-block rounded-0"
          onClick={handleLogOut}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
