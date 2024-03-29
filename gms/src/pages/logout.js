import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../components/GlobalContext";

export default function Logout() {
  const { setGlobalVariable } = useGlobal();
  const nav = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    // Reset global state if necessary
    setGlobalVariable(null); // Assuming null signifies no logged-in user

    // Redirect to the login page or any other appropriate page
    nav('/sign-in');
  };

  return (
    <div>
      <button onClick={handleLogout} className="btn btn-primary mt-10 ms-16 w-75">Logout</button>
    </div>
  );
}
    