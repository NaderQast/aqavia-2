import React from "react";

const AdminRoute = ({ children, role }) => {
  if (role !== "admin") return <Navigate to="/" replace />;
  return children;
};

export default AdminRoute;
