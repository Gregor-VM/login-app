import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../firebase";
import userActions from "../redux/actions/userActions";
import profileActions from "../redux/actions/profileActions";

function NavBar({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentLocation = history.location.pathname;

  const handleLogOut = (e) => {
    e.preventDefault();
    auth.signOut();
    history.push("/signin");
    dispatch(userActions.setUser({}));
  };

  const handleSeeProfile = (e) => {
    e.preventDefault();
    dispatch(profileActions.setProfileId(user.id));
    history.push("/profile");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/#" onClick={handleSeeProfile}>
        {user.photoURL !== null ? (
          <img
            src={user.photoURL}
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle mr-2"
            alt="avatar"
          ></img>
        ) : (
          <i className="fas fa-user-alt mr-2"></i>
        )}
        {user.name === null ? "Anónimo" : user.name}
      </a>
      <ul className="navbar-nav d-flex flex-row">
        <li
          className={
            (currentLocation.includes("/home") ? "active" : "") +
            " nav-item mx-2"
          }
        >
          <Link className="nav-link" to="/home">
            <i className="fas fa-home mx-1 my-0"></i>
            Home<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li
          className={
            (currentLocation.includes("/settings") ? "active" : "") +
            " nav-item mx-2"
          }
        >
          <Link className="nav-link" to="/settings">
            <i className="fas fa-cog mx-1"></i>
            Settings<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/#" onClick={handleLogOut}>
            <i className="fas fa-sign-out-alt mx-1"></i>
            Logout<span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
