import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // state for signIn
  const [signIn, setSignIn] = useState(false);
  // state for login and signup
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(true);
  // state to set user details
  const [user, setUser] = useState(null);

  useEffect(() => {
    // check user session on page load
    const verifySession = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/verify", {
          withCredentials: true,
        });
        if (response.status === 200 && response.data.isAuthenticated) {
          setSignIn(true);
          setUser(response.data.user);
        } else {
          setSignIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error verifying session:", error);
        setSignIn(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, setSignIn, login, setLogin, signup, setSignup, user }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
