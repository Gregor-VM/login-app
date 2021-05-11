import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import { useBackground } from "../hooks/useBackground";
import { validateSignIn } from "../utils/utils";
import useSetUser from "../hooks/useSetUser";
import preUrl from "../utils/preUrl";

function SignIn() {
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const emailRef = useRef();
  const passwordRef = useRef();

  const googleLogin = () => {
    signInWithGoogle();
  };

  const handleSignIn = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    e.preventDefault();

    const [emailNotError, passNotError] = validateSignIn(
      email,
      password,
      setEmailError,
      setPasswordError
    );

    if (emailNotError && passNotError) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        setEmailError(error.message);
      }
    }
  };

  useSetUser();

  useBackground(true);

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
          Don't you have an account yet?{" "}
          <Link to={preUrl + "/signup"}>Sign Up here!</Link>
        </small>
        <small className="text-center">
          <Link to={preUrl + "/recover"}>Forgot Password?</Link>
        </small>
      </div>
    </div>
  );
}

export default SignIn;
