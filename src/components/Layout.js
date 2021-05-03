import React, { useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";

function Layout() {
  useEffect(() => {
    document.body.className += " body_animation";
  }, []);
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={user.id === undefined ? SignIn : Profile}
        />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/profile"
          component={user.id === undefined ? SignIn : Profile}
        />
        <Route path="/recover" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default Layout;
