import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, signIn, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!signIn || !user?.isAdmin) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default AdminRoute;
