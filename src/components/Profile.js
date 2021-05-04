import React from "react";
import { useSelector } from "react-redux";
import { useBackground } from "../hooks/useBackground";
import WriteArticle from "./WriteArticle";
import NavBar from "./NavBar";
import Articles from "./Articles";

function Profile() {
  const user = useSelector((state) => state.user.user);

  useBackground(false);
  /*
  return (
    <div className="container row mx-auto vh100">
      <div className="card p-4 col-md-3 m-2">
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

      <div className="card col-md-8 m-2">
        <div className="card-body">
          <p>Your email is: {user.email}</p>
        </div>
      </div>
    </div>
  );*/
  return (
    <>
      <NavBar user={user} />
      <div className="container">
        <WriteArticle />
        <Articles />
      </div>
    </>
  );
}

export default Profile;
