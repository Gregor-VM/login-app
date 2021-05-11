import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import { useBackground } from "../hooks/useBackground";
import { validateSignUp } from "../utils/utils";
import useSetUser from "../hooks/useSetUser";
import preUrl from "../utils/preUrl";

function SignUp() {
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSignUp = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    e.preventDefault();

    const [emailNotError, passNotError] = validateSignUp(
      email,
      password,
      setEmailError,
      setPasswordError,
      confirmPasswordRef.current.value
    );

    if (emailNotError && passNotError) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setEmailError(error.message);
      }
    }
  };

  const googleLogin = () => {
    signInWithGoogle();
  };

  useSetUser();

  useBackground(true);

  return (
    <div className="container d-flex align-items-center justify-content-center vh100">
      <div className="card p-4">
        <div className="card-title">
          <h1 className="display-4 text-center m-0">Sign Up</h1>
        </div>
        <div className="card-body px-4 m-0 py-0">
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
          <Link to={preUrl + "/signin"}> Sign In here!</Link>
        </small>
      </div>
    </div>
  );
}

export default SignUp;
