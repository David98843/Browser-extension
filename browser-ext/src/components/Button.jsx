import { useEffect, useState } from "react";

const Button = ({ darkMode, btnName, ref, onClick, active_ }) => {
  const [hoverColor, setHoverColor] = useState(false);
  const [active, setActive] = useState(active_ ? active_ : false);
  let btnColor;
  let btnBgColor;
  let btnBorder;
  // let transition;

  useEffect(() => {
    setActive(active_);
  }, [active_]);

  if (darkMode && hoverColor) {
    // btnColor = "#FBFFFF";
    // btnBgColor = "#525866";
    btnBorder = "1px solid transparent";
  } else if (darkMode && active) {
    btnColor = "black";
    btnBgColor = "hsl(3, 77%, 44%)";
    btnBorder = "1px solid transparent";
  } else if (hoverColor) {
    // btnColor = "#878D9D";
    // btnBgColor = "#F6FAFD";
    btnBorder = "1px solid transparent";
  } else if (darkMode) {
    btnColor = "white";
    btnBgColor = "#2F354B";
  } else if (active) {
    btnColor = "white";
    btnBgColor = "hsl(3, 77%, 44%)";
    btnBorder = "1px solid transparent";
  } else {
    btnColor = "black";
    btnBgColor = "white";
  }
  return (
    <button
      ref={ref}
      onClick={() => {
        onClick();
        setActive(!active);
      }}
      onMouseOver={() => {
        setHoverColor(true);
        // if (active) setHoverColor(false);
      }}
      onMouseLeave={() => {
        setHoverColor(false);
        // if (active) setHoverColor(false);
      }}
      className={`btn ${active ? "active" : ""}`}
      style={{
        color: btnColor,
        backgroundColor: btnBgColor,
        border: btnBorder,
        // transition: transition,
      }}
    >
      {btnName}
    </button>
  );
};

export default Button;
