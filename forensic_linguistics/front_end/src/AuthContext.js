import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for user data
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsAuthenticated(true); // User is logged in
    }
  }, []);

  function logIn() {
    setIsAuthenticated(true);
  }

  function logOut() {
    // Clear user data from local storage
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false); // Update authentication state
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
