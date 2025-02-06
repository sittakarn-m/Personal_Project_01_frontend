import React from "react";
import { Link } from "react-router";

function MainNav() {
  return (
    <nav
      className="bg-green-500 text-white px-8 py-2 
    flex justify-between font-semibold shadow-amber-400 "
    >
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </div>

      <div className="flex gap-4">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default MainNav;
