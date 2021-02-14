import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { selectIsAuthenticated } from "../redux/reselectFunc/authReselect";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);


const mapStateToProps = state => ({
  isAuthenticated : selectIsAuthenticated(state)
});
export default connect(mapStateToProps)(PrivateRoute);
