import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

const useSetUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth === null) return null;
      dispatch(
        userActions.setUser({
          name: userAuth.displayName,
          email: userAuth.email,
          photoURL: userAuth.photoURL,
          id: userAuth.uid,
        })
      );
      history.push("/profile");
    });
    return unsuscribe;
  }, [dispatch, history]);
};

export default useSetUser;
