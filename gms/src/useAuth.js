import { useState, useEffect } from 'react';

export default function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (you can implement your logic here)
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(userLoggedIn === 'true');
  }, []);

  const login = () => {
    // Perform login logic
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Perform logout logic
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
}
