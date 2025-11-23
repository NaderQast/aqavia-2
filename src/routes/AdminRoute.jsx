import React from "react";

const AdminRoute = ({ children, role }) => {
  if (role !== "admin") return <Navigate to="/aqavia-2" replace />;
  return children;
};

export default AdminRoute;
