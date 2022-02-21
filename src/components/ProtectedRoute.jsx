import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, isPrivate, children }) {
  //! Is this a private route?
  const redirectTo = isPrivate ? "/login" : "/search";
  //! Is there an activeUser?
  //! Do the two work in combination
  if ((user && isPrivate) || (!user && !isPrivate)) {
    //! If so, render the component
    return <>{children}</>;
  } else {
    //! If not, redirect them
    return <Navigate to={redirectTo} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
