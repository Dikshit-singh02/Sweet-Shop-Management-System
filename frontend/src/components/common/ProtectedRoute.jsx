import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

/**
 * Protect routes that require authentication
 */
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  // If not logged in, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
