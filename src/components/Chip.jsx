import React from "react";
import "../css/chip.css";

const Chip = ({ chipDescription, color }) => {
  return (
    <div className="chip" style={{ backgroundColor: color }}>
      {chipDescription}
    </div>
  );
};

export default Chip;
