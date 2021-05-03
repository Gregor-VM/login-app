import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();

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

  const googleLogin = () => {
    signInWithGoogle();
  };

  const quitError = (setError) => {
    setError(undefined);
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const emailNotError =
      emailRef.current.value === ""
        ? setEmailError("Email field can't be empty")
        : quitError(setEmailError);

    let passNotError = false;

    if (passwordRef.current.value === "") {
      setPasswordError("Password field can't be empty");
    } else if (passwordRef.current.value.length < 6) {
      setPasswordError("The password is too short");
    } else {
      passNotError = quitError(setPasswordError);
    }

    if (emailNotError && passNotError) {
      console.log(passwordError, emailError);
      try {
        await auth.signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );
      } catch (error) {
        setEmailError(error.message);
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh100">
      <div className="card p-5">
        <div className="card-title">
          <h1 className="display-4 text-center">Sign In</h1>
        </div>
        <div className="card-body p-0">
          <form onSubmit={handleSignIn}>
            <div className="form-group row">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                className={"form-control " + (emailError && "is-invalid")}
                placeholder="Enter your email..."
              ></input>
              {emailError && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>
            <div className="form-group row">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                id="password"
                type="password"
                className={"form-control " + (passwordError && "is-invalid")}
                placeholder="Enter your password..."
              ></input>
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-primary btn-block mt-2">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-center">or</p>
          <button
            className="btn btn-outline-danger btn-block mb-2"
            onClick={googleLogin}
          >
            <i className="fab fa-google mr-2"></i>Sign In With Google
          </button>
        </div>
        <small className="text-center">
          Don't you have an account yet? <Link to="/signup">Sign Up here!</Link>
        </small>
        <small className="text-center">
          <Link to="/recover">Forgot Password?</Link>
        </small>
      </div>
    </div>
  );
}

export default SignIn;
