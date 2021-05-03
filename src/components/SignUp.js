import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import userActions from "../redux/actions/userActions";

function SignUp() {
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignUp = async (e) => {
    const emailValue = emailRef.current.value;
    const passValue = passwordRef.current.value;

    let emailNotError = false;
    let passNotError = false;

    e.preventDefault();

    if (emailValue === "") {
      setEmailError("Email field can't be empty");
    } else {
      setEmailError(undefined);
      emailNotError = true;
    }

    if (passValue === "") {
      setPasswordError("Password field can't be empty");
    } else if (
      passwordError &&
      passValue !== confirmPasswordRef.current.value
    ) {
      setPasswordError("The password doesn't match");
    } else if (passwordError && passValue < 6) {
      setPasswordError("The password is too short");
    } else {
      setPasswordError(undefined);
      passNotError = true;
    }

    if (emailNotError && passNotError) {
      try {
        await auth.createUserWithEmailAndPassword(emailValue, passValue);
      } catch (error) {
        setEmailError(error.message);
      }
    }
  };

  const googleLogin = () => {
    signInWithGoogle();
  };

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

  return (
    <div className="container d-flex align-items-center justify-content-center vh100">
      <div className="card p-5">
        <div className="card-title">
          <h1 className="display-4 text-center">Sign Up</h1>
        </div>
        <div className="card-body p-1">
          <form onSubmit={handleSignUp}>
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
              <label htmlFor="confirmpassword">Confirm password</label>
              <input
                ref={confirmPasswordRef}
                id="confirmpassword"
                type="password"
                className={"form-control " + (passwordError && "is-invalid")}
                placeholder="Enter your confirm password..."
              ></input>
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>
            <div className="form-group row">
              <button type="submit" className="btn btn-primary btn-block mt-2">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="text-center m-0 mb-3">or</p>
        <button
          className="btn btn-outline-danger btn-block mb-2"
          onClick={googleLogin}
        >
          <i className="fab fa-google mr-2"></i>Sign Up With Google
        </button>
        <small className="text-center">
          Do you already have an account?
          <Link to="/signin"> Sign In here!</Link>
        </small>
      </div>
    </div>
  );
}

export default SignUp;
