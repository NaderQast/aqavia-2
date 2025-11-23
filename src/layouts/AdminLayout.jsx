import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import GlobalNav from "../components/GlobalNav";
const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-50">
        <Navbar />
        <GlobalNav />

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
