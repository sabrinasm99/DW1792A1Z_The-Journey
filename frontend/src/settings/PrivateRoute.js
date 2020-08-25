import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { token } = localStorage;
  if (token) {
    return <Route path={props.path} component={props.component} />;
  }
  return <Redirect to="/" />;
}

export default PrivateRoute;
