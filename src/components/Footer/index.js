import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" style={{ color: "white" }}>
      <Link
        style={{
          linkStyle: "none",
          color: "white",
          fontSize: "18px",
        }}
        to="/second"
      >
        {" "}
        Go to page 2
      </Link>
    </div>
  );
}

export default Footer;
