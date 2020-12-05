/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

function AlertArea() {
  const alertText = useSelector((state) => state.alertArea);

  return <div className="AlertArea">{alertText}</div>;
}

export default AlertArea;
