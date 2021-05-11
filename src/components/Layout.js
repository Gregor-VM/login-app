import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import Settings from "./Settings";
import Profile from "./Profile";
import preUrl from "../utils/preUrl";

function Layout() {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path={preUrl + "/"}
          component={user.id === undefined ? SignIn : Home}
        />
        <Route path={preUrl + "/signin"} component={SignIn} />
        <Route path={preUrl + "/signup"} component={SignUp} />
        <Route
          path={preUrl + "/home"}
          component={user.id === undefined ? SignIn : Home}
        />
        <Route path={preUrl + "/recover"} component={ForgotPassword} />
        <Route
          path={preUrl + "/settings"}
          component={user.id === undefined ? SignIn : Settings}
        />
        <Route
          path={preUrl + "/profile"}
          component={user.id === undefined ? SignIn : Profile}
        />
      </Switch>
    </Router>
  );
}

export default Layout;
