import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Articles from "./Articles";
import firebaseUtils from "../utils/firebase_utils";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";

function Profile(props) {
  const userRedux = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.profile.profileId);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebaseUtils.getUserInfoById(userId).then((user) => {
      setUser(user);
    });
  }, [userId]);
  return (
    <>
      <NavBar user={userRedux} />

      <div className="row mx-auto">
        <ProfileInfo user={user} />

        <div className="col-md-8">
          <Articles id={user.id} />
        </div>
      </div>
    </>
  );
}

export default Profile;
