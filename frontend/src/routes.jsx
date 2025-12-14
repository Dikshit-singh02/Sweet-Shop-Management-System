import { Routes, Route } from "react-router-dom";

/* Common */
import ProtectedRoute from "./components/common/ProtectedRoute";

/* Auth */
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

/* Pages */
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

/* Sweet Components */
import SweetList from "./components/sweets/SweetList";
import AddSweet from "./components/sweets/AddSweet";
import EditSweet from "./components/sweets/EditSweet";
import PurchaseSweet from "./components/sweets/PurchaseSweet";

console.log("routes.jsx loaded");

const AppRoutes = () => {
  console.log("AppRoutes component rendering");
  return (
    <Routes>
      {/* ---------- PUBLIC ROUTES ---------- */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ---------- PROTECTED ROUTES ---------- */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/sweets"
        element={
          <ProtectedRoute>
            <SweetList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-sweet"
        element={
          <ProtectedRoute>
            <AddSweet />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-sweet/:id"
        element={
          <ProtectedRoute>
            <EditSweet />
          </ProtectedRoute>
        }
      />

      <Route
        path="/purchase/:id"
        element={
          <ProtectedRoute>
            <PurchaseSweet />
          </ProtectedRoute>
        }
      />

      {/* ---------- 404 ---------- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
