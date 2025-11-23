import React from "react";
import { useNavigate } from "react-router-dom";

const GlobalNav = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 p-3 bg-gray-100 border-b">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => navigate("/")}
      >
        Home
      </button>

      <button
        className="px-3 py-1 bg-gray-500 text-white rounded cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
};

export default GlobalNav;
