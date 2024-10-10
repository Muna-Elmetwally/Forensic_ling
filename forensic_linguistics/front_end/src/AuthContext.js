import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userEmail = Cookies.get("userEmail");
    setIsAuthenticated(!!userEmail); // Convert to boolean
  }, []);

  function logIn() {
    setIsAuthenticated(true);
  }

  function logOut() {
    localStorage.removeItem("userEmail");
    Cookies.remove("userEmail");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
