/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";

function Button({ onSubmit, buttonState }) {
  return (
    <button
      type="button"
      disabled={buttonState}
      onClick={onSubmit}
      className="Button"
    >
      {" "}
      Szukaj użytkownika
    </button>
  );
}

export default Button;
