import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ activeUser, isPrivate, children }) {
  //! Is this a private route?
  const redirectTo = isPrivate ? "/login" : "/search";
  //! Is there an activeUser?
  //! Do the two work in combination
  if ((activeUser && isPrivate) || (!activeUser && !isPrivate)) {
    //! If so, render the component
    return <>{children}</>;
  } else {
    //! If not, redirect them
    return <Navigate to={redirectTo} />;
  }
}

export default ProtectedRoute;
