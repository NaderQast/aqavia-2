import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded">
          <p className="font-medium">Total Orders</p>
          <h2 className="text-xl font-bold mt-2">12</h2>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <p className="font-medium">Wallet Balance</p>
          <h2 className="text-xl font-bold mt-2">$250.00</h2>
        </div>

        <div className="bg-purple-100 p-4 rounded">
          <p className="font-medium">Messages</p>
          <h2 className="text-xl font-bold mt-2">5</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
