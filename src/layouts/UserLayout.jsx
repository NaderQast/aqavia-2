import React from "react";
import Navbar from "../components/Navbar";
import GlobalNav from "../components/GlobalNav";
const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <GlobalNav />

      <div className="p-5">{children}</div>
    </div>
  );
};

export default UserLayout;
