import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div>
        <h3>React WordPress</h3>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
