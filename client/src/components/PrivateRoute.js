import React from "react";
import { Route, Redirect } from "react-router-dom";

// Three rules for the private route component
// 1) It has to have the same API as the route component
// 2) It renders a Route and passes all the props through to it
// 3) It checks if the use is authenticated, if they are, it renders the 'component' prop. If notm it redirects the user to login

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          //render component from props
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;