import React from "react";
import "../css/input.css";

const Input = ({ value, name }) => {
  return (
    <div>
      <input className="input" value={value} placeholder="Buscar" name={name} />
    </div>
  );
};

export default Input;
