import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Check local storage for user data
  useEffect(() => {
    const userEmail = Cookies.get("userEmail");
    setIsAuthenticated(!!userEmail); // Convert to boolean
  }, []);

  function logIn() {
    setIsAuthenticated(true);
  }

  function logOut() {
    localStorage.removeItem("userEmail");
    Cookies.remove("userEmail"); // clear user data from the local storage
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
