import React from "react";
import Loading from "./Loading";

function ProfileInfo({ user }) {
  if (user.id === undefined) {
    return (
      <div className="card p-4 col-md-3 m-4 h-25">
        <Loading center={true} />
      </div>
    );
  }
  return (
    <>
      <div className="card p-4 col-md-3 m-4 h-25">
        {user.photoURL !== null ? (
          <img
            className="mx-auto rounded-circle"
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
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
