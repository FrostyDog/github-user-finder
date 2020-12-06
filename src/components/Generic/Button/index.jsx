/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";

function Button({ onSubmit, buttonState, text }) {
  return (
    <button
      type="button"
      disabled={buttonState}
      onClick={onSubmit}
      className="Button"
    >
      {text}
    </button>
  );
}

export default Button;
