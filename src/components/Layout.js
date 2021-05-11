import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import Settings from "./Settings";
import Profile from "./Profile";

function Layout() {
  const user = useSelector((state) => state.user.user);

  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={user.id === undefined ? SignIn : Home}
        />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={user.id === undefined ? SignIn : Home} />
        <Route path="/recover" component={ForgotPassword} />
        <Route
          path="/settings"
          component={user.id === undefined ? SignIn : Settings}
        />
        <Route
          path="/profile"
          component={user.id === undefined ? SignIn : Profile}
        />
      </Switch>
    </HashRouter>
  );
}

export default Layout;
