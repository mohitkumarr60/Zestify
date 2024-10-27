import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const UserRoute = ({ children }) => {
  const { signIn, loading } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!signIn) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default UserRoute;
