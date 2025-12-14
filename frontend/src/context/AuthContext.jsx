import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const storedToken = localStorage.getItem("token");

  const [token, setToken] = useState(storedToken);
  const [role, setRole] = useState(() => {
    if (storedToken) {
      try {
        return jwtDecode(storedToken).role;
      } catch (error) {
        console.error("Invalid token in localStorage:", error);
        localStorage.removeItem("token");
        return null;
      }
    }
    return null;
  });

  const login = (jwt) => {
    try {
      localStorage.setItem("token", jwt);
      setToken(jwt);
      setRole(jwtDecode(jwt).role);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
