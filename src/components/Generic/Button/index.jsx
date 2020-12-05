/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";

function Button({ onSubmit }) {
  return (
    <button type="button" onClick={onSubmit} className="Button">
      {" "}
      Szukaj użytkownika
    </button>
  );
}

export default Button;
