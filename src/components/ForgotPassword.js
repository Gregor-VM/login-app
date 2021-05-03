import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [msg, setMsg] = useState("");
  const inputRef = useRef();
  const handleSendEmail = async () => {
    try {
      await auth.sendPasswordResetEmail(inputRef.current.value);
      setMsg("You have to check your email and follow the instructions");
    } catch (error) {
      setMsg(error.message);
    }
  };
  return (
    <div className="container vh100 d-flex align-items-center justify-content-center">
      <div className="card p-4">
        <div className="card-title">
          <h4 className="text-center display-4">Recover my account</h4>
        </div>
        <div className="form-group">
          <label htmlFor="resetpassword"></label>
          <input
            ref={inputRef}
            id="resetpassword"
            type="text"
            className="form-control"
            placeholder="Write your email..."
          ></input>
        </div>
        <button className="btn btn-primary btn-block" onClick={handleSendEmail}>
          Send Email
        </button>
        <small className="my-2 text-center">{msg}</small>
        <Link to="/signin">
          <small className="text-center mt-1">Back to Sign in</small>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
