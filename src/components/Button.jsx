import React from "react";
import "../css/button.css";
import { Link } from "react-router-dom";

const Button = ({ buttonName, disabled, linkTo }) => {
  return (
    <>
      <Link to={linkTo} className="primaryButton" disabled={disabled}>
        {buttonName}
      </Link>
    </>
  );
};

export default Button;
