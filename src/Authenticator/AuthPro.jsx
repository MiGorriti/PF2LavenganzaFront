import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };

  const getAccess = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
  };

  useEffect(() => {
    getAccess();
  }, []);

  return {
    isAuthenticated,
    user,
    saveUser,
    removeUser,
    getAccess,
  };
};

export { useAuth };

