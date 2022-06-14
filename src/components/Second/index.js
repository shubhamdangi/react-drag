import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "600px",
        zIndex: "100",
        position: "relative",
        alignItems: "center",
        // display: "flex",
        justifyContent: "center",
        paddingTop: "300px",
      }}
    >
      <h3>
        Welcome to second page! I have created the routes using :{" "}
        <b> React Router DOM</b>{" "}
      </h3>{" "}
      <br />
      <div style={{ position: "relative" }}>
        <Link to="/"> Go back to Home Page</Link>
      </div>
    </div>
  );
}

export default index;
