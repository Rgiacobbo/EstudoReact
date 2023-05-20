import React from "react";
import "./index.css";
function SecondatyGradientButton({ text, icon }) {
  return (
    <button className="secondaryGrandientButton">
      {icon}
      {text}
    </button>
  );
}

export default SecondatyGradientButton;
