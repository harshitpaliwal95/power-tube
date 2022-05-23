import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  return auth.isAuth ? children : <Navigate to="/login" />;
};
