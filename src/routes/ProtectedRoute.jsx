import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowed, role }) => {
  if (!role || !allowed.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
