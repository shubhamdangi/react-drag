import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import DataContext from "../../contexts/dataContext";

function Dialog() {
  const [diffX, setDiffX] = useState(0);
  const [diffY, setDiffY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  var left1 = 0;
  var right2 = 0;
  const position = useContext(DataContext);

  const dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  };
  // 470 150

  useEffect(() => {
    if (position.center) {
      setLeft(470);
      setRight(150);
    }
    if (position.lower) {
      setLeft(850);
      setRight(220);
    }
  }, [position.center, position.lower]);

  const handleDragging = (e) => {
    if (dragging) {
      left1 = e.screenX - diffX;
      right2 = e.screenY - diffY;
      setLeft(left1);
      setRight(right2);
      position.reset();
    }
  };
  // console.log(left);
  const dragEnd = () => {
    setDragging(false);
  };
  return (
    <div>
      <div
        className="Dialog"
        style={{
          left: left,
          top: right,
          display: position.visible ? "" : "none",
        }}
        onMouseDown={(e) => dragStart(e)}
        onMouseMove={(e) => handleDragging(e)}
        onMouseUp={() => dragEnd()}
      >
        <div className="Contents">
          {position.center ? (
            <h2>Center</h2>
          ) : position.lower ? (
            <h2>Lower Right</h2>
          ) : (
            <h2>Floating</h2>
          )}
        </div>

        <p>Drag me around</p>
      </div>
    </div>
  );
}

export default Dialog;
