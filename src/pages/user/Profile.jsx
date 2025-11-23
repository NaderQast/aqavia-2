import React from "react";

const Profile = () => {
  return (
    <div className="bg-white shadow p-6 rounded max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">User Profile</h1>

      <div className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm">Name</label>
          <input
            type="text"
            value="John Doe"
            readOnly
            className="w-full mt-1 p-2 border rounded bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Email</label>
          <input
            type="email"
            value="john@example.com"
            readOnly
            className="w-full mt-1 p-2 border rounded bg-gray-50"
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Phone</label>
          <input
            type="text"
            value="+988608187"
            readOnly
            className="w-full mt-1 p-2 border rounded bg-gray-50"
          />
        </div>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
