import React from "react";
import Header from "../components/Header";

export default function About() {
  return (
    <div className="app">
      <Header />
      <div className="about">
        <h1>REACT CLEAN BLOG</h1>
        <div className="overlay"></div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h1>ABOUT</h1>
        </div>
        <p>
          This is a Clean Blog Template for React. The website fetches blog from
          your WordPress Website and displays them. The Tech stack used is:
        </p>
        <ul>
          <li>React.js as Front-End Framwork.</li>
          <li>axios for API fetching.</li>
          <li>React-router-dom for routing</li>
          <li>CSS for styling</li>
        </ul>
        <p>To use this follow these steps:</p>
        <ol>
          <li>Clone this repo.</li>
          <li>create a .env file at root directory</li>
          <li>
            Add your public wordpress api with the variable name
            REACT_APP_API_END_POINT
          </li>
          <li>Install dependencies and start your development server</li>
        </ol>
      </div>
    </div>
  );
}
