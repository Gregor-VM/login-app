import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../firebase";
import userActions from "../redux/actions/userActions";

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
    history.push("/profile", user.id);
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
            (currentLocation === "/home" ? "active" : "") + " nav-item mx-2"
          }
        >
          <Link className="nav-link" to="/home">
            Home<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li
          className={
            (currentLocation === "/settings" ? "active" : "") + " nav-item mx-2"
          }
        >
          <Link className="nav-link" to="/settings">
            Settings<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link" href="/#" onClick={handleLogOut}>
            Logout<span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
