import React, { useContext } from "react";
import DataContext from "../../contexts/dataContext";
import "./style.css";

function Header() {
  const data = useContext(DataContext);
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div>
      <div>
        <ul className="nav">
          <p style={{ color: "white" }}>Position : </p>
          <li>
            <button className="btn" onClick={data.handleCenter}>
              Center
            </button>{" "}
          </li>
          <li>
            <button className="btn" onClick={data.handleLower}>
              Lower Right
            </button>
          </li>
          <li style={{ color: "white" }}>Press Esc to hide the window</li>
          <li style={{ color: "white" }}>Enter to show it again</li>
          <li style={{ color: "white" }}>{time}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
