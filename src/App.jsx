import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import ForgetPasword from "./pages/auth/ForgetPasword";

function App() {
  const fakeUserRole = "admin";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/forget"
          element={
            <AuthLayout>
              <ForgetPasword />
            </AuthLayout>
          }
        />

        <Route
          path="/aqavia-2"
          element={
            <ProtectedRoute role={fakeUserRole} allowed={["user", "admin"]}>
              <UserLayout>
                <Dashboard />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute role={fakeUserRole} allowed={["user", "admin"]}>
              <UserLayout>
                <Profile />
              </UserLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute role={fakeUserRole}>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute role={fakeUserRole}>
              <AdminLayout>
                <Users />
              </AdminLayout>
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
