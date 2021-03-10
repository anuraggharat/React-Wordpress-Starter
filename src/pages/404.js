import React from "react";
import { Link } from "react-router-dom";

export default function Pagenotfound() {
  return (
    <div className="d-flex">
      <h1>You seem to be lost</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}
