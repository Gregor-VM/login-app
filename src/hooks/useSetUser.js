import { useEffect } from "react";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const useSetUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth === null) return null;
      const doc = await db.collection("users").doc(userAuth.uid).get();
      let userInfo = {};
      if (!doc.exists) {
        userInfo = {
          name: userAuth.displayName,
          email: userAuth.email,
          photoURL: userAuth.photoURL,
          id: userAuth.uid,
        };
        addNewUser(userInfo);
      } else {
        const data = await db
          .collection("users")
          .where("id", "==", userAuth.uid)
          .get();
        userInfo = data.docs[0].data();
      }
      console.log(userInfo);
      dispatch(userActions.setUser(userInfo));
      history.push("/profile");
    });
    return unsuscribe;
  }, [dispatch, history]);
};

function addNewUser(user) {
  const collection = db.collection("users");
  collection.doc(user.id).set(user);
}

export default useSetUser;
